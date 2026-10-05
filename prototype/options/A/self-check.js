/* ==========================================================================
   OPTION A — BẢN ĐỒ TỰ KIỂM TRA
   Người build: Đặng Văn Thái Anh (2A202602407)
   Theo khuôn three-option-design-sheet.md §2.5, §2.6, §3.4, §4.3
   --------------------------------------------------------------------------
   Nguyên tắc bắt buộc của option này (không sửa, không nới):
     A1  AI DON'T ACT về chẩn đoán. AI KHÔNG tự suy luận, KHÔNG xếp hạng,
         KHÔNG chỉ ra đáp án. Chỉ giải thích MỘT bước khi được gọi.
     A2  R1 — người học kết luận bằng LỜI của họ. A không viết hộ kết luận.
     A3  Mỗi phép kiểm tra phải ghi ĐIỀU KIỆN và KẾT QUẢ MONG ĐỢI trước khi
         chạy → người học tự đối chiếu được, không tin lời AI.
     A4  Không có bước nào phụ thuộc thao tác người học KHÔNG THỂ tự kiểm
         trong khung bài. Nếu không làm được thì phải nói ra, không giấu.

   Điểm vào gắn thẳng với đúng triệu chứng đang hiện — đây là khác biệt
   về CƠ CHẾ của A: bản đồ mở ra TRƯỚC, người học thấy hết các đường đi
   rồi mới chọn. AI không phải người khởi động (khác C).
   ========================================================================== */

(function () {
  'use strict';

  var DOCK_HINT = 'Bản đồ tự kiểm — bạn tự đi, tự kết luận';

  /* ------------------------------------------------------------------
     CÂY QUYẾT ĐỊNH — dựng theo fixture chung, KHÔNG thêm thứ gì.

     Mỗi phép kiểm tra đều trả lời được bằng cách ĐỌC SLIDE 13 hoặc CODE
     đang có sẵn trên màn hình. Không phép nào đòi hỏi thứ nằm ngoài bài —
     nếu đòi thì người học không tự kiểm được, phá A3.
     ------------------------------------------------------------------ */
  var BRANCHES = [
    {
      id: 'A1',
      entry: 'Tôi hiểu công thức RRF, nhưng không thấy vì sao phải kết hợp',
      checks: [
        {
          where: 'Slide 13',
          do: 'Đọc cặp ví dụ đặt cạnh nhau ở slide 13',
          expect: 'Cùng một câu hỏi "hạn nộp hồ sơ": BM25 tìm được đoạn có ' +
                  'đúng cụm từ đó, còn semantic search tìm được đoạn nói về ' +
                  'thủ tục nộp hồ sơ dù không chứa cụm từ đó.',
          then: 'Nếu bạn thấy đúng như vậy, bạn đã có câu trả lời trong tay: ' +
                'mỗi cách bỏ sót thứ mà cách kia tìm được.'
        },
        {
          where: 'Slide 12',
          do: 'Đọc lại slide 12, đoạn "mỗi phương pháp có điểm mạnh và điểm yếu riêng"',
          expect: 'Ngay dưới công thức có dòng "Chưa có ví dụ nào ở slide này". ' +
                  'Nghĩa là slide khẳng định phải kết hợp nhưng không cho thấy ' +
                  'điểm mạnh đó là gì.',
          then: 'Nếu đúng, thì chỗ bạn kẹt không phải ở công thức — mà ở chỗ ' +
                'bài chưa đưa ra ví dụ ngay cạnh chỗ khẳng định.'
        }
      ]
    },
    {
      id: 'A2',
      entry: 'Tôi nghĩ chỉ cần dùng một trong hai là đủ',
      checks: [
        {
          where: 'Slide 13',
          do: 'Với cùng câu hỏi "hạn nộp hồ sơ", tự hỏi: nếu bỏ semantic search thì mất đoạn nào?',
          expect: 'Mất đoạn nói về thủ tục nộp hồ sơ — vì đoạn đó không chứa cụm từ ' +
                  '"hạn nộp hồ sơ".',
          then: 'Làm chiều ngược lại: nếu bỏ BM25 thì mất đoạn nào? Nếu mất ' +
                'hai đoạn khác nhau thì cả hai đều cần.'
        },
        {
          where: 'Đoạn code',
          do: 'Đọc dòng return reciprocal_rank_fusion(dense, sparse, k) trong rag/retrieval.py',
          expect: 'dense = theo nghĩa, sparse = theo từ khoá. Cả hai đều được đưa ' +
                  'vào hàm — không cái nào bị bỏ.',
          then: 'Code chỉ cho thấy AI kết hợp, không nói vì sao. Lý do nằm ở ' +
                'phép kiểm tra ở trên.'
        }
      ]
    },
    {
      id: 'A3',
      entry: 'Tôi chưa biết bắt đầu từ đâu',
      checks: [
        {
          where: 'Task',
          do: 'Đọc lại task ở đầu màn hình',
          expect: 'Câu hỏi là "tại sao phải kết hợp" — không phải "làm gì".',
          then: 'Nghĩa là thứ cần tìm là một LÝ DO, không phải một công thức. ' +
                'Bạn đã có công thức rồi, nên công thức không phải thứ đang thiếu.'
        },
        {
          where: 'Slide 12 → 13',
          do: 'Đi từ slide 12 sang slide 13 đúng một lượt rồi quay lại slide 12',
          expect: 'Slide 13 có ví dụ, slide 12 không có. Nếu đọc slide 12 rồi ' +
                  'dừng lại thì sẽ không thấy gì cả.',
          then: 'Có thể chỗ kẹt là do bạn chưa đi sang slide kế bên, chứ không ' +
                'phải do bạn chưa hiểu.'
        }
      ]
    }
  ];

  var S = {
    started: false,
    cur: null,        // branch id đang mở
    step: 0,          // check thứ mấy trong branch
    // Giữ lại để mở lại bản đồ KHÔNG MẤT phần đã đọc (Recovery, §4.3).
    // Giá trị: 'ran' (đã chạy) | 'match' (khớp) | 'nomatch' (không khớp)
    marks: {},
    concluded: false,
    explained: false   // A1: đã dùng lần giải thích duy nhất trong phiên chưa
  };

  function mark(bid, ci, v) { S.marks[bid + ':' + ci] = v; }
  function get(bid, ci) { return S.marks[bid + ':' + ci] || ''; }

  function branchById(id) {
    for (var i = 0; i < BRANCHES.length; i++) if (BRANCHES[i].id === id) return BRANCHES[i];
    return null;
  }

  /* Branch bị loại trừ = đã chạy ít nhất một phép kiểm và KHÔNG phép nào khớp.
     Còn lại = chưa chạy, hoặc có ít nhất một phép khớp với kết quả mong đợi. */
  function branchState(b) {
    var ran = 0, match = 0;
    for (var i = 0; i < b.checks.length; i++) {
      var v = get(b.id, i);
      /* Phải tính CẢ 'match' lẫn 'nomatch' vào "đã chạy". Nếu chỉ đếm
         'ran' thì sau khi người học bấm "Đúng / Không" thì giá trị 'ran'
         bị ghi đè → nhánh bị quay về "chưa chạy" và không bao giờ bị loại.
         Đó là lỗi thật, tìm ra khi chạy chứ không phải khi đọc code. */
      if (v === 'ran' || v === 'match' || v === 'nomatch') ran++;
      if (v === 'match') match++;
    }
    if (ran === 0) return 'untried';
    if (match > 0) return 'open';
    return 'out';
  }

  function counts() {
    var out = 0, open = 0, untried = 0;
    BRANCHES.forEach(function (b) {
      var s = branchState(b);
      if (s === 'out') out++;
      else if (s === 'open') open++;
      else untried++;
    });
    return { out: out, open: open, untried: untried, done: out + open + untried };
  }

  // ---------------------------------------------------------------- render
  var el = {};

  function h(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    return d.firstElementChild;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function mount() {
    el.slot  = document.getElementById('optSlot');
    el.badge = document.getElementById('optBadge');
    el.hint  = document.getElementById('dockHint');
    el.badge.textContent = 'Option A';
    el.hint.textContent  = DOCK_HINT;
  }

  /* --- MÀN 1: BẢN ĐỒ.
        A2 — thấy TOÀN BỘ đường đi trước khi bấm. Không giấu nhánh, không
        chỉ hiện nhánh "đúng". Đây là khác biệt cơ chế so với C. --- */
  function renderMap(msg) {
    el.slot.innerHTML = '';
    var c = counts();

    var rows = '';
    BRANCHES.forEach(function (b) {
      var st = branchState(b);
      var chip = st === 'out'
        ? '<span class="chip no">Đã loại</span>'
        : st === 'open'
          ? '<span class="chip yes">Còn mở</span>'
          : '<span class="chip">Chưa chạy</span>';
      rows +=
        '<div class="card" style="margin:0 0 10px;padding:13px" data-b="' + b.id + '">' +
        '  <div style="font-weight:600;font-size:14px;margin-bottom:8px">' + esc(b.entry) + '</div>' +
        '  <div class="chips" style="margin-bottom:10px">' + chip +
             '<span class="chip">' + b.checks.length + ' phép kiểm</span></div>' +
        '  <div class="btnrow">' +
        (st === 'out'
            ? '<button class="btn sm" data-act="retry" data-b="' + b.id + '">Chạy lại nhánh này</button>'
            : '<button class="btn sm primary" data-act="enter" data-b="' + b.id + '">' +
              (st === 'untried' ? 'Bắt đầu nhánh này' : 'Tiếp tục nhánh này') + '</button>') +
        '  </div>' +
        '</div>';
    });

    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Bản đồ tự kiểm</h2>' +
      '  <p class="small muted" style="margin:0 0 4px">' +
      '    Chọn câu mô tả đúng với điều bạn đang gặp. Tôi không đoán thay bạn — ' +
      '    mỗi nhánh đều là những phép kiểm bạn tự chạy được trong bài này.</p>' +
      '  <p class="small muted" style="margin:0 0 14px">' +
      '    Bạn sẽ thấy trước điều kiện và kết quả mong đợi của từng phép trước khi chạy.</p>' +
      (msg ? '<div class="card" style="background:#fdf6e6;border-color:#e8d9ae;margin:0 0 14px;padding:12px">' +
              '<div class="small">' + msg + '</div></div>' : '') +
      rows +
      '  <div class="hr"></div>' +
      '  <div class="small muted">Đã chạy ' + (c.done - c.untried) + '/' + BRANCHES.length + ' nhánh · ' +
             'loại ' + c.out + ' · còn mở ' + c.open + '</div>' +
      /* A2/R1 — người học PHẢI có chỗ kết luận bằng lời mình, giống B.
         Không có lối này thì A thua B một cách không do cơ chế: B được chấm
         "kết luận bằng lời mình" còn A thì không → phá luật 2. Nút chỉ hiện
         sau khi đã chạy ít nhất một nhánh, vì trước đó người học chưa có gì
         để kết luận. */
      (c.done - c.untried > 0
        ? '  <div class="btnrow" style="margin-top:12px">' +
          '    <button class="btn primary" id="conclBtn" type="button">Đến lượt bạn kết luận</button>' +
          '  </div>'
        : '') +
      '</div>'
    ));

    var conclBtn = el.slot.querySelector('#conclBtn');
    if (conclBtn) conclBtn.addEventListener('click', renderConclude);

    el.slot.querySelectorAll('[data-act]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        S.cur = btn.getAttribute('data-b');
        S.step = 0;
        if (btn.getAttribute('data-act') === 'retry') {
          S.marks = {};
          el.hint.textContent = DOCK_HINT + ' — đã xoá kết quả nhánh cũ';
        }
        renderCheck();
      });
    });
  }

  /* --- MÀN 2: MỘT PHÉP KIỂM.
        A3 — điều kiện + kết quả mong đợi hiện TRƯỚC khi chạy. Người học
        đối chiếu được, không phải tin lời tôi. --- */
  function renderCheck() {
    var b = branchById(S.cur);
    if (!b) { renderMap(); return; }
    var c = b.checks[S.step];

    if (S.step >= b.checks.length) { renderBranchDone(b); return; }

    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Phép kiểm ' + (S.step + 1) + '/' + b.checks.length + ' · ' + esc(b.entry) + '</h2>' +

      '  <div class="card" style="background:#f7f9fc;margin:0 0 12px;padding:13px">' +
      '    <div class="small muted" style="margin-bottom:4px">Làm gì</div>' +
      '    <div style="margin-bottom:12px">' + esc(c.do) + '</div>' +
      '    <div class="small muted" style="margin-bottom:4px">Ở đâu</div>' +
      '    <div class="chips" style="margin-bottom:12px"><span class="chip on">' + esc(c.where) + '</span></div>' +
      '    <div class="small muted" style="margin-bottom:4px">Kết quả mong đợi</div>' +
      '    <div>' + esc(c.expect) + '</div>' +
      '  </div>' +

      '  <div class="small muted" style="margin:0 0 10px">' +
      '    Tôi không biết bạn sẽ thấy gì. Bạn tự đối chiếu rồi đánh dấu.</div>' +

      /* A1 — AI DON'T ACT: chỉ giải thích MỘT bước, và chỉ khi được gọi.
         Đây là affordance mà Decision Table hứa. Nội dung phải nói về *cách
         tự kiểm*, không nói nguyên nhân vấn đề — nếu nói nguyên nhân thì A
         biến thành B và phá luật 2. */
      '  <div class="btnrow" style="margin-bottom:10px">' +
      (S.explained ? ''
        : '    <button class="btn ghost sm" id="expBtn" type="button">Giải thích bước này giúp tôi</button>') +
      '  </div>' +
      '  <div id="expBox"></div>' +

      '  <div class="btnrow" style="margin-bottom:10px">' +
      '    <button class="btn primary" id="ranBtn" type="button">Tôi đã chạy xong</button>' +
      '    <button class="btn ghost sm" id="mapBtn0" type="button">Về bản đồ</button>' +
      '  </div>' +
      '<div id="resultBox"></div>' +
      '</div>'
    ));

    /* Luôn có đường về bản đồ ở MỌI trạng thái (R3) — và quay về bản đồ
       không làm mất phần đã đọc, vì kết quả nằm trong S.marks chứ không
       nằm trong DOM. */
    el.slot.querySelector('#mapBtn0').addEventListener('click', function () { renderMap(); });

    /* Chỉ giải thích MỘT lần cho cả phiên: A Don't Act nghĩa là AI không
       luôn sẵn sàng để dẫn. Người học gọi được khi cần, không thì không. */
    var expBtn = el.slot.querySelector('#expBtn');
    if (expBtn) {
      expBtn.addEventListener('click', function () {
        S.explained = true;
        el.slot.querySelector('#expBox').innerHTML =
          '<div class="card" style="background:#f7f9fc;padding:13px;margin:0 0 10px">' +
          '  <div class="small muted" style="margin-bottom:4px">Cách tự đối chiếu</div>' +
          '  <div class="small">Mở <b>' + esc(c.where) + '</b>, đọc đúng chỗ đó, rồi tự so ' +
          '    với dòng "Kết quả mong đợi" ở trên. Tôi không biết bạn sẽ thấy gì — ' +
          '    và tôi không nói trước để bạn còn tự kiểm được.</div>' +
          '  <div class="small muted" style="margin-top:8px">Đây là lần giải thích duy nhất ' +
          '    trong phiên này.</div>' +
          '</div>';
        expBtn.parentNode.removeChild(expBtn);
      });
    }

    el.slot.querySelector('#ranBtn').addEventListener('click', function () {
      mark(S.cur, S.step, 'ran');
      renderResult(b, c);
    });
  }

  function renderResult(b, c) {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Phép kiểm ' + (S.step + 1) + '/' + b.checks.length + ' · kết quả của bạn</h2>' +
      '  <div class="card" style="background:#f7f9fc;margin:0 0 14px;padding:13px">' +
      '    <div class="small muted" style="margin-bottom:4px">Kết quả mong đợi</div>' +
      '    <div>' + esc(c.expect) + '</div>' +
      '  </div>' +
      '  <div style="font-weight:550;margin:0 0 10px">Bạn thấy đúng như vậy không?</div>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="mBtn" type="button">Đúng, khớp với kết quả mong đợi</button>' +
      '    <button class="btn" id="nBtn" type="button">Không, tôi thấy khác</button>' +
      '  </div>' +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn ghost sm" id="backBtn1" type="button">◀ Sửa phép này</button>' +
      '    <button class="btn ghost sm" id="mapBtn1" type="button">Về bản đồ</button>' +
      '  </div>' +
      '</div>'
    ));

    el.slot.querySelector('#mBtn').addEventListener('click', function () {
      mark(S.cur, S.step, 'match');
      S.step++;
      renderCheck();
    });
    el.slot.querySelector('#nBtn').addEventListener('click', function () {
      mark(S.cur, S.step, 'nomatch');
      S.step++;
      renderCheck();
    });
    el.slot.querySelector('#backBtn1').addEventListener('click', function () {
      delete S.marks[S.cur + ':' + S.step];
      renderCheck();
    });
    el.slot.querySelector('#mapBtn1').addEventListener('click', function () { renderMap(); });
  }

  function renderBranchDone(b) {
    var st = branchState(b);
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Xong nhánh ' + b.id + '</h2>' +
      '  <div class="chips" style="margin-bottom:14px">' +
      (st === 'out'
        ? '<span class="chip no">Không phép nào khớp — bạn đã loại nhánh này</span>'
        : '<span class="chip yes">Có phép khớp — nhánh này còn mở</span>') +
      '  </div>' +
      '  <p class="small muted" style="margin:0 0 14px">' +
      (st === 'out'
        ? 'Tôi ghi nhận nhánh này không khớp. Tôi KHÔNG kết luận vì sao — ' +
          'bạn tự quyết có thử nhánh khác hay dừng lại.'
        : 'Bạn thấy ít nhất một phép khớp với kết quả mong đợi.') +
      '  </p>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="mapBtn2" type="button">Về bản đồ — thử nhánh khác</button>' +
      '  </div>' +
      '</div>'
    ));
    el.slot.querySelector('#mapBtn2').addEventListener('click', function () { renderMap(); });
  }

  /* --- MÀN 3: NGƯỜI HỌC KẾT LUẬN.
        A2 / R1 — A KHÔNG viết hộ kết luận. Không có nút "xem đáp án",
        vì nút đó phá đúng thứ làm nên A. --- */
  function renderConclude() {
    var c = counts();
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đến lượt bạn kết luận</h2>' +
      '  <div class="chips" style="margin-bottom:14px">' +
      '    <span class="chip">Đã loại ' + c.out + ' nhánh</span>' +
      '    <span class="chip">Còn mở ' + c.open + ' nhánh</span>' +
      '    <span class="chip">Chưa chạy ' + c.untried + ' nhánh</span>' +
      '  </div>' +
      '  <p class="small" style="margin:0 0 14px">' +
      '    Tôi không viết kết luận thay bạn. Bạn tự viết câu trả lời cho câu hỏi ' +
      '    ở đầu màn hình, rồi đối chiếu với bài.</p>' +
      '  <textarea id="concl" rows="4" style="width:100%;border:1px solid var(--line-2);' +
      '    border-radius:6px;padding:10px;font:inherit;font-size:13.5px" ' +
      '    placeholder="Viết bằng lời của bạn: vì sao phải kết hợp hai cách này?"></textarea>' +
      '  <div class="btnrow" style="margin-top:12px">' +
      '    <button class="btn" id="mapBtn3" type="button">Quay lại bản đồ</button>' +
      '  </div>' +
      '  <div id="savedBox"></div>' +
      '</div>'
    ));
    var ta = el.slot.querySelector('#concl');
    var sb = el.slot.querySelector('#savedBox');
    el.slot.querySelector('#mapBtn3').addEventListener('click', function () { renderMap(); });

    ta.addEventListener('input', function () {
      // R6 — chỉ tồn tại trong phiên, người học tự xoá. Không gửi đi đâu.
      sb.innerHTML = ta.value.trim()
        ? '<div class="small muted" style="margin-top:10px">Đã lưu trong phiên này. ' +
          'Không gửi đi đâu — bấm "Bắt đầu lại" ở dưới để xoá.</div>'
        : '';
    });
  }

  function goLesson() {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card"><h2>Về bài học</h2>' +
      '  <p style="margin:0 0 12px" class="small muted">' +
      '    Quay về phần RRF. Bản đồ không tự mở lại.</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn" id="mapBtn4" type="button">Mở lại bản đồ</button>' +
      '  </div></div>'
    ));
    el.slot.querySelector('#mapBtn4').addEventListener('click', function () {
      renderMap('Bạn đã quay lại. Phần đã đọc vẫn còn.');
    });
  }

  // ------------------------------------------------------------------ nối
  /* index.html nhúng file này bằng DOM injection NGAY TRONG <body>, tức là
     file chạy SAU khi DOMContentLoaded đã bắn. Nếu chỉ addEventListener
     thì listener không bao giờ chạy → phần option trống. Phải check readyState. */
  function start() {
    mount();
    renderMap();

    document.getElementById('backBtn').addEventListener('click', goLesson);
    document.getElementById('resetBtn').addEventListener('click', function () { CTX.reset(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
