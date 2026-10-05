/* ==========================================================================
   COMMON CONTEXT — dùng chung cho A / B / C
   70% chung. KHÔNG sửa file này khi đang build option riêng.
   Muốn đổi gì → báo trong group chat, cả ba đồng ý rồi tác giả common sửa.

   Bối cảnh: học viên tự học khóa RAG qua VIDEO + SLIDE + đoạn code.
   Người học kẹt ở: tại sao phải kết hợp semantic search + BM25 (RRF).
   Nguồn: interview/note.md (PN1).

   API để option hook vào:
     CTX.on(fn)        → nhận mọi hành động của người test
     CTX.emit(key, d)  → phát sự kiện ra ngoài
     CTX.reset()       → đưa context về trạng thái ban đầu

   Sự kiện phát ra (mọi sự kiện đều có .act = mô tả hành động):
     video:play      video:pause     video:seek      video:seekBack
     slide:next      slide:prev      slide:jump      slide:revisit
     code:copy       code:read
   ========================================================================== */

(function () {
  'use strict';

  var listeners = [];
  var CUR = 260, TOTAL = 480;          // dừng ở 04:20
  var playTimer = null;
  var playing = false;

  /* Các mốc đáng chú ý trong video — dùng để nhận ra hành vi lặp */
  var CUES = [
    { t: 120, label: '02:00',  note: 'Giới thiệu BM25' },
    { t: 200, label: '03:20',  note: 'Giới thiệu semantic search' },
    { t: 260, label: '04:20',  note: 'Tại sao kết hợp hai cách' },
    { t: 400, label: '06:40',  note: 'Công thức RRF' }
  ];

  /* Slide deck — nội dung thật, đúng như bài học viết cho người chưa từng
     gặp tình huống này trong dữ liệu thật của họ (đó là điểm của note). */
  var SLIDES = [
    { n: 12, t: 'Tại sao kết hợp hai phương pháp?',
      b: '<p>Mỗi phương pháp có điểm mạnh và điểm yếu riêng. Vì vậy ta ' +
         'kết hợp kết quả của cả hai.</p>' +
         '<div class="formula">score(d) = Σ 1 / (k + rank_i(d))</div>' +
         '<p style="margin-top:10px">Trong đó <b>k</b> là hằng số làm mềm, ' +
         '<b>rank</b> là thứ hạng của tài liệu trong mỗi danh sách.</p>' +
         '<div class="nodemo">Chưa có ví dụ nào ở slide này</div>' },
    { n: 13, t: 'Ví dụ minh hoạ',
      b: '<div class="two">' +
         '  <div class="box"><div class="t">Câu hỏi: "hạn nộp hồ sơ"</div>' +
         '    <div class="d">BM25 tìm được đoạn có đúng cụm từ này.</div></div>' +
         '  <div class="box"><div class="t">Cùng câu hỏi</div>' +
         '    <div class="d">Semantic search tìm được đoạn nói về thủ tục ' +
         '    nộp hồ sơ dù không chứa cụm từ đó.</div></div>' +
         '</div>' +
         '<p style="margin-top:12px">Khi đặt cạnh nhau, ta thấy mỗi cách ' +
         'bỏ sót điều mà cách kia tìm được.</p>' },
    { n: 14, t: 'Tham số k',
      b: '<p>Thường đặt <b>k = 60</b>. Giá trị càng lớn thì thứ hạng càng ' +
         'ít ảnh hưởng.</p>' +
         '<div class="formula">rank 1  →  1/(k+1)   đóng góp nhiều nhất</div>' },
    { n: 15, t: 'Khi nào dùng hybrid?',
      b: '<ul><li>Query có từ khoá riêng (mã số, tên riêng)</li>' +
         '<li>Query diễn đạt tự nhiên, không có từ khoá rõ ràng</li>' +
         '<li>Dataset nhỏ, BM25 có thể tốt hơn</li></ul>' }
  ];

  var slideIdx = 0;   // bắt đầu ở slide 12 — chỗ đang kẹt

  function emit(key, detail) {
    var evt = { key: key, act: key, t: Date.now(), detail: detail || {} };
    listeners.forEach(function (fn) { fn(evt); });
  }

  var CTX = {
    on: function (fn) { listeners.push(fn); },
    emit: emit,
    reset: function () { window.location.reload(); }
  };
  window.CTX = CTX;

  function fmt(sec) {
    var m = Math.floor(sec / 60), s = Math.floor(sec % 60);
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var screen   = document.getElementById('screen');
    var playBtn  = document.getElementById('playBtn');
    var track    = document.getElementById('track');
    var fill     = document.getElementById('fill');
    var head     = document.getElementById('head');
    var timeLbl  = document.getElementById('timeLbl');
    var live     = document.getElementById('liveLabel');
    var marksBox = document.getElementById('marks');
    var slideBody= document.getElementById('slideBody');
    var slideIdxEl = document.getElementById('slideIdx');

    // ---------------- video ----------------
    function paint() {
      var pct = (CUR / TOTAL) * 100;
      fill.style.width = pct + '%';
      head.style.left = pct + '%';
      timeLbl.textContent = fmt(CUR) + ' / ' + fmt(TOTAL);
      if (playing) {
        var near = nearestCue(CUR);
        live.textContent = '▶ ' + fmt(CUR) + (near ? ' — ' + near.note : '');
      }
    }

    CUES.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = c.label; b.title = c.note;
      b.addEventListener('click', function () { seekTo(c.t, false); });
      marksBox.appendChild(b);

      var m = document.createElement('div');
      m.className = 'mark'; m.style.left = (c.t / TOTAL * 100) + '%';
      track.appendChild(m);
    });

    function seekTo(t, manual) {
      var back = t < CUR;
      CUR = Math.max(0, Math.min(TOTAL, t));
      paint();
      emit(back ? 'video:seekBack' : 'video:seek', { to: CUR, manual: !!manual, cue: cueAt(CUR) });
    }

    track.addEventListener('click', function (e) {
      var r = track.getBoundingClientRect();
      seekTo(Math.round(((e.clientX - r.left) / r.width) * TOTAL), true);
    });

    playBtn.addEventListener('click', function () {
      playing = !playing;
      playBtn.textContent = playing ? '⏸' : '▶';
      screen.classList.toggle('playing', playing);
      emit(playing ? 'video:play' : 'video:pause', { at: CUR });
      if (playTimer) { clearInterval(playTimer); playTimer = null; }
      if (playing) {
        playTimer = setInterval(function () {
          CUR = Math.min(TOTAL, CUR + 1); paint();
          if (CUR >= TOTAL) { playing = false; screen.classList.remove('playing');
            playBtn.textContent = '▶'; clearInterval(playTimer); playTimer = null; }
        }, 1000);
      }
    });

    function cueAt(sec) {
      var c = nearestCue(sec);
      return c ? c.label : null;
    }
    function nearestCue(sec) {
      var best = null, bd = 21;
      CUES.forEach(function (c) { var d = Math.abs(c.t - sec); if (d < bd) { bd = d; best = c; } });
      return best;
    }

    // ---------------- slide ----------------
    function renderSlide() {
      var s = SLIDES[slideIdx];
      slideBody.innerHTML = '<h3>' + s.t + '</h3>' + s.b;
      slideIdxEl.textContent = 'Slide ' + s.n + ' / 24';
    }

    function goSlide(next, kind) {
      slideIdx = Math.max(0, Math.min(SLIDES.length - 1, next));
      renderSlide();
      emit(kind, { slide: SLIDES[slideIdx].n, title: SLIDES[slideIdx].t });
    }

    document.getElementById('nextSlide').addEventListener('click', function () { goSlide(slideIdx + 1, 'slide:next'); });
    document.getElementById('prevSlide').addEventListener('click', function () { goSlide(slideIdx - 1, 'slide:prev'); });
    document.getElementById('backToSlide').addEventListener('click', function () { goSlide(0, 'slide:revisit'); });

    // Quay lại slide 12 nhiều lần = mẫu lặp (giống tua lại video)
    var revisitCount = 0;
    document.getElementById('backToSlide').addEventListener('click', function () { revisitCount++; });

    // ---------------- code ----------------
    var code = document.querySelector('.code pre');
    if (code) {
      var copyBtn = document.createElement('button');
      copyBtn.className = 'btn sm';
      copyBtn.type = 'button';
      copyBtn.textContent = 'Copy đoạn này';
      copyBtn.style.margin = '0 0 10px 0';
      document.querySelector('.code').insertBefore(copyBtn, code);
      copyBtn.addEventListener('click', function () {
        emit('code:copy', { file: 'rag/retrieval.py' });
        copyBtn.textContent = 'Đã copy — vẫn chạy được';
        setTimeout(function () { copyBtn.textContent = 'Copy đoạn này'; }, 1800);
      });
    }

    paint();
    renderSlide();
  });
})();
