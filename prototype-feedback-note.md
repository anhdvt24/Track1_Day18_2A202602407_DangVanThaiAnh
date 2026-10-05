# Prototype Feedback Note — T3

> **Điền sau khi đủ một phiên test thật. CHỈ người facilitate phiên đó điền.**
> **Không dùng AI để viết phần này.** Mọi dòng phải là thứ đã **xảy ra trong phiên**, không phải thứ mình nghĩ tester sẽ làm.

---

## 0. Phiên này

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
| Tester có **bấm** chỉ báo không? | ⏳ | |
| Bấm xong có **đóng sớm** không? Bao lâu? | ⏳ | |
| Câu mở của AI — tester phản ứng thế nào? | ⏳ | |
| Tester có nói thấy **bị theo dõi** không? Nguyên văn? | ⏳ | ⬅️ **cực kỳ quan trọng** — đây là câu hỏi trung tâm của C |
| Có phản ứng thế nào khi AI **nói sai về hành vi của mình**? | ⏳ | ⬅️ **quan trọng nhất** — đo đúng thứ không dễ đo |
| Bỏ qua một lần thì lần sau có **tự mở lại** không? | ⏳ | ⬅️ đo C3 |
| Có tự đi tìm nguồn ngoài (Google, ChatGPT) không — **trước khi** tìm hay **sau**? | ⏳ | |
| Có **tự kết luận** được không, hay phải cần AI nói thêm? | ⏳ | |

**Ghi riêng ba câu hỏi then chốt của C:**

| Câu hỏi | Kết quả |
|---|---|
| Tester có **bấm** chỉ báo không? | ⏳ |
| Tester **có chịu được** việc AI nhìn thấy mình thử sai không? | ⏳ |
| Khi AI nói sai, tester có có đường **thoát** không — và có dùng không? | ⏳ |

### 2.3 Option A — Bản đồ tự kiểm tra

| Mốc | Quan sát | Ghi chú |
|---|---|---|
| **First action** — làm gì ngay khi mở? | ⏳ | |
| Có **đứng yên** ~30 giây không biết bấm gì? | ⏳ | |
| Có biết **bắt đầu từ nhánh nào** không? | ⏳ | |
| Có tự tua lại video tìm không? *(không nhắc cho)* | ⏳ | |
| Chạy hết cây mà **vẫn không ra nguyên nhân**? | ⏳ | |
| Sau 2 nhánh chưa ra → có **tự bỏ cuộc**? | ⏳ | |
| Evidence (dấu hiệu cần tìm) — **đọc hay bỏ qua**? | ⏳ | |
| Có dùng nút **"không biết chọn cái nào"**? | ⏳ | |

### 2.4 Option B — Đối thoại đồng chẩn đoán

| Mốc | Quan sát | Ghi chú |
|---|---|---|
| **First action** — làm gì ngay khi mở? | ⏳ | |
| Trả lời **"không biết"** ở bao nhiêu câu? | ⏳ | ⬅️ **đo chất lượng B** |
| Có nói **"2 cái giống nhau"** không? | ⏳ | |
| Có **tự kiểm trước khi nghe AI** không? | ⏳ | |
| Đọc **tóm tắt evidence** hay bỏ qua? | ⏳ | |
| Có **sửa câu trả lời** / yêu cầu giả thuyết khác? | ⏳ | |
| Đọc xong **vẫn chưa ra nguyên nhân** → phản ứng? | ⏳ | |

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
| First action | ⏳ | ⏳ | ⏳ |
| Hesitation | ⏳ | ⏳ | ⏳ |
| Evidence read / ignored | ⏳ | ⏳ | ⏳ |
| Correction / recovery | ⏳ | ⏳ | ⏳ |
| Help needed | ⏳ | ⏳ | ⏳ |
| Tìm ra nguyên nhân & quay lại bài? | ⏳ | ⏳ | ⏳ |

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
