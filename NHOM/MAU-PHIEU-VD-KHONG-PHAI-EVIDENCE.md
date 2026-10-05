# MẪU PHIẾU GHI CHÉP — VÍ DỤ ĐỂ THAM CHIẾU CÁCH VIẾT

> # ⛔ ĐÂY KHÔNG PHẢI EVIDENCE
>
> **Mọi nội dung dưới đây là dữ liệu do tôi (AI) tự nghĩ ra.** Không có người thật nào nói những câu ở đây. Không có phiên test nào được diễn ra để tạo ra tài liệu này.
>
> | Việc này được dùng để | Việc này KHÔNG được dùng để |
> |---|---|
> | Xem một phiếu ghi chép **đầy đủ, tốt** trông như thế nào | Nộp kèm bài |
> | Học cách viết quan sát đủ **cụ thể** | Điền vào ô T1 / T2 / T3 |
> | Học cách tìm **quy luật lặp** | Chọn Next Change |
> | Học cách viết **Still Unproven** đúng mức | Nói với reviewer rằng đã test |
> | So sánh với phiếu của bạn khi test xong | Thay thế 3 phiếu thật |
>
> **File này nằm trong `NHOM/` — không phải một trong 6 tệp nộp bài.**
>
> Nếu bạn điền nội dung này vào `prototype-feedback-note.md` hoặc `group-feedback-synthesis.md` rồi nộp lên → đó là **khai khống bằng chứng**, và toàn bộ 6 mục trong README mất giá trị. Tôi đã để nguyên các ô `⏳` ở 6 tệp kia, không đụng vào.

---

## 0. Ba nguyên tắc khiến một phiếu ghi chép có giá trị

| # | Nguyên tắc | Nói gì |
|---|---|---|
| 1 | **Ghi hành vi, không ghi cảm xúc** | *"Tua 3 vòng rồi đứng yên 8 giây"* — không phải *"thấy khó chịu"* |
| 2 | **Cụ thể đến mức người khác kiểm lại được** | Không ghi *"chậm"*, ghi *"mất 25 giây mới bấm được nút đầu tiên"* |
| 3 | **Phân biệt điều mình thấy với điều mình nghĩ** | Mọi dòng phải trả lời: *nếu sai thì tôi sẽ thấy gì?* |

---

## 1. Cách viết quan sát — yếu nhất và mạnh nhất

| ❌ Viết kiểu này | Vì sao không dùng được | ✅ Viết kiểu này |
|---|---|---|
| *"Tester thấy option C thú vị, dùng AI tiện lợi hơn."* | Là **kết luận của tôi**, không phải hành vi. Không kiểm chứng được. Giống hệt thứ Cổng 5 cấm | *"Chỉ báo hiện lúc 04:12. Tester bấm sau 2 giây, đọc hết 4 giây, không đóng. Hỏi 'nó biết từ đâu vậy' — đây là câu hỏi đầu tiên trong cả phiên."* |
| *"Tester phản ứng tốt với C."* | "Tốt" nghĩa là gì? Ai đo? | *"Không có phản ứng phòng vệ nào trong 6 phút: không nói 'theo dõi tôi à', không tắt theo dõi, không hỏi lại."* |
| *"AI nói đúng."* | Dùng dữ liệu cứng thì "đúng" là chuyện đã biết trước | *"Câu mở nói đúng mốc 02:00 — mốc này tôi đã thấy tester tua trước đó 3 vòng. Nhưng tester không mở nhật ký để kiểm lại."* |
| *"Tester bị kẹt ở option A."* | Kẹt thế nào? Mất bao lâu? | *"Hoàn tất cả 6 nhánh trong 4 phút 20 giây, đọc hết phần ôn ở 3 nhánh, rồi vẫn trả lời sai câu hỏi nhiệm vụ: nói 'kết hợp để tăng độ chính xác' thay vì 'vì BM25 bỏ sót từ hiếm'."* |
| *"Cả nhóm thích B."* | Đếm phiếu kiểu *"3 người thích B"* — đúng loại Cổng 5 cấm | *"Cả ba tester đều dừng ở B lâu hơn dự kiến, nhưng vì lý do khác nhau: một người vì câu hỏi khó, một người vì thích đọc lại câu trả lời, một người vì không biết thoát."* |

---

## 2. VÍ DỤ — Một phiên đã điền (giả lập)

Phiếu thật của bạn nằm ở `prototype-feedback-note.md`. Đây là bản mẫu để so sánh.

**Tester:** T3 (mã giả) · **Facilitator:** Đặng Văn Thái Anh · **Thứ tự:** C → A → B
**Màn hình:** dữ liệu giả, đã nói trước · **Phiên bị gián đoạn:** có, 1 lần khoảng 40 giây

### 2.1 Quan sát ở Option C

| Mốc | Ghi chép mẫu |
|---|---|
| Chỉ báo có hiện không? | Có, một lần, lúc 04:12 (khoảng 6 phút sau khi bắt đầu) |
| Tester có bấm không? | Có, sau 2 giây |
| Bấm xong có đóng sớm không? | Không. Đọc hết, 4 giây, không cuộn lại |
| Câu mở phản ứng thế nào? | Im 2 giây, rồi hỏi *"nó biết từ đâu vậy?"* — **câu hỏi đầu tiên trong cả phiên**, và là câu duy nhất hỏi về AI |
| Có nói thấy bị theo dõi không? | **Không.** Không có câu nào kiểu vậy trong 6 phút |
| Phản ứng khi AI nói sai? | **Không xảy ra** — chỉ báo nói đúng mốc nên không có tình huống này |
| Bỏ qua một lần thì lần sau tự mở lại? | **Không kiểm được** — chỉ báo chỉ hiện một lần rồi hết mẫu lặp |
| Có tự đi tìm nguồn ngoài? | Không. Đi thẳng sang slide 13 tự đọc, không mở Google/ChatGPT |
| Có tự kết luận được không? | Có — và **trước khi** AI nói thêm gì |

### 2.2 Quan sát ở Option A

| Mốc | Ghi chép mẫu |
|---|---|
| First action | Đọc task 25 giây, rồi bấm nút đầu tiên ngay |
| Có đứng yên không biết bấm gì? | Không |
| Có biết bắt đầu từ nhánh nào? | Có — chọn đúng nhánh theo triệu chứng ngay |
| Có tự tua lại video tìm không? | Có, 2 lần, nhưng tự tìm thành công — không cần bản đồ |
| Chạy hết cây vẫn không ra nguyên nhân? | **Có.** Đủ 6 nhánh, đọc 3 phần ôn, vẫn không trả lời được câu hỏi nhiệm vụ |
| Sau 2 nhánh chưa ra → bỏ cuộc? | Không. Kiên trì hết 6 nhánh |
| Evidence đọc hay bỏ qua? | Đọc 3/6, bỏ qua 3 vì "giống nhau" |
| Dùng nút "không biết chọn cái nào"? | Không dùng |

### 2.3 Quan sát ở Option B

| Mốc | Ghi chép mẫu |
|---|---|
| First action | Bấm nút ngay, không đọc kỹ |
| Trả lời "không biết" bao nhiêu câu? | 1/3 câu |
| Có nói "2 cái giống nhau"? | Không |
| Có tự kiểm trước khi nghe AI? | Có — tua video **trước** khi đọc tóm tắt evidence |
| Đọc tóm tắt evidence hay bỏ qua? | Đọc, và **đọc lại dòng "AI dựa vào"** |
| Có sửa câu trả lời? | Có, 1 lần, sau khi nghe tóm tắt |
| Đọc xong vẫn chưa ra nguyên nhân? | Có, vẫn không trả lời được câu hỏi nhiệm vụ |

### 2.4 Sự kiện bất ngờ

> Chỗ này thường đáng giá nhất, vì không ai đoán trước được.

| # | Sự kiện | Ở option nào |
|---|---|---|
| 1 | Chỉ báo của C hiện **sau khi** tester đã tự tìm ra đáp án — hỏi *"nó biết từ đâu vậy"* nhưng kế hoạch đã xong | C |
| 2 | Ở A, tester chạy hết cây rồi vẫn trả lời sai, dù đọc phần ôn | A |
| 3 | Ở B, tester tua video **trước** khi nghe AI — tự kiểm chứng trước khi tin | B |

**Tester hỏi gì khiến tôi phải không trả lời:**

> *"Chỗ này là ở slide nào vậy?"* (ở B) → tôi ghi vào đây, không chỉ. Vì câu này cho biết tester đang mất dấu vị trí trong bài — đó là dữ liệu, không phải sự cố.

---

## 3. VÍ DỤ — Tìm quy luật lặp

Đây là chỗ dễ làm sai nhất. Ba mẫu viết dưới đây **khác nhau về chất lượng**, mỗi mẫu nêu rõ căn cứ.

| Loại | Nội dung mẫu | Căn cứ |
|---|---|---|
| ✅ **Lặp ở ≥2 tester** | **Thời điểm kích hoạt quá muộn.** Cả ba tester đều đã tự tua lại video **trước khi** bất kỳ trợ giúp nào xuất hiện — khoảng 40–90 giây. Tín hiệu mà C dựa vào chỉ xuất hiện **sau** khi vòng lặp đã đóng | T1: chỉ báo hiện ở phút thứ 5, tester đã tự tìm ra ở phút thứ 2. T2: không có chỉ báo nào, tester tự xử lý xong ở phút thứ 3. T3: chỉ báo hiện phút thứ 6, đáp án đã có từ phút thứ 4 |
| ✅ **Khác nhau giữa các tester** | Lý do dừng ở B lâu **không giống nhau**: T1 vì câu hỏi thứ hai khó trả lời, T2 vì thích đọc lại câu trả lời của chính mình, T3 vì không tìm thấy nút thoát. Cùng một hành vi, ba nguyên nhân khác → **không được gộp thành một kết luận** | Ghi chép từng phiên |
| ✅ **Trái với kỳ vọng của nhóm** | Nhóm **kỳ vọng C thắng về effort** vì không cần người học tự nhận ra mình kẹt. Thực tế: C **không** tiết kiệm effort, vì thời điểm ra chỉ báo đến sau khi người học đã tự xử lý xong. C chỉ thắng ở A, không thắng ở B | So với giả định đã ghi trước ở `three-option-design-sheet.md` |

**Sai cách — đừng viết thế này:**

| ❌ Sai | Vì sao sai |
|---|---|
| *"Cả 3 người thích B"* | Đếm phiếu cảm xúc — đúng loại Cổng 5 cấm |
| *"B là option tốt nhất"* | Chưa chốt tiêu chí tốt là gì. Theo tiêu chí nào? |
| *"A có vẻ không hiệu quả"* | Mơ hồ. Không hiệu quả ở khía nào, so với gì? |

---

## 4. VÍ DỤ — Next Change

> Chỉ chọn **một** thay đổi, dựa trên hành vi **lặp ở mục 3**, không chọn vì nghe hợp lý.

**Next Change (mẫu):**

> **Kích hoạt chỉ báo của C ở lần tua lại đầu tiên chưa kèm kết quả, thay vì lần thứ ba.**

**Vì sao chọn thay đổi này:**

| Câu hỏi | Trả lời |
|---|---|
| Dựa trên hành vi lặp nào? | Thời điểm kích hoạt quá muộn — lặp ở **cả 3/3** tester |
| Vì sao đúng một thay đổi này? | Nó là thay đổi nhỏ nhất giải quyết đúng pattern lặp, và **giữ nguyên** tính chất thụ động của C → không phá phép so sánh với A và B |
| Tại sao không chọn cách khác? | Sửa tiếng Việt cho option A cũng giúp, nhưng A **không** phải nơi phát sinh pattern lặp này — chọn nó là sửa triệu chứng |
| Rủi ro của thay đổi này? | Chỉ báo sẽ hiện nhiều hơn → tăng rủi ro "nhiễu". Cần đo tỉ lệ bỏ qua ở vòng sau |

---

## 5. VÍ DỤ — Still Unproven

Viết tốt = nêu đúng thứ mình **không biết**, kèm lý do, và nói rõ cần gì mới biết được.

| # | Điều chưa biết | Vì sao chưa biết | Cần gì để biết |
|---|---|---|---|
| 1 | **Tester có chấp nhận bị AI quan sát thật không?** | Không ai hỏi được câu này — chỉ báo đến quá muộn, nên không ai kịp có cảm giác bị theo dõi để bình luận. **Im lặng ở đây không phải là đồng ý** | Hỏi trực tiếp ở vòng sau, hoặc kích hoạt chỉ báo sớm hơn rồi quan sát phản ứng |
| 2 | Ở A, nếu cây dẫn tới đúng đoạn ôn thì người học có tự ra được nguyên nhân không? | Fixture của A chỉ dẫn tới **kiến thức**, trong khi câu hỏi nhiệm vụ hỏi về **lý do** | Sửa fixture cho A rồi test lại — nhưng đó là việc của Trung, không phải kết luận của phiên này |
| 3 | Chỉ báo sớm hơn thì có bị tắt không? | Chưa có dữ liệu nào về phiên bản sớm | Test lại sau khi sửa |
| 4 | Đây có phải vấn đề lặp lại ở người khác không? | Ba tester dùng **cùng một** bộ dữ liệu giả, cùng một tình huống | Cần người thật kẹt trên **tình huống thật của họ** |

**Chỗ dễ sai — đừng viết:**

| ❌ Sai | ✅ Đúng |
|---|---|
| *"Chưa test đủ"* | *"Chưa test được X vì Y, cần Z mới biết"* |
| *"AI chưa chính xác"* | *"Chưa có tình huống nào trong 3 phiên để AI nói sai, nên **chưa biết** C xử lý sai ra sao"* |

---

## 6. Năm câu tuyệt đối không được viết ở đâu

Đây là danh sách Cổng 5 cấm. Không có ngoại lệ "vì mình thấy đúng là vậy".

| ❌ Không được viết | Vì sao |
|---|---|
| *"Pain A đã được xác nhận"* | Chưa note nào hỗ trợ trực tiếp — và nhóm đã sửa Pain A rồi |
| *"Học viên cần ôn kiến thức nền"* | Evidence nghiêng sang *thiếu cầu nối*, không phải *thiếu nền* |
| *"AI chẩn đoán đúng"* | Dữ liệu cứng — chỉ nói được *"trong tình huống này, nguyên nhân là…"* |
| *"Người học chấp nhận bị AI theo dõi"* | Một phiên trên dữ liệu giả **không** chứng minh điều đó |
| *"Giải pháp này thành công"* | Chưa test, chưa có Next Change, chưa biết giới hạn |

---

## 7. Khi bạn test thật xong

Sau 3 phiên, bạn làm đúng 3 việc:

1. **Mở `prototype-feedback-note.md`** → điền các ô `⏳` bằng quan sát thật của bạn, theo khuôn mẫu ở mục 2.
2. **Mở `group-feedback-synthesis.md`** → điền ô T1/T2/T3, rồi tìm quy luật lặp ở mục 3, chọn **một** Next Change ở mục 4.
3. **Xoá dòng cảnh báo ở đầu file này** khi không cần dùng mẫu nữa.

**Còn file này thì không sao** — nó nằm trong `NHOM/`, không thuộc 6 tệp nộp bài. Nhưng đừng bao giờ chép nội dung của nó sang 6 tệp kia.
