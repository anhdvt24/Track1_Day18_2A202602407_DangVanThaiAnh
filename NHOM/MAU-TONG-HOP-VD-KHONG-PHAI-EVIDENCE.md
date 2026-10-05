# MẪU TỔNG HỢP 3 PHIÊU — VÍ DỤ ĐỂ THAM CHIẾU

> # ⛔ ĐÂY KHÔNG PHẢI EVIDENCE
>
> **Toàn bộ dữ liệu tester trong file này do tôi (AI) tự nghĩ ra.** Không có phiên test nào được diễn ra. T1, T2, T3 ở đây là ba hồ sơ **không có thật**.
>
> | Dùng để | KHÔNG dùng để |
> |---|---|
> | Học cách tìm **quy luật lặp** mà không gộp thành kết luận đẹp | Chép vào `group-feedback-synthesis.md` |
> | Học cách chọn **một** Next Change có căn cứ | Chép vào ô T1 / T2 / T3 |
> | Học viết **Still Unproven** đủ cụ thể | Nộp kèm bài |
> | So sánh với bài của bạn khi test xong | Nộp kèm bài |
>
> **File nằm trong `NHOM/` — không thuộc 6 tệp bắt buộc.**

---

## 0. Năm sai lầm thường gặp khi tổng hợp

| Sai lầm | Cách làm đúng |
|---|---|
| Đếm số phiếu: *"3 người thích B"* | Ghi **hành vi đo được** ở mỗi ô, kèm số đo |
| Gộp ba hành vi giống nhau thành một kết luận | Giữ riêng khi **nguyên nhân** khác nhau |
| Tổng hợp theo option trông đẹp nhất | Tổng hợp theo **pattern lặp** |
| Chọn Next Change vì nó nghe hợp lý | Chọn vì nó **xuất phát từ pattern lặp** |
| Viết *"cần test thêm"* | Viết *"chưa biết X vì Y, cần Z để biết"* |

---

## 1. Mẫu — So sánh hành vi ở 5 điểm quan sát

Mỗi ô ghi **hành vi đo được**, có số đo. Không ghi cảm xúc.

| Quan sát | **A** — Bản đồ tự kiểm tra | **B** — Đối thoại đồng chẩn đoán | **C** — Agent theo dõi |
|---|---|---|---|
| **First action** | T1: đọc task 25s rồi bấm. T2: bỏ qua task, bấm ngay. T3: đọc 20s, bấm | T1: bấm ngay. T2: đọc task 40s, bấm. T3: bấm ngay | T1: đọc task 30s. T2: bấm ngay. T3: đọc 25s, bấm — **cả ba đều tự bấm trước khi AI nói gì** |
| **Hesitation** | T1: 0 lần. T2: **2 lần**, ~30s mỗi lần. T3: 0 lần | T1: 1 lần 8s. T2: **3 lần**, tăng dần. T3: 1 lần 10s | T1/T2/T3: 0 — **không có hesitation** ở C vì không phải chọn gì |
| **Evidence đọc / bỏ qua** | T1: đọc 5/6 nhánh. T2: đọc 1/6. T3: đọc 3/6 | T1: đọc, có đọc lại dòng "AI dựa vào". T2: **bỏ qua hết**. T3: đọc | Cả ba đều **không mở nhật ký** — không ai kiểm chứng lời AI |
| **Correction / recovery** | T1: quay lại 1 nhánh. T2: không quay lại. T3: quay lại 2 nhánh | T1: sửa 1 câu. T2: không sửa. T3: sửa 1 câu | Không có tình huống nào — **không test được C2** vì không ai bác |
| **Help needed** | T1: 1 lần. T2: **3 lần**. T3: 1 lần | T1: 1 lần. T2: **3 lần**. T3: 1 lần | T1/T2/T3: 0 lần — không cần hỏi ai |
| **Tìm ra nguyên nhân & quay lại bài?** | T1/T2/T3: **không** — 0/3 | T1/T2/T3: **không** — 0/3 | T2: **ra đáp án**, và ra **trước** khi chỉ báo hiện |

### 1.1 Lựa chọn + trade-off (lời tester, ghi nguyên văn)

> **T1:** *"Tôi không thấy nó ở đâu cả — phải tự đoán."* (A) · *"Nó hỏi tôi nhiều câu, tôi trả lời không thành thật."* (B) · *"Hồi đó sao mình đi tìm video khác nhỉ."* (C)
>
> **T2:** *"Tự làm thì lâu, mà ra đáp án chưa chắc đúng."* (A) · *"Cứ nó đoán giúp."* (B) · *"Giống hệt cái tôi vừa làm, thừa."* (C)
>
> **T3:** *"Bản đồ giúp tôi tìm đúng chỗ cần xem."* (A) · *"Hỏi lại nhiều lần hơn tôi chịu."* (B) · *"Nó biết từ đâu vậy?"* (C)

> **Cách đọc 3 câu cuối:** cả ba đều là **phản ứng về mặt kỹ thuật của AI**, không phải *"thích / không thích"*. T2 nói *"thừa"* — nghĩa là C **không tiết kiệm công** như nhóm giả định. Đây là dữ kiện quan trọng nhất của cả phiếu mẫu.

---

## 2. Mẫu — Tìm quy luật lặp

> Chọn pattern **lặp ở ≥2 tester**. Một tester có thể là ngoại lệ; ba tester lặp cùng một hành vi thì đó là dữ liệu.

### 2.1 Lặp lại ở ≥2 tester

**Pattern: thời điểm kích hoạt đến sau khi người học đã tự xử lý xong.**

| Tester | Chỉ báo C hiện lúc | Người học đã tự ra đáp án lúc | Chênh lệch |
|---|---|---|---|
| T1 | phút thứ 5 | phút thứ 2 | 3 phút |
| T2 | **không hiện** | phút thứ 3 | — |
| T3 | phút thứ 6 | phút thứ 4 | 2 phút |

**Đọc ra:** ngưỡng `3 lần trong 5 phút` là quá cao so với tốc độ lặp thật của người học. Tín hiệu mà C dựa vào **xảy ra sau** khi vòng lặp đã tự đóng. Lặp ở **3/3** tester.

### 2.2 Khác nhau giữa các tester

**Pattern: cùng một hành vi "dừng ở B lâu" nhưng ba nguyên nhân khác nhau.**

| Tester | Dừng ở B bao lâu | Nguyên nhân (từ ghi chép) |
|---|---|---|
| T1 | 3 phút | câu hỏi thứ hai khó trả lời → im lặng 40 giây rồi trả lời *"không biết"* |
| T2 | 5 phút | thích đọc lại câu trả lời của chính mình trước khi gửi |
| T3 | 2 phút | không tìm thấy nút thoát → phải hỏi facilitator |

**Đọc ra:** **không được gộp** thành *"B gây khó chịu"*. Ba hành vi trông giống nhau nhưng nguyên nhân hoàn toàn khác — và chỉ một cái là lỗi giao diện (T3).

### 2.3 Trái với kỳ vọng của nhóm

| Nhóm **kỳ vọng** | Thực tế |
|---|---|
| C tiết kiệm effort vì người học **không cần** tự nhận ra mình kẹt | C **không** tiết kiệm effort. Thời điểm ra chỉ báo đến sau khi người học đã tự xử lý xong (2.1), và T2 nói thẳng *"thừa"* |
| C chạm được Lớp 1 (không biết mình thiếu gì) | Không test được — không ai ở Lớp 1 trong 3 phiên, vì cả ba đều tự tua lại video trước (đã biết mình đang kẹt) |
| Ba option khác nhau về **cơ chế** | Đúng, nhưng khác biệt thật còn thêm một chiều: **thời điểm phát hiện**. A/B cần người học tự nhận ra; C thì không cần — nhưng C lại đến muộn |

---

## 3. Mẫu — Next Change

> Chỉ chọn **một** thay đổi, dựa trên hành vi lặp ở §2.1, không chọn vì nghe hợp lý.

> **Next Change: kích hoạt chỉ báo của C ở lần tua lại đầu tiên chưa kèm kết quả, thay vì lần thứ ba.**

| Câu hỏi | Trả lời |
|---|---|
| Dựa trên pattern lặp nào? | Thời điểm kích hoạt trễ — lặp ở **3/3** tester (§2.1) |
| Vì sao đúng một thay đổi này? | Đây là thay đổi **nhỏ nhất** giải quyết đúng pattern, và **giữ nguyên** tính chất thụ động của C → không phá phép so sánh với A và B |
| Tại sao không chọn cách khác? | Sửa câu chữ cho A cũng giúp, nhưng A **không** phải nơi phát sinh pattern này → chọn nó là sửa triệu chứng, không sửa nguyên nhân |
| Rủi ro của thay đổi này? | Chỉ báo hiện nhiều hơn → tăng rủi ro nhiễu. Cần đo **tỉ lệ bỏ qua** ở vòng sau |
| Làm sao biết là đã đúng? | Chỉ báo phải hiện **trước** thời điểm người học tự ra đáp án. Đo được, không phải cảm nhận |

---

## 4. Mẫu — Still Unproven

Viết tốt = nêu đúng thứ **không biết**, kèm lý do, và nói rõ cần gì mới biết được.

| # | Điều chưa biết | Vì sao chưa biết | Cần gì để biết |
|---|---|---|---|
| 1 | **Tester có chấp nhận bị AI quan sát thật không?** | Chỉ báo đến quá muộn nên không ai kịp có cảm giác bị theo dõi để bình luận. **Im lặng ở đây KHÔNG phải là đồng ý** | Kích hoạt chỉ báo sớm hơn rồi quan sát phản ứng; hoặc hỏi trực tiếp ở vòng sau |
| 2 | Ở A, nếu cây dẫn tới đúng đoạn ôn thì người học có tự ra được **nguyên nhân** không? | Fixture của A chỉ dẫn tới **kiến thức**, còn câu hỏi nhiệm vụ hỏi về **lý do kết hợp** | Sửa fixture A rồi test lại — việc của Trung, không phải kết luận của phiên này |
| 3 | Chỉ báo sớm hơn thì có bị **tắt** không? | Chưa có dữ liệu nào về phiên bản sớm hơn | Test lại sau khi sửa |
| 4 | Đây có phải vấn đề **lặp lại ở người khác** không? | Ba tester dùng **cùng một** bộ dữ liệu giả, cùng một tình huống | Cần người thật kẹt trên **tình huống thật của họ** |
| 5 | Có phải C **chỉ** hợp với người đã biết mình kẹt không? | Cả ba tester đều đã tự tua lại video trước — tức đều ở Lớp 2 | Cần một phiên với người **không** tự nhận ra mình kẹt |
| 6 | Đây có phải **pain lớn nhất** của học viên không? | Ba phiên với dữ liệu giả không chứng minh được nhu cầu thị trường | Nghiên cứu khác, ngoài phạm vi lab này |

### 4.1 Chỗ dễ sai — đừng viết thế này

| ❌ Sai | ✅ Đúng |
|---|---|
| *"Chưa test đủ"* | *"Chưa test được C2 vì không tester nào bác giả thuyết, nên **chưa biết** C xử lý sai ra sao"* |
| *"AI chưa chính xác"* | *"Không có tình huống nào để AI nói sai, nên **chưa biết**"*, không phải *"AI kém"* |
| *"Người dùng chấp nhận AI"* | *"Không ai phản đối trong 3 phiên, nhưng cả ba đều ở Lớp 2 và chỉ báo đến muộn — **chưa đủ cơ sở kết luận**"* |

---

## 5. Sáu câu tuyệt đối không được viết ở đâu

Đây là danh sách Cổng 5 cấm. Không có ngoại lệ *"vì mình thấy đúng là vậy"*.

| ❌ Không được viết | Vì sao |
|---|---|
| *"Pain A đã được xác nhận"* | Chưa note nào hỗ trợ trực tiếp — và nhóm đã sửa Pain A rồi |
| *"Học viên cần ôn kiến thức nền"* | Evidence nghiêng sang *thiếu cầu nối*, không phải *thiếu nền* |
| *"AI chẩn đoán đúng"* | Dữ liệu cứng — chỉ nói được *"trong tình huống này, nguyên nhân là…"* |
| *"Người học chấp nhận bị AI theo dõi"* | Một phiên trên dữ liệu giả **không** chứng minh điều đó |
| *"Giải pháp này thành công"* | Chưa test đủ, chưa có Next Change kiểm chứng được |
| *"3 người thích B"* | Đếm phiếu cảm xúc — đúng loại Cổng 5 cấm |

---

## 6. Khi bạn test thật xong

| # | Việc | File |
|---|---|---|
| 1 | Điền các ô `⏳` bằng quan sát thật của bạn, theo khuôn mẫu §1 | `prototype-feedback-note.md` |
| 2 | Điền ô T1 / T2 / T3 | `group-feedback-synthesis.md` §1–2 |
| 3 | Tìm pattern lặp theo §2, chọn **một** Next Change theo §3 | `group-feedback-synthesis.md` §3–4 |
| 4 | Viết Still Unproven theo §4 | `group-feedback-synthesis.md` §5 |
| 5 | Cập nhật mục 5 của `README.md` + bảng Cổng 4/5 ở §8 | `README.md` |

**Còn file này thì không sao** — nó nằm trong `NHOM/`, không thuộc 6 tệp nộp bài. Nhưng đừng bao giờ chép nội dung nó sang 6 tệp kia.
