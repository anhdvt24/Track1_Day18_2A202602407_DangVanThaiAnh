/* ==========================================================================
   OPTION C — AGENT THEO DÕI, RỒI MỞ HỘI THOẠI
   Người build: Đặng Văn Thái Anh (2A202602407)
   Theo khuôn NHOM/Day18-chot-chung.md §2.5, §2.6, §3.4, §4.3
   --------------------------------------------------------------------------
   Ba nguyên tắc bắt buộc của option này (không sửa, không nới):
     C1  Câu mở phải là QUAN SÁT KIỂM CHỨNG ĐƯỢC — có số đếm và mốc thời gian.
         Tuyệt đối không dùng "tôi nghĩ", "có vẻ bạn đang kẹt".
     C2  Nếu user nói "không phải" → DỪNG và XOÁ suy đoán. Không cố giữ lập luận.
     C3  Bỏ qua chỉ báo một lần → lần sau IM. Nhưng phải có đường tự mở lại.

   Tín hiệu dùng để phát hiện — lấy từ hành vi thật trong interview/note.md:
     xem lại video ở cùng một mốc
     đọc lại slide cũ
     copy code rồi vẫn không hiểu
   Đây là ba hành vi agent nhìn thấy được TRÊN MÀN HÌNH — khác với việc
   người học tự kể lại. Đó là điểm mạnh duy nhất của option này.
   ========================================================================== */

(function () {
  'use strict';

  var DOCK_HINT = 'Đang quan sát thao tác của bạn trong bài này';

  var S = {
    seekBack: 0,      // quay lại cùng một mốc video
    revisit: 0,       // quay lại slide 12
    copy: 0,          // copy code
    curSlide: 12,     // slide NGƯỜI HỌC ĐANG Ở — không giả định luôn là 12
    shown: false,
    open: false,
    ended: false,
    dismissed: 0,     // số lần bỏ qua chỉ báo
    corrected: 0      // số lần nói AI sai
  };

  /* Ngưỡng: cần MẪU LẶP, không chỉ số lần thao tác.
     Vì xem lại để học kỹ cũng là lặp — nhưng xem lại 3 lần mà vẫn đi tìm
     nơi khác thì đó mới là kẹt.
     windowMs = cửa sổ 5 phút mà câu mở nói tới. Phải lọc thật, không
     được chỉ ghi con số rồi nói chung. */
  var T = { seekBack: 3, revisit: 3, windowMs: 300000 };

  var stamps = [];       // {t, cue}
  var slideStamps = [];  // {t, slide}

  var CUES = [
    { t: 120, label: '02:00', note: 'Giới thiệu BM25' },
    { t: 200, label: '03:20', note: 'Giới thiệu semantic search' },
    { t: 260, label: '04:20', note: 'Tại sao kết hợp hai cách' },
    { t: 400, label: '06:40', note: 'Công thức RRF' }
  ];

  function nearestCue(sec) {
    if (typeof sec !== 'number') return null;
    var best = null, bd = 21;
    CUES.forEach(function (c) { var d = Math.abs(c.t - sec); if (d < bd) { bd = d; best = c; } });
    return best;
  }

  // ---------------------------------------------------------------- render
  var el = {};

  function h(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    return d.firstElementChild;
  }

  function mount() {
    el.slot  = document.getElementById('optSlot');
    el.badge = document.getElementById('optBadge');
    el.hint  = document.getElementById('dockHint');
    el.badge.textContent = 'Option C';
    el.hint.textContent  = DOCK_HINT;
  }

  /* --- TRẠNG THÁI 1: chưa đủ bằng chứng.
        Hiện để biết agent ở đâu, nhưng KHÔNG nói gì về người test. --- */
  function renderIdle(extra) {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Trợ giúp đang theo dõi</h2>' +
      '  <div class="small muted" style="margin-bottom:12px">' +
      '    Tôi quan sát thao tác của bạn trong bài này. Tôi không đọc file ' +
      '    và không sửa gì cả.' +
      '  </div>' +
      '  <div class="chips"><span class="chip">Đang quan sát</span></div>' +
      (extra || '') +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn sm danger" id="stopBtn" type="button">Tắt theo dõi</button>' +
      '    <span class="small muted">Tắt được bất cứ lúc nào.</span>' +
      '  </div>' +
      '  <details class="logbox" style="margin-top:12px">' +
      '    <summary>Nhật ký phiên</summary>' +
      '    <div class="log" id="logBox"></div>' +
      '  </details>' +
      '</div>'
    ));
    el.slot.querySelector('#stopBtn').addEventListener('click', stopAll);
    el.log = el.slot.querySelector('#logBox');
  }

  /* --- TRẠNG THÁI 2: chỉ báo.
        C1: chỉ nói điều agent QUAN SÁT ĐƯỢC, có số đếm. Không kèm nguyên nhân.
        AI DỪNG Ở ĐÂY. Không tự mở hội thoại. Chờ user bấm. --- */
  function renderNudge(observation) {
    S.shown = true;
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card" style="border-color:#cfe0f8;background:#fbfdff">' +
      '  <h2 style="color:var(--accent)">Có thể bạn đã xem lại chỗ này</h2>' +
      '  <p style="margin:0 0 14px;font-size:14.5px">' + observation + '</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="openBtn" type="button">Xem gợi ý</button>' +
      '    <button class="btn ghost" id="skipBtn" type="button">Bỏ qua</button>' +
      '    <button class="btn ghost sm danger" id="stopBtn2" type="button">Tắt theo dõi</button>' +
      '  </div>' +
      '  <div class="hr"></div>' +
      '  <div class="small muted">Bạn không cần làm gì cả. Tôi sẽ không tự mở ' +
      '    hội thoại nếu bạn không bấm.</div>' +
      '  <details class="logbox" style="margin-top:12px">' +
      '    <summary>Nhật ký phiên</summary>' +
      '    <div class="log" id="logBox"></div>' +
      '  </details>' +
      '</div>'
    ));
    el.log = el.slot.querySelector('#logBox');
    el.slot.querySelector('#openBtn').addEventListener('click', openTalk);
    el.slot.querySelector('#skipBtn').addEventListener('click', skip);
    el.slot.querySelector('#stopBtn2').addEventListener('click', stopAll);
  }

  /* --- TRẠNG THÁI 3: hội thoại. Mở đúng MỘT câu, hỏi xong thì dừng.
       Đây là chỗ DUY NHẤT câu mở được viết theo trạng thái HIỆN TẠI —
       nên nó phải hỏi lại vị trí, không dùng lại chuỗi đã ghi ở chỉ báo.
       Nếu người học đã đi khác slide 12, không được nói như thể họ
       đang ở đó. --- */
  function openTalk() {
    S.open = true;
    var near = S.curSlide >= 12 && S.curSlide <= 13;
    var body = near
      ? 'Slide 12 nói mỗi phương pháp có điểm mạnh riêng nên kết hợp — ' +
        'nhưng slide đó <span class="unclear" title="chưa nêu tên">không có ' +
        'ví dụ nào</span> để thấy điểm mạnh đó là gì.'
      : 'Bạn đã xem tới slide ' + S.curSlide + ' rồi. Quay lại slide 12 — ' +
        'slide đó nói mỗi phương pháp có điểm mạnh riêng nên kết hợp, ' +
        'nhưng <span class="unclear" title="chưa nêu tên">không có ví dụ nào</span> ' +
        'để thấy điểm mạnh đó là gì.';
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card" style="border-color:#cfe0f8;background:#fbfdff">' +
      '  <h2 style="color:var(--accent)">Gợi ý</h2>' +
      '  <p style="margin:0 0 6px;font-size:14.5px">' + body + '</p>' +
      '  <p style="margin:0 0 14px;font-size:14.5px">Bạn có thấy điều đó không?</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="yesBtn" type="button">Có, tôi thấy</button>' +
      '    <button class="btn" id="notBtn" type="button">Không phải, tôi không làm vậy</button>' +
      '  </div>' +
      '  <div class="hr"></div>' +
      '  <details class="logbox"><summary>Nhật ký phiên</summary>' +
      '    <div class="log" id="logBox"></div></details>' +
      '</div>'
    ));
    el.log = el.slot.querySelector('#logBox');
    el.slot.querySelector('#yesBtn').addEventListener('click', onYes);
    el.slot.querySelector('#notBtn').addEventListener('click', onNot);
  }

  /* --- user thấy dấu hiệu: đưa phép kiểm tra an toàn, TỰ TAY làm --- */
  function onYes() {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Gợi ý</h2>' +
      '  <div class="small muted" style="margin-bottom:12px">' +
      '    Tôi không biết chắc. Hãy tự kiểm tra phép này rồi đối chiếu với bài.</div>' +
      '  <div class="card" style="background:#f7f9fc;margin:0 0 14px">' +
      '    <b>Cách kiểm tra:</b><br>' +
      '    Mở slide 13 — slide này có ví dụ đặt cạnh nhau: một câu hỏi mà ' +
      '    BM25 tìm được bằng từ khoá, còn semantic search tìm được bằng nghĩa. ' +
      '    Đọc xong tự trả lời: vì sao mỗi cách bỏ sót điều cách kia tìm được?' +
      '  </div>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="doneBtn" type="button">Tôi đã kiểm tra xong</button>' +
      '    <button class="btn ghost" id="notBtn2" type="button">Không phải, tôi không làm vậy</button>' +
      '  </div>' +
      '  <div class="hr"></div>' +
      '  <div class="small muted">Tôi không đọc file và không sửa dữ liệu của bạn. ' +
      '    Bạn tự làm và tự kết luận.</div>' +
      '  <details class="logbox"><summary>Nhật ký phiên</summary>' +
      '    <div class="log" id="logBox"></div></details>' +
      '</div>'
    ));
    el.log = el.slot.querySelector('#logBox');
    el.slot.querySelector('#doneBtn').addEventListener('click', onDone);
    el.slot.querySelector('#notBtn2').addEventListener('click', onNot);
  }

  function onDone() {
    S.ended = true;
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đã xong</h2>' +
      '  <p style="margin:0 0 14px" class="small">' +
      '    Nếu bạn tìm ra được, tôi có thể xem lại thao tác tiếp theo nếu bạn muốn.</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn" id="backBtn2" type="button">Về bài học</button>' +
      '    <button class="btn ghost sm danger" id="stopBtn3" type="button">Tắt theo dõi và xoá nhật ký</button>' +
      '  </div>' +
      '</div>'
    ));
    el.slot.querySelector('#backBtn2').addEventListener('click', goLesson);
    el.slot.querySelector('#stopBtn3').addEventListener('click', stopAll);
  }

  /* --- C2: user nói AI sai về hành vi của họ.
        BẮT BUỘC: thừa nhận, xoá suy đoán, im lặng. Không cố giữ lập luận. --- */
  function onNot() {
    S.corrected++; S.ended = true; S.shown = false; S.open = false;
    stamps = []; slideStamps = [];

    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đã bỏ gợi ý</h2>' +
      '  <p style="margin:0 0 10px" class="small">' +
      '    Tôi đã xoá suy đoán của mình. Tôi sẽ không nói về thao tác của bạn nữa.</p>' +
      '  <div class="chips" style="margin-bottom:12px">' +
      '    <span class="chip">Suy đoán đã xoá</span>' +
      '    <span class="chip">Theo dõi vẫn bật</span>' +
      '  </div>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="resumeBtn" type="button">Tiếp tục tự xử lý</button>' +
      '    <button class="btn ghost" id="stopBtn4" type="button">Tắt theo dõi</button>' +
      '  </div>' +
      '</div>'
    ));
    /* C2 — sau khi nói "không phải", AI đã hứa "không nói về thao tác của bạn
       nữa". Nếu nút này set S.ended = false thì các hành động SAU ĐÓ lại được
       ghi nhận và chỉ báo mới có thể hiện → lời hứa thành sai thật, và vi phạm
       C2. Vì vậy giữ S.ended = true; chỉ cho người học quay lại màn hình bình
       thường. Muốn thử lại thì bấm "Bắt đầu lại" ở dock — đó là đường thoát
       minh bạch, không phải đường tự mở lại ngầm. */
    el.slot.querySelector('#resumeBtn').addEventListener('click', function () {
      S.shown = false; S.open = false;
      renderIdle(
        '<div class="hr"></div>' +
        '<div class="small muted">Đã dừng sau khi bạn nói không phải. ' +
        'Tôi không tự ra gợi ý nữa trong bài này.</div>' +
        '<div class="btnrow" style="margin-top:8px">' +
        '  <button class="btn sm" id="selfBtn2" type="button">Xem lại thao tác của tôi</button>' +
        '</div>'
      );
      el.slot.querySelector('#selfBtn2').addEventListener('click', selfOpen);
    });
    el.slot.querySelector('#stopBtn4').addEventListener('click', stopAll);
  }

  /* --- C3: bỏ qua một lần → im. Nhưng PHẢI có đường tự mở lại. --- */
  function skip() {
    S.dismissed++; S.shown = false;
    renderIdle(
      '<div class="hr"></div>' +
      '<div class="small muted">Đã bỏ qua. Tôi sẽ không hiện gợi ý nữa trong bài này. ' +
      'Nếu bạn muốn tự xem lại những gì tôi thấy, bấm nút bên dưới.</div>' +
      '<div class="btnrow" style="margin-top:8px">' +
      '  <button class="btn sm" id="selfBtn" type="button">Xem lại thao tác của tôi</button>' +
      '</div>'
    );
    el.slot.querySelector('#selfBtn').addEventListener('click', selfOpen);
  }

  /* Để "từ chối" không biến thành "bị khoá" (§3.9 #10) */
  function selfOpen() {
    S.shown = true;
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Những gì tôi đã thấy</h2>' +
      '  <div class="log" id="logBox" style="max-height:none"></div>' +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn" id="closeBtn" type="button">Đóng</button>' +
      '    <button class="btn ghost sm danger" id="stopBtn5" type="button">Tắt theo dõi</button>' +
      '  </div>' +
      '</div>'
    ));
    el.log = el.slot.querySelector('#logBox');
    el.slot.querySelector('#closeBtn').addEventListener('click', function () { renderIdle(); });
    el.slot.querySelector('#stopBtn5').addEventListener('click', stopAll);
  }

  function goLesson() {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card"><h2>Về bài học</h2>' +
      '  <p style="margin:0" class="small muted">' +
      '    Quay về phần RRF. Gợi ý sẽ không tự mở lại nữa.</p></div>'
    ));
  }

  /* Tắt theo dõi: hiệu lực NGAY, không cần giải thích (C3) */
  function stopAll() {
    S.ended = true; S.shown = false; S.open = false;
    stamps = []; slideStamps = [];
    el.hint.textContent = 'Đã tắt theo dõi';
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đã tắt theo dõi</h2>' +
      '  <p style="margin:0 0 10px" class="small">' +
      '    Tôi không ghi lại gì nữa. Nhật ký phiên đã xoá.</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn" id="resumeBtn2" type="button">Bật lại</button>' +
      '    <button class="btn ghost" id="backBtn3" type="button">Về bài học</button>' +
      '  </div>' +
      '</div>'
    ));
    el.slot.querySelector('#resumeBtn2').addEventListener('click', function () {
      S.ended = false; el.hint.textContent = DOCK_HINT; renderIdle();
    });
    el.slot.querySelector('#backBtn3').addEventListener('click', goLesson);
  }

  // ------------------------------------------------------------------ log
  var LOG_LABEL = {
    'video:play':     'Phát video',
    'video:pause':    'Tạm dừng',
    'video:seek':     'Tua tới mốc khác',
    'video:seekBack': 'Tua lại mốc đã xem',
    'slide:next':     'Xem slide tiếp',
    'slide:prev':     'Lùi slide',
    'slide:revisit':  'Quay lại slide 12',
    'code:copy':      'Copy đoạn code'
  };

  function log(label) {
    if (!el.log) return;
    var d = new Date();
    var t = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' +
            ('0' + d.getSeconds()).slice(-2);
    var row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = '<span class="t">' + t + '</span><span>' + label + '</span>';
    el.log.insertBefore(row, el.log.firstChild);
  }

  // ------------------------------------------------------- phát hiện mẫu
  /* Chỉ hiện chỉ báo khi có MẪU LẶP KÈM KẾT QUẢ KHÔNG ĐỔI (§3.6).
     Không chỉ dựa vào số lần — xem lại để học kỹ cũng là lặp. */
  function tryNudge() {
    if (S.shown || S.open || S.ended || S.dismissed > 0) return;

    /* C1: câu mở phải đúng với thứ người học vừa thấy. Nói "trong khoảng
       5 phút" mà không lọc theo thời gian thì AI BỊA khoảng thời gian —
       và lần 1 vẫn sẽ hiện chỉ báo dù thao tác nằm rải rác cả buổi.
       Vì vậy chỉ tính mẫu nằm TRONG cửa sổ windowMs. */
    var from = Date.now() - T.windowMs;

    // Mẫu 1: quay lại CÙNG một mốc video nhiều lần
    var byCue = {};
    stamps.forEach(function (s) {
      if (s.back && s.t >= from) byCue[s.cue] = (byCue[s.cue] || 0) + 1;
    });
    var worstCue = null, worstN = 0;
    Object.keys(byCue).forEach(function (k) {
      if (byCue[k] > worstN) { worstN = byCue[k]; worstCue = k; }
    });
    if (worstN >= T.seekBack) {
      /* CHỈ nói về QUÁ KHỨ, không nói về hiện tại. Câu này được ghi một
         lần đúng lúc chỉ báo hiện, nên nếu viết "vẫn đang ở slide 12"
         thì ngay khi người học đi khác là thành SAI THẬT — đúng cái C1
         cấm. Người học không kiểm chứng được, họ chỉ thấy mình đã đi rồi. */
      renderNudge(
        'Đoạn <b>' + worstCue + '</b> bạn đã quay lại <b>' + worstN + ' lần</b> ' +
        'trong khoảng 5 phút.'
      );
      log('→ hiện chỉ báo');
      return;
    }

    // Mẫu 2: quay lại slide 12 nhiều lần
    var r12 = slideStamps.filter(function (s) {
      return s.slide === 12 && s.t >= from;
    }).length;
    if (r12 >= T.revisit) {
      renderNudge(
        'Bạn đã quay lại slide <b>12</b> <b>' + r12 + ' lần</b> trong khoảng 5 phút. ' +
        'Slide đó vẫn chỉ có công thức, không có ví dụ.'
      );
      log('→ hiện chỉ báo');
      return;
    }
  }

  // ----------------------------------------------------------------- nối
  /* index.html NHÚNG file option này bằng DOM injection NGAY TRONG <body>,
     tức là file này chạy SAU khi DOMContentLoaded đã bắn. Nếu chỉ
     addEventListener('DOMContentLoaded') thì listener sẽ không bao giờ
     chạy → phần option trống hoàn toàn. Vì vậy phải kiểm tra readyState. */
  function start() {
    mount();
    renderIdle();

    document.getElementById('backBtn').addEventListener('click', goLesson);
    document.getElementById('resetBtn').addEventListener('click', function () { CTX.reset(); });

    CTX.on(function (e) {
      /* Ghi nhật ký vẫn chạy sau khi AI đã dừng — vì C3 đòi có đường tự mở
         lại, mà đường đó chính là xem lại nhật ký. Nếu chặn luôn ở S.ended
         thì nút "Xem lại thao tác của tôi" sẽ mở ra nhật ký rỗng.
         Tách hai việc: GHI LUÔN · RA CHỈ BÁO CHỈ KHI CHƯA DỪNG. */
      if (LOG_LABEL[e.key]) log(LOG_LABEL[e.key]);
      if (S.ended) return;

      switch (e.key) {
        case 'video:seek':
        case 'video:seekBack': {
          // Ghi lại MỐC THẬT, không hard-code. Nếu hard-code, AI sẽ nói
          // "bạn đã quay lại 04:20" cả khi người dùng chỉ quay lại 02:00.
          var c = nearestCue(e.detail.to);
          if (c) stamps.push({ t: e.t, cue: c.label, back: e.key === 'video:seekBack' });
          if (e.key === 'video:seekBack') S.seekBack++;
          break;
        }
        case 'slide:revisit':
          S.revisit++;
          slideStamps.push({ t: e.t, slide: e.detail.slide });
          S.curSlide = e.detail.slide;
          break;
        case 'slide:next':
        case 'slide:prev':
          S.curSlide = e.detail.slide;
          break;
        case 'code:copy':
          // Copy code là hành vi có trong note.md, nhưng CHƯA phải tín hiệu
          // phát hiện: copy xong vẫn chưa biết người học có hiểu không.
          // Giữ đếm để đọc, không dùng để ra chỉ báo.
          S.copy++;
          break;
      }

      if (!S.shown) tryNudge();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
