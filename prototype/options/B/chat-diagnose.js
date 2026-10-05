/* ==========================================================================
   OPTION B — ĐỐI THOẠI ĐỒNG CHẨN ĐOÁN
   Người build: Đặng Văn Thái Anh (2A202602407)
   Theo khuôn three-option-design-sheet.md §2.5, §2.6, §3.4, §4.3
   --------------------------------------------------------------------------
   Nguyên tắc bắt buộc của option này (không sửa, không nới):
     B1  AI hỏi 2–3 CÂU THÍCH ỨNG, chạm cả hai lớp barrier (thiếu ý thức /
         thiếu cầu nối). Không hỏi câu nào trả lời được bằng "có".
     B2  "KHÔNG BIẾT" là câu trả lời hợp lệ. Không hỏi lại, không dẫn.
     B3  Tóm tắt phải nêu RÕ AI dựa vào câu trả lời nào. Không tóm tắt
         bằng kiểu "dựa trên thông tin bạn cung cấp" — vô nghĩa.
     B4  Mỗi giả thuyết gắn DẤU HIỆU HỖ TRỢ / CHỐNG LẠI lấy từ trong bài.
     B5  Bác 2 lần → AI nói không chắc và dừng xếp hạng.
     B6  Có nút "Cả hai đều không đúng" → AI dừng, hỏi 1 câu mở.

   Khác A về CƠ CHẾ: A để người học tự đi từ bản đồ; ở B, AI là người
   KHỞI ĐỘNG thu thập thông tin. Thông tin đến từ LỜI KỂ, không phải từ
   hành vi trên màn hình (đó là điểm mà C mạnh hơn).
   ========================================================================== */

(function () {
  'use strict';

  var DOCK_HINT = 'Đối thoại đồng chẩn đoán — bạn trả lời, tôi tổng hợp';

  /* Ba giả thuyết về nguyên nhân. Chỉ ba, và CHỈ dựa trên những gì đọc
     được trong khung bài — không suy đoán năng lực người học (R5). */
  var HYPS = [
    {
      id: 'H1',
      title: 'Bài đã nói lý do, nhưng nói ở slide khác chỗ bạn đang đọc',
      sign: 'Slide 12 khẳng định "mỗi phương pháp có điểm mạnh riêng nên kết hợp" ' +
            'nhưng ghi rõ "Chưa có ví dụ nào ở slide này". Ví dụ nằm ở slide 13.',
      fixHint: 'Đọc slide 13 rồi đối chiếu với slide 12.'
    },
    {
      id: 'H2',
      title: 'Bạn đang cần một VÍ DỤ, không cần thêm khái niệm',
      sign: 'Slide 13 đặt cặp ví dụ: cùng câu hỏi "hạn nộp hồ sơ", BM25 tìm được ' +
            'bằng từ khoá, semantic search tìm được bằng nghĩa — mỗi cách bỏ sót ' +
            'thứ cách kia tìm được.',
      fixHint: 'Tự hỏi: nếu bỏ semantic search thì mất đoạn nào?'
    },
    {
      id: 'H3',
      title: 'Bạn chưa từng thấy điểm mạnh/yếu cụ thể của từng cách',
      sign: 'Slide 15 liệt kê khi nào dùng hybrid — nhưng đó là danh sách tình huống, ' +
            'không phải so sánh điểm mạnh/yếu.',
      fixHint: 'So sánh: cách nào theo nghĩa, cách nào theo từ khoá?'
    }
  ];

  /* Câu hỏi thích ứng. Mỗi câu gắn với lớp barrier nó chạm tới, để sau này
     nhìn lại thấy AI có thực sự hỏi cả hai lớp hay không. */
  var Q = [
    {
      id: 'q1', layer: 'Lớp 2 — thiếu cầu nối',
      text: 'Slide 12 nói mỗi phương pháp có điểm mạnh riêng nên kết hợp. ' +
            'Bạn đọc dòng đó rồi hiểu "phải kết hợp" — nhưng chưa thấy ' +
            '<span class="unclear">tại sao</span> điểm mạnh đó lại cần thiết. Đúng không?',
      options: [
        { v: 'yes',  label: 'Đúng — tôi hiểu phải kết hợp nhưng không thấy lý do' },
        { v: 'no',   label: 'Không — tôi chưa hiểu cả chữ "kết hợp" nữa' },
        { v: 'dk',   label: 'Không biết' }
      ]
    },
    {
      id: 'q2', layer: 'Lớp 1 — thiếu ý thức',
      text: 'Nếu bạn bỏ hẳn một trong hai cách, bạn có đoán được mình sẽ mất ' +
            'thứ gì không?',
      options: [
        { v: 'yes',  label: 'Có — mất đoạn nào đó' },
        { v: 'no',   label: 'Không — tôi không hình dung được' },
        { v: 'dk',   label: 'Không biết' }
      ]
    },
    {
      id: 'q3', layer: 'Lớp 1 — thiếu ý thức',
      text: 'Trong lúc học, bạn có bao giờ dừng lại để hỏi "mình đang thiếu gì ở ' +
            'đây" không — hay cứ đi tiếp cho tới khi không ra?',
      options: [
        { v: 'yes',  label: 'Có — dừng lại nhưng không biết đang thiếu gì' },
        { v: 'no',   label: 'Không — cứ đi tiếp tới khi không ra' },
        { v: 'dk',   label: 'Không biết' }
      ]
    }
  ];

  var S = {
    qi: 0,             // câu hỏi hiện tại
    answers: {},       // qid -> v
    rejected: {},      // hypId -> số lần bác
    both: false,       // đã bấm "cả hai đều không đúng"
    stopped: false     // B5: đã bác 2 lần → dừng xếp hạng
  };

  function hypById(id) {
    for (var i = 0; i < HYPS.length; i++) if (HYPS[i].id === id) return HYPS[i];
    return null;
  }

  /* Xếp hạng THUẦN TỪ CÂU TRẢ LỜI — không có suy luận nào ngoài dữ liệu
     người học đưa. Đây là khác biệt cơ chế so với C (C đếm hành vi). */
  function rank() {
    var a1 = S.answers.q1, a2 = S.answers.q2, a3 = S.answers.q3;
    var out = [];

    // q1 = "no" → chưa hiểu cả khái niệm → H3 mạnh nhất
    if (a1 === 'no')       out.push({ h: 'H3', s: 3, pro: 'Bạn nói chưa hiểu cả ý "kết hợp".' });
    else if (a1 === 'yes') out.push({ h: 'H1', s: 3, pro: 'Bạn hiểu kết luận nhưng không thấy lý do.' });
    // q1 = "dk" → không tính cho H1 (B2: không biết là câu trả lời hợp lệ,
    // nhưng KHÔNG được biến thành bằng chứng theo hướng nào cả)

    // q2 = "no" → thiếu ý thức về điểm mạnh/yếu → H3
    if (a2 === 'no') {
      out.push({ h: 'H3', s: 2, pro: 'Bạn không hình dung được mình mất gì nếu bỏ một cách.' });
    } else if (a2 === 'yes') {
      // biết sẽ mất gì → có thể chuyển thành lý do → H2
      out.push({ h: 'H2', s: 2, pro: 'Bạn biết mình sẽ mất thứ gì ở mỗi cách.' });
    }

    // q3 = "yes" → dừng lại nhưng không biết thiếu gì → thiếu cầu nối
    if (a3 === 'yes') {
      out.push({ h: 'H1', s: 1, pro: 'Bạn có dừng lại, nhưng không biết mình đang thiếu gì.' });
    }

    // Gộp điểm
    var byId = {};
    out.forEach(function (r) { byId[r.h] = (byId[r.h] || 0) + r.s; });

    var list = Object.keys(byId).map(function (k) {
      return { h: hypById(k), s: byId[k], pro: out.filter(function (r) { return r.h === k; })
        .map(function (r) { return r.pro; }).join(' ') };
    });

    // Chưa có câu trả lời nào đủ cơ sở → trả về rỗng, KHÔNG bịa thứ hạng
    if (!list.length) return [];
    list.sort(function (x, y) { return y.s - x.s; });
    return list;
  }

  function basis() {
    // B3 — nói rõ dựa vào câu nào. Không dùng câu chung chung.
    var p = [];
    if (S.answers.q1 === 'yes') p.push('Bạn nói hiểu "phải kết hợp" nhưng không thấy lý do.');
    if (S.answers.q1 === 'no')  p.push('Bạn nói chưa hiểu cả ý "kết hợp".');
    if (S.answers.q1 === 'dk')  p.push('Bạn không biết ở câu 1 — tôi không tính câu đó.');
    if (S.answers.q2 === 'yes') p.push('Bạn nói biết mình sẽ mất thứ gì ở mỗi cách.');
    if (S.answers.q2 === 'no')  p.push('Bạn nói không hình dung được mình mất gì nếu bỏ một cách.');
    if (S.answers.q2 === 'dk')  p.push('Bạn không biết ở câu 2 — tôi không tính câu đó.');
    if (S.answers.q3 === 'yes') p.push('Bạn nói có dừng lại nhưng không biết đang thiếu gì.');
    if (S.answers.q3 === 'no')  p.push('Bạn nói cứ đi tiếp tới khi không ra.');
    if (S.answers.q3 === 'dk')  p.push('Bạn không biết ở câu 3 — tôi không tính câu đó.');
    return p;
  }

  function dkCount() { return basis().filter(function (x) { return x.indexOf('không biết') > -1; }).length; }

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
    el.badge.textContent = 'Option B';
    el.hint.textContent  = DOCK_HINT;
  }

  function renderStart() {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đối thoại đồng chẩn đoán</h2>' +
      '  <p class="small muted" style="margin:0 0 10px">' +
      '    Tôi hỏi 3 câu, bạn trả lời — rồi tôi xếp hạng các giả thuyết kèm ' +
      '    dấu hiệu. Bạn tự chạy phép kiểm, tôi không kết luận thay bạn.</p>' +
      '  <p class="small muted" style="margin:0 0 14px">' +
      '    "Không biết" là câu trả lời hợp lệ. Tôi sẽ không hỏi lại.</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="goBtn" type="button">Bắt đầu 3 câu hỏi</button>' +
      '  </div>' +
      '</div>'
    ));
    el.slot.querySelector('#goBtn').addEventListener('click', function () { renderQ(); });
  }

  function renderQ() {
    var q = Q[S.qi];
    if (!q) { renderSummary(); return; }

    var opts = '';
    q.options.forEach(function (o) {
      opts += '<button class="btn" style="justify-content:flex-start;text-align:left;width:100%;' +
              'margin-bottom:6px" data-v="' + o.v + '">' + o.label + '</button>';
    });

    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Câu ' + (S.qi + 1) + '/' + Q.length + '</h2>' +
      '  <div class="chips" style="margin-bottom:12px">' +
      '    <span class="chip">' + q.layer + '</span></div>' +
      '  <p style="margin:0 0 16px;font-size:14.5px">' + q.text + '</p>' +
      opts +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn ghost sm" id="editBtn" type="button">◀ Sửa câu trước</button>' +
      '    <button class="btn ghost sm" id="restartBtn" type="button">Làm lại từ đầu</button>' +
      '  </div>' +
      '</div>'
    ));

    el.slot.querySelectorAll('[data-v]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.answers[q.id] = b.getAttribute('data-v');
        S.qi++;
        renderQ();
      });
    });
    el.slot.querySelector('#editBtn').addEventListener('click', function () {
      if (S.qi > 0) S.qi--;
      renderQ();
    });
    el.slot.querySelector('#restartBtn').addEventListener('click', function () {
      S.qi = 0; S.answers = {}; S.rejected = {}; S.both = false; S.stopped = false;
      renderQ();
    });
  }

  /* --- TÓM TẮT: chỉ nói những gì dựa trên câu trả lời.
        B3 + B5: nếu bác 2 lần → thừa nhận không chắc, KHÔNG xếp hạng nữa. --- */
  function renderSummary() {
    var list = S.stopped ? [] : rank();
    var bs = basis();

    var basisHtml = '';
    if (bs.length) {
      basisHtml = '<div class="card" style="background:#f7f9fc;margin:0 0 16px;padding:13px">' +
        '  <div class="small muted" style="margin-bottom:6px">Tôi tổng hợp dựa trên đây</div>' +
        bs.map(function (b) { return '<div class="small" style="margin-bottom:4px">· ' + b + '</div>'; }).join('') +
        '</div>';
    }

    var warn = '';
    if (dkCount() > 0) {
      warn = '<div class="card" style="background:#fdf6e6;border-color:#e8d9ae;margin:0 0 16px;padding:13px">' +
        '  <div class="small">Bạn trả lời <b>không biết</b> ' + dkCount() + ' câu. ' +
        '    Những câu đó tôi <b>không tính</b> vào xếp hạng — chất lượng tổng hợp ' +
        '    hôm nay phụ thuộc vào câu bạn trả lời được.</div></div>';
    }

    var hypoHtml = '';
    if (S.stopped) {
      hypoHtml = '<div class="card" style="border-color:#e6c9c9;margin:0 0 16px">' +
        '  <div style="font-weight:600;margin-bottom:6px">Tôi không chắc</div>' +
        '  <div class="small">Bạn đã bác ' +
        Object.keys(S.rejected).filter(function (k) { return S.rejected[k] >= 2; }).length +
        ' giả thuyết. Tôi dừng xếp hạng — để tôi giữ lập luận thì tôi đang ' +
        '    đoán thay bạn.</div></div>';
    } else if (!list.length) {
      hypoHtml = '<div class="card" style="background:#fdf6e6;border-color:#e8d9ae;margin:0 0 16px;padding:13px">' +
        '  <div class="small">Tôi chưa đủ căn cứ để xếp hạng. Bạn trả lời ' +
        '    <b>không biết</b> cả ba câu — và "không biết" là câu trả lời hợp lệ, ' +
        '    không phải thất bại. Bạn có thể tự mở slide 13 đọc cặp ví dụ rồi ' +
        '    quay lại trả lời.</div></div>';
    } else {
      hypoHtml = '<div style="margin:0 0 8px;font-weight:600">Giả thuyết được xếp hạng</div>' +
        list.map(function (r, i) {
          return '<div class="card" style="padding:13px;margin-bottom:10px">' +
            '  <div class="chips" style="margin-bottom:8px">' +
            '    <span class="chip on">#' + (i + 1) + ' ' + r.h.id + '</span>' +
            '    <span class="chip">điểm ' + r.s + '</span></div>' +
            '  <div style="font-weight:550;margin-bottom:6px">' + r.h.title + '</div>' +
            '  <div class="small muted" style="margin-bottom:8px">Dấu hiệu trong bài: ' + r.h.sign + '</div>' +
            '  <div class="small" style="margin-bottom:10px">Dựa trên: ' + r.pro + '</div>' +
            '  <div class="btnrow">' +
            '    <button class="btn sm primary" data-fix="' + r.h.id + '">Tôi muốn kiểm giả thuyết này</button>' +
            '    <button class="btn sm" data-rej="' + r.h.id + '">Không phải, không đúng với tôi</button>' +
            '  </div>' +
            '</div>';
        }).join('');
    }

    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Tóm tắt chẩn đoán</h2>' +
      basisHtml + warn + hypoHtml +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn" id="bothBtn" type="button">Cả hai đều không đúng với tôi</button>' +
      '    <button class="btn ghost" id="backBtnQ" type="button">◀ Sửa câu trả lời</button>' +
      '  </div>' +
      '</div>'
    ));

    el.slot.querySelectorAll('[data-fix]').forEach(function (b) {
      b.addEventListener('click', function () { renderFix(hypById(b.getAttribute('data-fix'))); });
    });
    el.slot.querySelectorAll('[data-rej]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-rej');
        S.rejected[id] = (S.rejected[id] || 0) + 1;
        // B5 — bác lần 2 → dừng xếp hạng
        if (S.rejected[id] >= 2) S.stopped = true;
        renderSummary();
      });
    });
    el.slot.querySelector('#bothBtn').addEventListener('click', renderBoth);
    el.slot.querySelector('#backBtnQ').addEventListener('click', function () {
      S.qi = Q.length - 1; renderQ();
    });
  }

  /* --- NGƯỜI HỌC TỰ CHẠY PHÉP KIỂM.
        AI đưa điều kiện, KHÔNG kết luận. R1. --- */
  function renderFix(hyp) {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Tự kiểm ' + hyp.id + '</h2>' +
      '  <div style="font-weight:550;margin-bottom:12px">' + hyp.title + '</div>' +
      '  <div class="card" style="background:#f7f9fc;margin:0 0 14px;padding:13px">' +
      '    <div class="small muted" style="margin-bottom:4px">Cách kiểm</div>' +
      '    <div>' + hyp.fixHint + '</div>' +
      '  </div>' +
      '  <p class="small muted" style="margin:0 0 14px">' +
      '    Tôi không biết bạn sẽ thấy gì. Bạn tự đối chiếu với bài.</p>' +
      '  <div class="btnrow">' +
      '    <button class="btn primary" id="fDone" type="button">Tôi đã kiểm xong</button>' +
      '    <button class="btn" id="fNo" type="button">Không phải, không đúng với tôi</button>' +
      '  </div>' +
      '  <div class="hr"></div>' +
      '  <button class="btn ghost sm" id="fBack" type="button">◀ Về danh sách giả thuyết</button>' +
      '</div>'
    ));
    el.slot.querySelector('#fDone').addEventListener('click', renderConclude);
    el.slot.querySelector('#fNo').addEventListener('click', function () {
      S.rejected[hyp.id] = (S.rejected[hyp.id] || 0) + 1;
      if (S.rejected[hyp.id] >= 2) S.stopped = true;
      renderSummary();
    });
    el.slot.querySelector('#fBack').addEventListener('click', renderSummary);
  }

  function renderConclude() {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đến lượt bạn</h2>' +
      '  <p class="small" style="margin:0 0 14px">' +
      '    Tôi không viết kết luận thay bạn. Viết bằng lời của bạn câu trả lời ' +
      '    cho câu hỏi ở đầu màn hình.</p>' +
      '  <textarea id="concl" rows="4" style="width:100%;border:1px solid var(--line-2);' +
      '    border-radius:6px;padding:10px;font:inherit;font-size:13.5px" ' +
      '    placeholder="Vì sao phải kết hợp hai cách này?"></textarea>' +
      '  <div id="savedBox"></div>' +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn ghost" id="cBack" type="button">◀ Về danh sách giả thuyết</button>' +
      '  </div>' +
      '</div>'
    ));
    var ta = el.slot.querySelector('#concl');
    ta.addEventListener('input', function () {
      el.slot.querySelector('#savedBox').innerHTML = ta.value.trim()
        ? '<div class="small muted" style="margin-top:10px">Đã lưu trong phiên này. ' +
          'Không gửi đi đâu — bấm "Bắt đầu lại" ở dưới để xoá.</div>'
        : '';
    });
    el.slot.querySelector('#cBack').addEventListener('click', renderSummary);
  }

  /* --- B6: "cả hai đều không đúng" → AI DỪNG, hỏi MỘT câu mở. */
  function renderBoth() {
    S.both = true;
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card">' +
      '  <h2>Đã dừng</h2>' +
      '  <p style="margin:0 0 12px;font-size:14.5px">' +
      '    Tôi không giữ lập luận nào nữa. Tôi chỉ hỏi đúng một câu:</p>' +
      '  <div class="card" style="background:#f7f9fc;margin:0 0 14px;padding:13px">' +
      '    Có phần nào trong bài bạn đọc thấy <span class="unclear">sai</span> không?</div>' +
      '  <div class="btnrow">' +
      '    <button class="btn" id="bYes" type="button">Có, tôi nghĩ bài viết sai</button>' +
      '    <button class="btn" id="bNo" type="button">Không, bài không sai — tôi chỉ chưa thấy lý do</button>' +
      '  </div>' +
      '  <div class="hr"></div>' +
      '  <div class="btnrow">' +
      '    <button class="btn ghost sm" id="bBack" type="button">◀ Về tóm tắt</button>' +
      '    <button class="btn ghost sm" id="bLesson" type="button">Về bài học</button>' +
      '  </div>' +
      '</div>'
    ));
    el.slot.querySelector('#bYes').addEventListener('click', function () {
      el.slot.innerHTML = '';
      el.slot.appendChild(h(
        '<div class="card"><h2>Đã ghi nhận</h2>' +
        '  <p style="margin:0 0 12px" class="small">Nếu bài viết sai ở đâu đó thì đó là ' +
        '    điều tôi không biết, không phải điều bạn cần sửa trong bài này. ' +
        '    Quay lại phần bạn đang học.</p>' +
        '  <button class="btn primary" id="gBack" type="button">Về bài học</button>' +
        '</div>'
      ));
      el.slot.querySelector('#gBack').addEventListener('click', goLesson);
    });
    el.slot.querySelector('#bNo').addEventListener('click', function () {
      el.slot.innerHTML = '';
      el.slot.appendChild(h(
        '<div class="card"><h2>Đã ghi nhận</h2>' +
        '  <p style="margin:0 0 12px" class="small">Bài không sai — bài nói "phải kết hợp" ' +
        '    mà không đưa ví dụ ngay cạnh. Câu trả lời có ở slide 13, ngay bên cạnh.</p>' +
        '  <div class="btnrow">' +
        '    <button class="btn primary" id="gBack2" type="button">Về bài học</button>' +
        '  </div>' +
        '</div>'
      ));
      el.slot.querySelector('#gBack2').addEventListener('click', goLesson);
    });
    el.slot.querySelector('#bBack').addEventListener('click', renderSummary);
    el.slot.querySelector('#bLesson').addEventListener('click', goLesson);
  }

  function goLesson() {
    el.slot.innerHTML = '';
    el.slot.appendChild(h(
      '<div class="card"><h2>Về bài học</h2>' +
      '  <p style="margin:0 0 12px" class="small muted">' +
      '    Tổng hợp không tự mở lại. Bấm "Bắt đầu lại" ở dưới để làm lại từ đầu.</p>' +
      '  <button class="btn" id="lBack" type="button">Mở lại đối thoại</button>' +
      '</div>'
    ));
    el.slot.querySelector('#lBack').addEventListener('click', function () {
      renderSummary();
    });
  }

  // ------------------------------------------------------------------ nối
  /* index.html nhúng file này bằng DOM injection NGAY TRONG <body>, tức là
     file chạy SAU khi DOMContentLoaded đã bắn. Chỉ addEventListener thì
     listener không bao giờ chạy → phần option trống. Phải check readyState. */
  function start() {
    mount();
    renderStart();

    document.getElementById('backBtn').addEventListener('click', goLesson);
    document.getElementById('resetBtn').addEventListener('click', function () { CTX.reset(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
