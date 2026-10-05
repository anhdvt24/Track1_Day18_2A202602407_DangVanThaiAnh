# Group Feedback Synthesis — Nhóm AAA

> **Bản nộp chính Day 18** · Case A (AI Tutor: Diagnostic Refresher) · Người nộp: Đặng Văn Thái Anh (2A202602407)
> **Prototype:** scenario RAG / Hybrid Retrieval (RRF) — xem [`prototype-link.md`](prototype-link.md) và [`README.md`](README.md).
> Điền **sau khi đủ ba Feedback Notes** từ ba tester ngoài nhóm. Mỗi tester dùng cả A/B/C với cùng task (xem phần "Chuẩn bị test" trong [`prototype-feedback-note.md`](prototype-feedback-note.md)).
> Gate 5 đạt khi: có 3 note · tách pattern / Next Change / Still Unproven · không nói quá evidence.
> **Phần của tôi trong file này:** ô T3 ở §1 và §2, cùng phần tôi đóng góp ở §3–§5 — xem [`prototype-feedback-note.md`](prototype-feedback-note.md) §4.1–§4.4.

## 0. Pilot trước test — Option B (bản Excel / PivotTable) — KHÔNG tính là Feedback Note

> ⚠️ **Bản cảnh báo quan trọng:** mục này thuộc **bản prototype Excel / PivotTable** (tài liệu `NHOM/Day18-chot-chung.md`), **không** thuộc bản nộp chính RAG / Hybrid Retrieval. Giữ lại như tài liệu nhóm vì nó ghi lại một bài học thiết kế có giá trị.
> **Không dùng làm evidence cho Gate 5 của bài nộp**, và không trích các commit `467db12` / `1ecec9c` vào bài nộp.
> **Lý do phải tách bạch:** để cả hai scenario trong bài nộp sẽ vi phạm Cổng 1 — *"tự ý đổi đề bài"*.

> **Người chạy:** AI (Claude) đóng vai người mở prototype lần đầu, theo đúng outcome task. **Không phải tester ngoài nhóm**, đã biết trước nguyên nhân thật → chỉ dùng để tìm chỗ interaction gãy trước khi test, **không** dùng làm evidence cho Gate 5.
> **Ngày:** 05/10/2026 · **Bản test:** commit `467db12` · **Bản sau khi sửa:** commit `1ecec9c`

| # | Mức | Ở đâu | Điều quan sát được | Đã sửa |
|---|---|---|---|---|
| 1 | Chặn test | Phép kiểm tra | Màn hình bảo gõ `=ISNUMBER(E2)` nhưng prototype không có chỗ chạy → phải đoán kết quả, sẽ cần facilitator giải thích | Nút "Làm thử trên file mẫu" hiện kết quả mô phỏng |
| 2 | Sai quyền | "Xin giả thuyết khác" | Giả thuyết đầu tự chuyển thành "Bạn đã loại" dù user không loại (trái R2) | Thêm giả thuyết mới, không loại cái nào |
| 3 | Mất phần đã làm | "← Về bài học" | Thoát giữa chừng thì mất hết câu trả lời | Giữ câu trả lời; hỏi "Tiếp tục / Bắt đầu lại" |
| 4 | Nói sai | "Để sau" | "Đã ghi lại điểm bạn đang dừng" trong khi prototype không lưu gì (R6) | Đổi câu cho đúng sự thật |
| 5 | Khựng lại | Câu hỏi 2 | Hỏi lại điều màn trước đã hiện ("Sum bị mờ") → không rõ vì sao AI hỏi | Thêm "Mình không nhìn thấy màn hình của bạn…" |
| 6 | **Nhỏ nhất** | Câu hỏi 3 | Nút ghi "Xoá **ảnh** đã chia sẻ" nhưng thứ được chia sẻ là **bảng 5 dòng** → chữ không khớp với vật thể user vừa thấy | Đổi thành "Xoá **dữ liệu** đã chia sẻ khỏi phiên" |

**Bài học từ lỗi nhỏ nhất (#6):** ở Option B, chỗ duy nhất user trao dữ liệu cho AI là câu 3, và nút xoá là đường **thu hồi quyền** (§3.8). Chữ trên nút lệch với thứ user vừa chia sẻ có thể làm user không chắc nút đó xoá cái gì → đúng chỗ cần rõ nhất về kiểm soát dữ liệu. Khi test thật, quan sát xem tester có tìm và dùng nút này không.

**Chưa biết sau pilot:** pilot không cho biết người thật có chia sẻ dữ liệu ở câu 3 không, có đọc dấu hiệu +/–/? không, hay có cần facilitator giải thích không — cần ba phiên test thật.

## 0b. Pilot trước test — Option C (bản RAG) — KHÔNG tính là Feedback Note

> **Người chạy:** AI đóng vai người mở prototype lần đầu, chạy bằng Playwright theo đúng các đường đi mà `ANNOTATION.md` mô tả. **Không phải tester ngoài nhóm**, đã biết trước nguyên nhân thật.
> **Ngày:** 05/10/2026 · **Phạm vi:** Option C (`?o=C`) · **Bản test:** trước khi sửa · **Bản sau khi sửa:** hiện tại
> **Vì sao chạy:** Tìm chỗ interaction **gãy** trước khi đưa người thật vào. Không dùng làm evidence cho Gate 5. **Không** điền vào ô T1/T2/T3.

| # | Mức | Ở đâu | Điều quan sát được | Đã sửa |
|---|---|---|---|---|
| 1 | 🔴 **Chặn test** | Toàn bộ option | **Phần option trống hoàn toàn** — `#optBadge` vẫn để `— option —`, không có nút nào trong `#optSlot`. Prototype **không mở được** | Lỗi thứ tự: `index.html` nhúng file option bằng DOM injection **trong `<body>`**, nên file chạy **sau** khi `DOMContentLoaded` đã bắn → listener trong `agent-nudge.js` không bao giờ chạy. Sửa bằng cách kiểm tra `document.readyState` |
| 2 | 🔴 **Phá C1** | `tryNudge()` | AI nói *"trong khoảng 5 phút"* nhưng **không hề kiểm tra thời gian**. `T.windowMs` và `winStart` được khai báo rồi **không dùng**. Hệ quả: 3 lần tua rải rác cả buổi học vẫn ra câu *"3 lần trong 5 phút"* → **AI bịa khoảng thời gian** | Lọc `stamps` và `slideStamps` theo `Date.now() - T.windowMs` trước khi đếm |
| 3 | 🟡 Đọc lại | `winStart`, `T.copy` | Hai biến chết: `winStart` chỉ được gán, không đọc; `T.copy` không tồn tại nhưng code trông như đang dùng → dễ tưởng copy code là tín hiệu phát hiện | Bỏ `winStart`; bỏ `T.copy`; ghi chú rõ copy **không** dùng để ra chỉ báo |
| 4 | 🔴 Thành sai thật | Câu mở | AI nói *"và vẫn đang ở slide 12"* sau khi người học **đã sang slide 14** — câu mở được ghi **một lần** rồi không re-render khi mở hội thoại | Bỏ mọi mệnh đề thì hiện tại khỏi câu mở; kiểm lại `S.curSlide` lúc mở hội thoại |

**Sau khi sửa, đã chạy lại và tất cả trạng thái đều đúng:**

| Trạng thái cần kiểm | Kết quả |
|---|---|
| Chỉ báo hiện khi đủ mẫu lặp | ✅ 3 vòng tua 06:40 → 04:20 → hiện, câu mở đúng số đếm |
| **C2** — bấm "Không phải" | ✅ Dừng, xoá suy đoán, chip *"Suy đoán đã xoá"*, chỉ báo không quay lại |
| **C3** — bỏ qua một lần | ✅ Im ở 3 vòng sau; **có** nút *"Xem lại thao tác của tôi"* để tự mở |
| C3 không thành "bị khoá" | ✅ Bỏ qua → tự mở lại được nhật ký |
| Tắt theo dõi | ✅ Hiệu lực ngay; bật lại thì hoạt động trở lại |
| Nút "Không phải" ở **mọi** màn hình sau chỉ báo | ✅ Có cả ở màn hình cuối (*"Tôi đã kiểm tra xong"*) |
| Reset về common context | ✅ Về 04:20, slide 12 |

**Chưa biết sau pilot:** pilot không cho biết tester có **bấm** chỉ báo không, có thấy bị theo dõi không, có phản ứng gì khi AI nói sai, có tự kết luận được không. **Ba câu hỏi trung tâm của C vẫn phải chờ phiên thật.**

> ⚠️ **Giới hạn của pilot này:** nó chỉ chứng minh **interaction không gãy** — chứng minh **một người thật sẽ chịu được việc AI nhìn thấy mình thử sai hay không**. Hai câu hỏi đó khác nhau.

## 0c. Mô phỏng 3 hồ sơ học viên — KHÔNG tính là Feedback Note

> **Người chạy:** AI, bằng Playwright trên Option C **thật**, đi theo 3 hồ sơ khác nhau.
> **Ngày:** 05/10/2026 · **Chạy trên bản:** sau khi sửa 2 lỗi ở §0b

> ### 🚫 Đọc kỹ trước khi dùng
> **Đây KHÔNG phải feedback của người thật.** Không điền vào ô T1/T2/T3, không dùng làm evidence cho Gate 5.
> Những gì ở đây chia làm ba loại, mỗi dòng đều gắn nhãn:
>
> | Nhãn | Nghĩa là gì | Dùng được không |
> |---|---|---|
> | **FACT** | Đo được trên hệ thống, chạy lại được | ✅ Dùng để sửa prototype |
> | **HYP** | Giả định của AI về con người | ⚠️ Chỉ để đặt câu hỏi cho tester thật |
> | **UNKN** | Chưa biết, cần người thật | ❌ Không được đoán |
>
> **Có gì mô phỏng KHÔNG làm được:** không biết người học có **bấm** chỉ báo không · có thấy bị theo dõi không · có **tin** AI không · có **bỏ dở** vì khó chịu không. Đây đúng là ba câu hỏi trung tâm của C.

### P1 — Hồ sơ Lớp 1: không biết mình đang thiếu gì

| Nhãn | Kết quả |
|---|---|
| **FACT** | Không lặp mốc nào → chỉ báo **không hiện** (đúng thiết kế) |
| **FACT** | Panel chỉ có **một** nút: *"Tắt theo dõi"* |
| **FACT** | ⚠️ **Không có bất kỳ nút tự hỏi giúp nào** — người học muốn hỏi cũng không có cách |
| **HYP** | Lớp 1 có thể **không bao giờ** tạo ra mẫu lặp → **không bao giờ thấy gì** → C không chạm được Lớp 1 như thiết kế định |
| **UNKN** | Họ có tự tìm nguồn ngoài không? Có đóng tab không? |

> **Đây là phát hiện đáng chú ý nhất.** Thiết kế nói C là option **duy nhất chạm Lớp 1**. Nhưng C chạm Lớp 1 **bằng cách chờ người học lặp lại** — mà Lớp 1 theo định nghĩa là *không biết mình đang kẹt*, tức là **chưa lặp lại vì chưa nhận ra**. Vậy C chỉ chạm được Lớp 1 **khi Lớp 1 đã bắt đầu tự nhận ra** — tức đã chuyển sang gần Lớp 2.
> Đây là mâu thuẫn **trong thiết kế**, không phải lỗi code. Cần đưa vào §3 của tổng hợp khi có dữ liệu thật.

### P2 — Hồ sơ tự kiểm chứng trước khi tin (theo PN3)

| Nhãn | Kết quả |
|---|---|
| **FACT** | Tua 3 vòng về mốc **02:00** → chỉ báo hiện, câu mở đúng *"Đoạn 02:00 bạn đã quay lại 3 lần trong khoảng 5 phút"* |
| **FACT** | ✅ **C1 đạt** — nhắc đúng mốc thật sự đã tua, **không** hard-code 04:20 |
| **FACT** | AI nói *"Mở slide 13"* nhưng **không có nút bấm** — người học phải tự tìm |
| **FACT** | AI **không** đưa đáp án ở màn hình này; chỉ mời tự đọc slide 13 |
| **UNKN** | Họ có tự kiểm chứng lời AI không? Thấy đúng → có phản ứng khác gì không? |

### P3 — Hồ sơ có deadline, ưu tiên thoát nhanh

| Nhãn | Kết quả |
|---|---|
| **FACT** | Quay lại slide 12 ba lần → chỉ báo hiện, đúng số đếm |
| **FACT** | Đi hết luồng: chỉ báo → gợi ý → kiểm tra → xong, **không vướng** |
| **FACT** | ✅ **R3 đạt** — nút *"Về bài học"* hiện ở **mọi** trạng thái, không cần cuộn |
| **FACT** | Nút *"Không phải, tôi không làm vậy"* có ở **cả** màn hình cuối (C2 không để lỗ hổng) |
| **FACT** | Sau khi người học kết luận, hệ thống **chỉ mời tiếp tục quan sát**, không hỏi gì thêm |
| **UNKN** | Họ có thấy đây là *"AI quan sát tôi"* và khó chịu không? |

### Tổng hợp: mô phỏng cho thấy gì

| # | Kết luận | Loại |
|---|---|:---:|
| 1 | **C1/C2/C3 hoạt động đúng** trên 3 hồ sơ — câu mở đúng mốc thật, sửa được, bỏ qua thì im, có đường tự mở lại | **FACT** |
| 2 | **R3 đạt** — lối thoát về bài luôn hiện ở mọi trạng thái | **FACT** |
| 3 | ⚠️ **C không có đường để người học tự hỏi giúp.** Họ muốn hỏi thì phải chờ AI phát hiện trước | **FACT** |
| 4 | ⚠️ **C chỉ chạm Lớp 1 khi Lớp 1 đã bắt đầu tự lặp** — mâu thuẫn với luận điểm thiết kế | **FACT** + diễn giải |
| 5 | ⚠️ **AI không có nút bấm được cho slide 13** — chỉ có câu chữ, người học phải tự tìm | **FACT** |
| 6 | Ba câu hỏi trung tâm của C **vẫn chưa có câu trả lời** | **UNKN** |

> **Đề xuất Next Change (chỉ là đề xuất, chưa phải kết luận):** nếu muốn C chạm được Lớp 1 như thiết kế nói, cần một **đường tự mở không phụ thuộc mẫu lặp** — ví dụ một nút *"Tôi đang kẹt"* luôn hiện. Nhưng làm vậy là **C bắt đầu giống A và B** → phá luật so sánh. Cần đủ ba note thật mới quyết.

## 1. Ba Feedback Notes — trạng thái thật

> **Đọc trước bảng này.** Tôi đã đọc `TEAM/` và `NHOM/`. Kết quả kiểm tra:
>
> | Nguồn | Nội dung | Trạng thái |
> |---|---|---|
> | `TEAM/prototype-feedback-note.md` | Phiếu của **Nguyễn Thị Bảo Trang**, tester **Phan Thị Khánh Linh**, ngày 05/10/2026 — có observation, quote nguyên văn, mục Still Unproven | ⚠️ **Phiếu thật, nhưng scenario Excel / PivotTable** |
> | `TEAM/group-feedback-synthesis (1).md` | Bản synthesis cũ của nhóm | ⛔ **Không phải bản nộp** — vẫn để ô TODO, có nhầm lẫn scenario |
> | `NHOM/Day18-chot-chung.md` §0 | Pilot do AI chạy, scenario Excel | ✅ Đã tách riêng ở §0 ở trên, **không** tính là Feedback Note |
> | `prototype-feedback-note.md` (6 tệp gốc) | Phiếu của **tôi** (T3) | ⏳ **Chưa diễn ra** — khung trống, chờ tôi điền |
>
> ⚠️ **Vì sao phiếu của Trang không đổ vào bảng dưới:** phiếu đó chạy trên scenario **Excel / PivotTable**, còn bài nộp chính dùng scenario **RAG / Hybrid Retrieval (RRF)** — prototype đã build và mã nguồn trong `prototype/` là cho RAG. Đưa observation Excel vào bảng so sánh của bài RAG sẽ tạo ra **hai bài toán khác nhau trong cùng một bài nộp** → vi phạm Cổng 1 (*"tự ý đổi đề bài"*).
>
> Phiếu đó **không bị xoá** — nó vẫn nằm trong `TEAM/` và là tài liệu nhóm hợp lệ. Chỉ là **không dùng làm bằng chứng cho bài RAG**.
>
> **Nếu nhóm muốn dùng nó**, có hai hướng, và cả hai đều cần cả ba người quyết:
> 1. Đổi bài nộp sang scenario Excel → nhưng phải build lại prototype cho Excel.
> 2. Giữ RAG, chạy lại 3 phiên trên prototype RAG.

| Tester | Facilitator | Thứ tự | Phiếu | Trạng thái |
|---|---|---|---|---|
| T1 | Nguyễn Thị Bảo Trang | A → B → C | `TEAM/prototype-feedback-note.md` | ⚠️ **Có, nhưng scenario Excel** — không dùng cho bài RAG |
| T2 | Đàm Quang Trung | B → C → A | — | ⏳ **Chưa có** |
| T3 | **Đặng Văn Thái Anh** | **C → A → B** | [`prototype-feedback-note.md`](prototype-feedback-note.md) | ⏳ **Chưa diễn ra** — khung đã dựng, chờ điền bằng quan sát thật |

> **Phiếu T1 có thể dùng được cho RAG không?** Có **một phần hẹp**: các quan sát về **hành vi đối với quyền dữ liệu** — tester dừng lại ở bước nâng scope, thử trên bản sao, dùng Undo sau khi apply. Đây là hành vi **về cách xử lý quyền**, không phụ thuộc bài toán cụ thể. Nhưng nó vẫn là **suy luận của tôi**, không phải quan sát đã đo trên prototype RAG → **không được đưa vào bảng dưới như dữ liệu thật**. Nếu muốn dùng, phải ghi rõ là *"mang từ scenario khác"*.

## 2. So sánh hành vi theo 5 điểm quan sát

> **Chưa có dữ liệu.** Cột bên phải dưới đây là **dữ liệu FACT đo được bằng Playwright trên prototype RAG** (mô phỏng của AI, 3 hồ sơ ở §0c) — **không phải** hành vi người thật. Mục đích: chỉ ra ô nào đã biết và ô nào còn trống, để khi test thật biết cần đo cái gì.

| Quan sát | A — Bản đồ tự kiểm tra | B — Đối thoại đồng chẩn đoán | C — Agent theo dõi, rồi mở hội thoại |
|---|---|---|---|
| First action | ⏳ | ⏳ | 🤖 Không phải chọn gì → **không có hesitation** *(FACT, mô phỏng)* |
| Hesitation | ⏳ | ⏳ | 🤖 **0** *(FACT, mô phỏng)* |
| Evidence read / ignored | ⏳ | ⏳ | 🤖 Cả 3 hồ sơ **không mở nhật ký** → không kiểm chứng lời AI *(FACT)* |
| Correction / recovery | ⏳ | ⏳ | 🤖 **Không hồ sơ nào bác** → **chưa test được C2** *(FACT)* |
| Help needed | ⏳ | ⏳ | 🤖 0 *(FACT, mô phỏng)* |
| Tìm ra nguyên nhân & quay lại bài? | ⏳ | ⏳ | 🤖 P3: **có**, đi trọn luồng không vướng *(FACT)* |

> 🤖 = dữ liệu mô phỏng bằng máy · ⏳ = chưa có dữ liệu người thật · *(FACT)* = đo được, chạy lại được
>
> ⚠️ **Giới hạn của mục này:** mô phỏng chứng minh *interaction không gãy*, **không** chứng minh *một người thật sẽ chịu được việc AI nhìn thấy mình thử sai*. Ba câu hỏi trung tâm của C — có **bấm** chỉ báo không, có thấy **bị theo dõi** không, phản ứng gì khi AI nói sai — **vẫn chưa có câu trả lời nào**.

**Option được chọn và trade-off (lời tester):**
- T1: ⏳ *(có 1 phiếu nhưng scenario Excel — xem §1)*
- T2: ⏳
- T3: ⏳

## 3. Pattern và khác biệt

> **Chưa đủ dữ liệu để nêu pattern lặp ở người thật.** Dưới đây là những gì đã quan sát được, tách rõ mức độ chắc chắn.

| | Nội dung | Từ đâu | Mức |
|---|---|---|:---:|
| **Lặp lại ở ≥2 người thật** | ⏳ **Chưa xác định được** — cần ≥2 tester trên prototype RAG | — | — |
| **Khác nhau giữa các người** | ⏳ **Chưa xác định được** | — | — |
| **Trái với kỳ vọng của nhóm** | **C không tiết kiệm effort như thiết kế định.** Thiết kế nói C thắng vì người học *không cần* tự nhận ra mình kẹt — nhưng mô phỏng P1 cho thấy hồ sơ Lớp 1 **không bao giờ tạo ra chỉ báo**, và panel chỉ có nút *"Tắt theo dõi"*, **không có đường nào để tự hỏi giúp** | §0c P1 | 🟡 **giả thuyết từ mô phỏng** — cần xác nhận bằng người thật |
| **Trái với kỳ vọng của nhóm** | **C chỉ chạm được Lớp 1 khi Lớp 1 đã bắt đầu tự lặp** — tức đã gần Lớp 2. Đây là mâu thuẫn **trong luận điểm thiết kế**, không phải lỗi code | §0c P1 | 🟡 **suy luận thiết kế** |
| **Trái với kỳ vọng của nhóm** | Phiếu T1 (scenario Excel) cho thấy tester **dừng lại ở bước nâng scope** của C — có thể là đang cân nhắc **quyền dữ liệu**, không mặc nhiên là lỗi usability | `TEAM/prototype-feedback-note.md` | ⚠️ **scenario khác** — chỉ là gợi ý, không phải dữ liệu bài này |

**Câu hỏi cần trả lời từ dữ liệu, không đoán trước:**
- **A:** tester có biết bắt đầu từ nhánh nào không? Nút recovery sau khi một nhánh bị loại trừ có **đủ dễ nhận ra** không? *(câu hỏi này lấy từ phiếu T1 — cần test lại trên A của bản RAG)*
- **B:** tester có trả lời *"không biết"* ở bao nhiêu câu? Có đọc lại dòng *"AI dựa vào: …"* không?
- **C:** tester có **bấm** chỉ báo không? Có nói thấy **bị theo dõi** không? Có chịu được việc AI nhìn thấy mình thử sai không? Khi AI nói sai, có dùng nút *"Không phải"* không? *(C theo dõi thao tác trong khung bài qua sự kiện `CTX.on` — **không** đọc file, **không** ghi file, **không** đề xuất đổi dữ liệu.)*

## 4. Next Change

> **Trạng thái: chưa chốt.** Quy tắc là chọn **một** thay đổi dựa trên hành vi **lặp ở ≥2 tester thật** — hiện chưa có dữ liệu đó, nên **chưa đủ căn cứ** để chốt.

**Còn thiếu để chốt được:** 3 phiếu trên prototype **RAG** (xem §1). Tôi không điền sẵn vì chọn Next Change mà không có hành vi lặp là đúng loại lỗi Cổng 5 cấm.

### 4.1 Ứng viên đang cân nhắc — chưa phải quyết định

Mỗi ứng viên đều ghi rõ **điều kiện** để được chọn, để khi có dữ liệu thì quyết được ngay thay vì phải nghĩ lại từ đầu.

| # | Ứng viên | Chọn khi nào | Rủi ro nếu chọn | Mức căn cứ hiện tại |
|---|---|---|---|:---:|
| 1 | **Thêm đường tự mở không phụ thuộc mẫu lặp** cho C (vd nút *"Tôi đang kẹt"*) | Tester ở Lớp 1 **bao giờ không** thấy gợi ý | ⚠️ C bắt đầu giống A và B → **phá phép so sánh** | 🟡 §0c P1 — mô phỏng |
| 2 | **Kích hoạt chỉ báo sớm hơn** (lần lặp đầu tiên chưa kèm kết quả, thay vì lần thứ ba) | Chỉ báo luôn đến **sau** khi tester đã tự tìm ra đáp án | Chỉ báo hiện nhiều → tăng nhiễu, cần đo tỉ lệ bỏ qua | 🟡 §0c — chưa đo được độ trễ vì chưa có người thật |
| 3 | **Làm rõ quyền dữ liệu tại điểm AI cần thêm quyền** | Tester **dừng lại** ở bước mở rộng quyền, hoặc dùng bản sao thay vì dữ liệu thật | Nhấn mạnh quyền dữ liệu có thể làm C nặng nề hơn | ⚠️ phiếu T1 nhưng **scenario Excel** — cần test lại |
| 4 | **Sửa câu chữ để recovery của A dễ nhận ra hơn** | Tester **không tìm thấy** nút recovery sau khi một nhánh bị loại trừ | Sửa triệu chứng, không sửa nguyên nhân — chỉ chọn nếu A **là** nơi phát sinh pattern | ⚠️ phiếu T1 nhưng **scenario Excel** |

> **Điều kiện chọn:** ứng viên nào có hành vi **lặp ở ≥2/3 tester** thì chọn. Nếu **không ứng viên nào** đạt điều kiện đó → ghi rõ *"chưa đủ căn cứ chọn Next Change"* và nói thẳng điều đó. Đó cũng là một kết luận trung thực.

## 5. Still Unproven

- Học viên có chấp nhận để AI **quan sát thao tác học tập** của mình không? *(Đây là giả định lớn nhất của Option C. Cả hai note Day 17 chỉ ghi hành vi **chủ động** — chia sẻ với **đồng nghiệp** không phải chia sẻ với **AI**.)*
- Học viên có sẵn sàng chia sẻ **ảnh chụp màn hình / file công việc** cho AI không? *(Đặc biệt với Option B, câu hỏi 3 — nơi người dùng thực sự trao dữ liệu.)*
- Người học **thật** đang kẹt thật có tạo ra được chuỗi hành vi mà Option C dựa vào không? *(Bộ dữ liệu prototype do nhóm dựng — đây là **điều kiện tiên quyết** để C hoạt động, và không test được bằng prototype.)*
- Lớp 1 (không biết mình thiếu gì) hay Lớp 2 (biết nhưng không nối được) phổ biến hơn? Prototype chỉ test Lớp 2 — xem §0c P1.
- Tần suất: các note Day 17 khác chủ đề, chưa có lặp lại cùng tình huống. Chúng chỉ khớp ở *cơ chế*, chưa khớp ở *tần suất*.
- Độ bền của chẩn đoán khi dùng **model thật**? Dữ liệu cứng chỉ đo được phản ứng với một tình huống, không đo được chất lượng chẩn đoán nói chung.
- Ba tester với dữ liệu cứng không chứng minh product value, độ chính xác của AI thật, hay nhu cầu thị trường.
- Đây có phải **pain lớn nhất** của học viên không?

### 5.1 Ba điều mới rút ra khi đọc phiếu của đồng đội

Ba dòng dưới đây **không** phải dữ liệu bài nộp này — chúng đến từ việc đọc `TEAM/prototype-feedback-note.md` (scenario Excel). Tôi ghi lại vì chúng **là câu hỏi cần trả lời**, chưa phải là câu trả lời.

| # | Câu hỏi mới phát sinh | Vì sao đáng hỏi |
|---|---|---|
| 1 | Tester có **dừng lại ở bước mở rộng quyền** không — và đó là đang cân nhắc quyền, hay chỉ là chưa biết bấm đâu? | Trong phiếu T1, tester dừng đúng ở bước nâng scope của C. Nếu là *cân nhắc quyền* thì đó là dữ liệu về Cổng 3, không phải lỗi giao diện. **Chưa phân biệt được** |
| 2 | Thông báo *"Có thể Undo"* **trước** khi apply có được chú ý không, hay chỉ tìm thấy nút Undo **sau** khi đã apply? | Trong phiếu T1, Undo được dùng **sau** apply. Nếu vậy, thông báo trước đó không có tác dụng — đây là câu hỏi về **Expectation** mà rubric yêu cầu |
| 3 | Một nút recovery có thể bị **loại trừ** mà vẫn dùng được, thì người dùng có **nhận ra** nó không? | Trong phiếu T1, tester tự phục hồi sau khi loại một nhánh của A — nhưng việc tự phục hồi được có nhờ thấy nút, hay nhờ biết phải làm gì? Chưa tách được |

> ⚠️ **Ba câu hỏi trên cần test lại trên prototype RAG** trước khi dùng làm căn cứ. Ở bài nộp này chúng chỉ là **gợi ý**, và đều chưa có câu trả lời.
