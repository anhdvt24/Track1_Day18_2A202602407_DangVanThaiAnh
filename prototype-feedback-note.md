# Prototype Feedback Note — T3

> **Điền sau khi đủ một phiên test thật. CHỈ người facilitate phiên đó điền.**
> **Không dùng AI để viết phần này.** Mọi dòng phải là thứ đã **xảy ra trong phiên**, không phải thứ mình nghĩ tester sẽ làm.

---

## 0. Shared Test Kit — bộ dùng chung cho cả A/B/C và cả ba phiên

> **Vì sao phần này phải giống nhau tuyệt đối:** nếu ba người được dẫn dắt bằng ba câu khác nhau, thì khi so sánh ta sẽ không biết khác biệt đến từ **option** hay từ **cách dẫn**. Bản chuẩn nằm ở đây, cả ba thành viên đọc từ đây.

### 0.1 Context Question — câu dẫn bối cảnh (đọc nguyên văn)

> "Em đang học bài **Xây dựng RAG chatbot — Bài 4: Hybrid Retrieval** theo nhịp của em. Video bài giảng đang dừng ở khoảng điểm 04:20, phần em đang xem lại. Trên màn hình có sẵn một trợ lý hỗ trợ học tập — em cứ coi nó như một công cụ bình thường, dùng khi nào thấy cần. Nhiệm vụ của em là hiểu chỗ em đang kẹt. Em cứ làm như đang học thật; tôi sẽ ngồi đây quan sát, và **không trả lời gì** trừ khi em hỏi tôi có cần hướng dẫn gì không."

**Câu này cố ý *không* nói:**
- Không nói AI "sẽ tìm ra nguyên nhân" → thành lời hứa không thực hiện.
- Không nói AI đang *theo dõi* → đó là thứ ta muốn **quan sát** xem tester có phát hiện không, nói trước là mất dữ liệu.
- Không nói *"mình hay bị kẹt ở chỗ kết hợp"* → đó là kết luận của nhóm, ghi trước là dẫn dắt.

### 0.2 Outcome Task — nhiệm vụ hướng đích (đọc nguyên văn, giống nhau cho A, B và C)

> "Bạn hiểu semantic search và BM25 riêng lẻ, nhưng không hiểu **tại sao phải kết hợp** hai cách này. Hãy tìm ra lý do đó."

Câu này **trùng khớp với `TaskBanner` trong prototype** → người ngoài nhóm đọc task trên màn hình là đúng ý facilitator đã đọc, không phải nghe thêm lời miệng.

### 0.3 Bảy hành vi quan sát mục tiêu

Đây là bảy ô phải điền ở §2–§4. Mỗi ô ghi **hành vi quan sát được**, kèm nguyên văn nếu tester nói. Không ghi *"thích / không thích"*.

| # | Hành vi cần quan sát | Vì sao quan trọng | Cổng / luật liên quan |
|---|---|---|:---:|
| **H1** | **First action** — làm gì ngay khi màn hình mở ra? Bấm gì trước, hay đứng yên? | Phân biệt option nào khiến người dùng phải tự khởi động, option nào thì không | Cổng 2, luật 3 |
| **H2** | **Hesitation** — đứng yên bao lâu trước hành động đầu tiên? Có quét mắt, có lăn chuột không? | Khoảng im lặng đầu tiên là chỉ báo trực tiếp cho việc người dùng có hiểu mình phải làm gì không | Cổng 4 |
| **H3** | **Evidence read / ignored** — có đọc phần dấu hiệu / tóm tắt evidence không? Có cuộn tới cuộn lại không? | Cổng 3 — người dùng có cơ hội kiểm chứng lời AI hay không | Cổng 3, luật 6 |
| **H4** | **Correction / recovery** — khi AI nói sai hoặc nghi sai: có phát hiện không, dùng nút *"Không phải"* / nút quay lại không, hay bỏ qua? | Đây là **hành vi khó đo nhất** và cũng là chỗ dễ đo sai nhất | Cổng 3, C2/C3 |
| **H5** | **Help needed** — hỏi facilitator mấy lần? Hỏi gì? Có cần bấm hộ không? | Nếu số câu hỏi cao → Cổng 4 **không đạt** | Cổng 4 |
| **H6** | **Privacy reaction** — có phát hiện mình đang bị quan sát / dữ liệu đang lưu không? Phản ứng thế nào? Có bấm nút tắt theo dõi / xoá nhật ký không? | **Giả định lớn nhất của Option C** chưa note nào Day 17 ủng hộ. Đây là câu hỏi trung tâm của bài | Cổng 3, Still Unproven #1 |
| **H7** | **Tìm ra nguyên nhân & quay lại bài?** — có tự nói ra lý do bằng lời mình không, có quay lại đúng chỗ đang học để tiếp tục không? | Nhiệm vụ hướng đích có đạt không, và đạt *nhờ AI* hay *nhờ tự mình* | Cổng 5, luật 6 |

> **H6 là ô mà không option nào khác có.** A và B chỉ hỏi người dùng, C thu thập hành vi. Vì vậy ô H6 của A/B ghi *"không có cơ chế quan sát trong option này"* — **không phải** 0 điểm của người dùng, mà là giới hạn của chính option. Ghi vậy để không so sánh nhầm.

### 0.4 Bảy câu hỏi cấm — facilitator không được hỏi

| # | ❌ Không được hỏi | Vì sao cấm | ✅ Hỏi lại thế nào |
|---|---|---|---|
| **Q1** | *"Bạn thích option này không?"* | Câu cả nể, trả lời luôn là có, đo được **một con số phiếu** chứ không phải hành vi | *"Bạn vừa làm gì? Kể lại từ lúc mở màn hình."* |
| **Q2** | *"Bạn thấy dễ dùng không?"* | Đo đánh giá sản phẩm của người nộp, không phải hành vi người dùng | *"Chỗ nào bạn phải dừng lại để tìm?"* |
| **Q3** | *"Bạn nghĩ sao về câu trả lời AI vừa đưa?"* | Hỏi chất lượng AI khi người dùng **chưa tự kiểm chứng** → câu trả lời là phỏng vấn ý kiến, không phải hành vi | *"Bạn làm gì để biết điều đó có đúng không?"* |
| **Q4** | *"Bạn có hiểu hybrid retrieval / RRF không?"* | Dẫn thẳng tới kết luận của nhóm về barrier | *(im lặng)* |
| **Q5** | *"Bạn có muốn tôi gợi ý không?"* | Phá luật im lặng; nếu tester đồng ý thì ta **tạo ra** dữ liệu không tồn tại | *"Bạn cần gì để đi tiếp?"* → rồi **ghi nhận việc họ phải hỏi**, không trả lời |
| **Q6** | *"Bạn nghĩ vấn đề nằm ở slide nào?"* | Câu hỏi mơ hồ → tester đoán; ta mất mốc thời gian thật | *"Bạn đã mở slide nào, bao nhiêu lần, trong khoảng bao lâu?"* |
| **Q7** | *"Nếu là bạn, bạn sẽ làm gì tiếp theo?"* | Hỏi **ý định tương lai** — hành vi chưa xảy ra. Suy đoán không phải quan sát | *"Tiếp theo bạn bấm gì?"* → rồi để họ bấm |

**Ba câu nữa cũng không được nói** (đã có ở §1.4, nhắc lại vì đây là chỗ dễ phạm nhất):
- ❌ *"Hãy qua slide 13 xem thử"* → hướng dẫn, đúng thứ mà outcome task đang chạm tới.
- ❌ *"AI sẽ tìm ra nguyên nhân cho bạn"* → lời hứa không thực hiện.
- ❌ *"AI đang quan sát thao tác của bạn"* (trước khi prototype tự nói) → mất dữ liệu ở H6.

### 0.5 Mở và kết phiên

| Mốc | Việc facilitator làm |
|---|:---:|
| **Trước phiên** | Bấm *"Bắt đầu lại"* một lần để chắc chắn đã về đúng context (về 04:20, slide 12) |
| **Mở phiên** | Đọc nguyên văn §0.1 rồi §0.2. Dừng lại. **Không giải thích giao diện** |
| **Trong phiên** | Im. Ghi âm lặng hoặc ghi tay. Chỉ ghi, không nhắc |
| **Khi tester hỏi "bấm cái nào"** | **Ghi nguyên văn câu hỏi vào §3 rồi im.** Việc đó là dữ liệu, không phải sự cố cần xử lý |
| **Kết phiên** | Hỏi đúng ba câu, theo thứ tự, không thêm câu nào: ① *"Bạn đã làm gì ở màn hình này?"* ② *"Có chỗ nào bạn phải dừng lại tìm không?"* ③ *"Nếu được dùng tiếp, bạn sẽ làm gì trước?"* → rồi hỏi **lựa chọn & đánh đổi** (mục cuối §4.1) |
| **Sau phiên** | Ghi **mã commit** của bản prototype đang chạy vào §0.6 |

**Về lựa chọn & đánh đổi (câu cuối):** hỏi *"Ba cái này khác nhau ở chỗ nào? Cái nào bạn sẽ dùng tiếp, và cái gì bạn phải đánh đổi?"* — đây là câu hỏi **hợp lệ** vì nó hỏi về **hành vi và lựa chọn đã diễn ra**, không hỏi cảm xúc về sản phẩm. Nhưng phải hỏi **sau khi** tester đã trải nghiệm đủ ba, không hỏi giữa chừng.

---

## 0.6 Phiên này

| Mục | Nội dung |
|---|---|
| **Tester** | ⏳ *(mã tester)* |
| **Facilitator** | **Đặng Văn Thái Anh — 2A202602407** |
| **Ngày** | ⏳ |
| **Thứ tự option** | **C → A → B** |
| **Prototype commit** | ⏳ *(mã commit / phiên bản)* |
| **Màn hình test dùng dữ liệu** | **dữ liệu giả** ✅ — đã nói trước với tester |
| **Phiên có bị gián đoạn không** | ⏳ |

> **Ghi lại mã commit** để sau này đọc lại được kết quả test ứng với đúng bản prototype. Nếu prototype bị sửa giữa lúc test → phải ghi rõ, vì kết quả sẽ không còn khớp.

---

## 1. Bốn trạng thái mở đầu — điền TRƯỚC khi test

Bốn trạng thái này quyết định phần lớn những gì sẽ quan sát được. Không chốt trước thì dễ diễn giải sai kết quả.

### 1.1 Điều tôi **không** biết trước

| Mục | Nội dung |
|---|---|
| **Tester có tự nhận ra mình đang kẹt không?** | ⏳ |
| **Tester có thuộc Lớp nào?** *(Lớp 1: không biết mình thiếu gì · Lớp 2: biết nhưng không nối được)* | ⏳ |
| **Tester có sẵn sàng để AI quan sát không?** | ⏳ |

### 1.2 Điều tôi **biết** trước — ảnh hưởng tới cách tôi đọc kết quả

Đây là những gì nhóm **đã biết trước khi test**. Nếu kết quả chạm vào đây thì nó là **xác nhận giả định**, không phải phát hiện mới.

| # | Điều đã biết trước | Căn cứ |
|---|---|---|
| 1 | Tester trong prototype **không tạo ra được chuỗi hành vi kẹt thật** — hành vi chỉ xuất hiện nếu tester chủ động tạo ra | Fixture do nhóm dựng |
| 2 | Ba tester dùng **dữ liệu cứng**, không phải dữ liệu thật | R6 |
| 3 | **C không test được phần quan trọng nhất của nó** | Xem §5 README |
| 4 | **Không note nào** cho thấy học viên chấp nhận bị AI theo dõi | Đây là giả định lớn nhất của C |
| 5 | **Lớp 1 gần như không test được** bằng prototype này | Xem §5 README |

### 1.3 Câu dẫn cho tester — ghi nguyên văn đã nói

> ⏳ *(ghi lại đúng câu đã nói)*

**Không được hứa** *"AI sẽ tìm ra nguyên nhân"*. Câu dẫn trung thực: **AI giúp nhận ra cần kiểm tra gì, không thay người học kết luận.**

### 1.4 Điều tôi **không nói** cho tester trong cả phiên

| ❌ Không nói | Vì sao |
|---|---|
| Kết luận của nhóm | Đó là **diễn giải của nhóm**, không phải observation |
| *"Hãy qua slide 13"* | Là **hướng dẫn**, không phải gợi ý |
| *"Tôi thấy bạn chưa hiểu RRF"* | Không kiểm chứng được — phá C1 |
| Bất cứ gì khi tester hỏi *"bấm cái nào"* | **Ghi vào observation, không trả lời.** Việc đó là dữ liệu |
| Đây là ngưỡng phát hiện đặt sẵn | Tester phải tưởng mình hành xử tự nhiên |
| Rằng agent đang quan sát thao tác *(trước khi prototype tự nói)* | Đây là thứ cần quan sát xem tester có chấp nhận không |

---

## 2. Chuỗi hành vi quan sát được

> Chỉ ghi **hành vi**. Không ghi *"thích / không thích / thấy ổn"*.

### 2.1 Trước khi mở option

| Quan sát | Ghi chú |
|---|---|
| Tester đã đọc task chưa? Đọc kỹ tới đâu? | ⏳ |
| Tester hỏi gì trước khi bấm gì? | ⏳ |
| Tester có tự tua video / xem slide trước khi tìm trợ giúp? | ⏳ |

### 2.2 Option C — Agent theo dõi

| Mốc | Quan sát | Ghi chú |
|---|---|---|
| **Chỉ báo có xuất hiện không?** | ⏳ | ⬅️ **quan trọng nhất của C** |
| Tester có **bấm** chỉ báo không? | ⏳ | ⬅️ **H1** |
| Bấm xong có **đóng sớm** không? Bao lâu? | ⏳ | ⬅️ **H3** |
| Câu mở của AI — tester phản ứng thế nào? | ⏳ | |
| Tester có nói thấy **bị theo dõi** không? Nguyên văn? | ⏳ | ⬅️ **H6** — câu hỏi trung tâm của C |
| Có phản ứng thế nào khi AI **nói sai về hành vi của mình**? | ⏳ | ⬅️ **H4** — đo đúng thứ không dễ đo |
| Bỏ qua một lần thì lần sau có **tự mở lại** không? | ⏳ | ⬅️ **H4**, đo C3 |
| Có tự đi tìm nguồn ngoài (Google, ChatGPT) không — **trước khi** tìm hay **sau**? | ⏳ | |
| Có **tự kết luận** được không, hay phải cần AI nói thêm? | ⏳ | ⬅️ **H7** |

**Ghi riêng ba câu hỏi then chốt của C:**

| Câu hỏi | Kết quả |
|---|---|
| Tester có **bấm** chỉ báo không? | ⏳ |
| Tester **có chịu được** việc AI nhìn thấy mình thử sai không? | ⏳ |
| Khi AI nói sai, tester có có đường **thoát** không — và có dùng không? | ⏳ |

### 2.3 Option A — Bản đồ tự kiểm tra

| Mốc | Quan sát | Ghi chú |
|---|---|---|
| **First action** — làm gì ngay khi mở? | ⏳ | ⬅️ **H1** |
| Có **đứng yên** ~30 giây không biết bấm gì? | ⏳ | ⬅️ **H2** |
| Có biết **bắt đầu từ nhánh nào** không? | ⏳ | ⬅️ **H2** |
| Có tự tua lại video tìm không? *(không nhắc cho)* | ⏳ | |
| Chạy hết cây mà **vẫn không ra nguyên nhân**? | ⏳ | ⬅️ **H7** |
| Sau 2 nhánh chưa ra → có **tự bỏ cuộc**? | ⏳ | |
| Evidence (dấu hiệu cần tìm) — **đọc hay bỏ qua**? | ⏳ | ⬅️ **H3** |
| Có dùng nút **"không biết chọn cái nào"**? | ⏳ | ⬅️ **H5** |
| Có bấm **"Giải thích bước này giúp tôi"** không? Đọc xong có làm theo không? | ⏳ | ⬅️ **H3** + **H4** |
| Đã chạy xong → có bấm **"Đến lượt bạn kết luận"** và viết ra lời mình không? | ⏳ | ⬅️ **H7** — chỗ người học phải tự nói ra lý do |

### 2.4 Option B — Đối thoại đồng chẩn đoán

| Mốc | Quan sát | Ghi chú |
|---|---|---|
| **First action** — làm gì ngay khi mở? | ⏳ | ⬅️ **H1** |
| Trả lời **"không biết"** ở bao nhiêu câu? | ⏳ | ⬅️ **đo chất lượng B** |
| Có nói **"2 cái giống nhau"** không? | ⏳ | |
| Có **tự kiểm trước khi nghe AI** không? | ⏳ | ⬅️ **H3** |
| Đọc **tóm tắt evidence** hay bỏ qua? | ⏳ | ⬅️ **H3** |
| Có **sửa câu trả lời** / yêu cầu giả thuyết khác? | ⏳ | ⬅️ **H4** |
| Đọc xong **vẫn chưa ra nguyên nhân** → phản ứng? | ⏳ | ⬅️ **H7** |
| Ở màn hình *"Đến lượt bạn kết luận"* — có bấm không, có viết ra lời mình không? | ⏳ | ⬅️ **H7** | |

---

## 3. Sự kiện bất ngờ — việc không nằm trong kế hoạch

> Những gì xảy ra mà **không ai đoán trước**. Mục này thường đáng giá nhất.

| # | Sự kiện | Ở option nào | Ghi chú |
|---|---|---|---|
| 1 | ⏳ | | |
| 2 | ⏳ | | |
| 3 | ⏳ | | |

**Tester có hỏi gì khiến tôi phải không trả lời?**

> ⏳ *(ghi nguyên văn câu hỏi — đây là dữ liệu, không phải sự cố)*

---

## 4. Kết luận của tôi — chỉ trong phạm vi một phiên

| Mục | Nội dung |
|---|---|
| **Có tìm ra nguyên nhân không?** | ⏳ |
| **Có quay lại đúng chỗ đang học và tiếp tục được không?** | ⏳ |
| **Hành vi nào lặp lại với workaround đã biết** *(tua lại · dò nhiều nguồn · copy code)*? | ⏳ |
| **Có hỏi cần trợ giúp không?** | ⏳ |

### 4.1 Ba-feedback synthesis — phần của tôi

> **Điền sau khi có đủ ba note.** Xem [`group-feedback-synthesis.md`](group-feedback-synthesis.md).
> Mỗi ô ghi **hành vi** (T1/T2/T3), không ghi *"thích / không thích"*.

| Quan sát | A | B | C |
|---|---|---|---|
| First action · **H1** | ⏳ | ⏳ | ⏳ |
| Hesitation · **H2** | ⏳ | ⏳ | ⏳ |
| Evidence read / ignored · **H3** | ⏳ | ⏳ | ⏳ |
| Correction / recovery · **H4** | ⏳ | ⏳ | ⏳ |
| Help needed · **H5** | ⏳ | ⏳ | ⏳ |
| Privacy reaction · **H6** | ⚠️ *không có cơ chế quan sát trong option này* | ⚠️ *không có cơ chế quan sát trong option này* | ⏳ |
| Tìm ra nguyên nhân & quay lại bài? · **H7** | ⏳ | ⏳ | ⏳ |

> ⚠️ **Đừng so sánh ô H6 của A/B với C.** A và B **không có cơ chế quan sát**, nên ô trống đó là **giới hạn của option**, không phải người dùng không quan tâm. Ghi vậy để bảng không tự dối mình.

**Option tester chọn và trade-off (lời tester):**

> ⏳

### 4.2 Pattern — phần của tôi trong tổng hợp

| | Nội dung | Từ tester nào |
|---|---|---|
| **Lặp lại ở ≥2 tester** | ⏳ | ⏳ |
| **Khác nhau giữa các tester** | ⏳ | ⏳ |
| **Trái với kỳ vọng của nhóm** | ⏳ | ⏳ |

> Đối chiếu "Evidence sẽ bác bỏ option này" trong `three-option-design-sheet.md` §2.3.

### 4.3 Next Change — phần của tôi

> **Chỉ chọn MỘT thay đổi**, dựa trên hành vi lặp ở §4.2. Không chọn vì nó nghe hợp lý.

> ⏳

**Vì sao chọn thay đổi này:**

> ⏳

### 4.4 Still Unproven — phần của tôi

- ⏳

---

## 5. Việc không được phép làm sau phiên này

| ❌ Không được | Vì sao |
|---|---|
| Viết ở đâu là *"Pain A đã được xác nhận"* | Chưa có note nào hỗ trợ trực tiếp |
| Viết ở đâu là *"học viên cần ôn kiến thức nền"* | Evidence nghiêng sang *thiếu cầu nối*, không phải *thiếu nền* |
| Viết *"AI chẩn đoán đúng"* | Prototype dùng dữ liệu cứng — chỉ nói được *"trong tình huống này, nguyên nhân là…"* |
| Viết *"người học chấp nhận bị AI theo dõi"* | Một phiên trên dữ liệu giả **không** chứng minh điều đó |
| Viết *"tình huống này xảy ra thường xuyên"* | Hai note khác chủ đề — chỉ khớp ở *cơ chế*, chưa khớp ở *tần suất* |
| Diễn giải tester **không bấm** chỉ báo là *"AI không phát hiện được"* | Không bấm là **một kết quả hợp lệ** |
| Trình bày C ngang hàng A và B mà không kèm giới hạn | C thắng vì *được kể hay* chứ không phải vì thiết kế tốt |
| Dùng AI viết phần này | Bìa evidence |

---

**Xem thêm:** [`README.md`](README.md) · [`prototype-link.md`](prototype-link.md) · [`group-feedback-synthesis.md`](group-feedback-synthesis.md)
