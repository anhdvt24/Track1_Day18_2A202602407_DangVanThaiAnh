# AI Support Log

> **Đặng Văn Thái Anh — MHV 2A202602407 · Nhóm AAA · Case A (AI Tutor: Diagnostic Refresher)**
> Bản ghi trung thực trong suốt Day 18: **AI đã giúp gì**, **AI sai ở đâu**, và **tôi tự sửa thế nào**.

---

## 0. Nguyên tắc tôi giữ khi dùng AI

| # | Nguyên tắc |
|---|---|
| 1 | **Không để AI tạo feedback, quote hoặc observation.** Phần feedback để trống có khung — điền bằng quan sát thật của phiên mình facilitate |
| 2 | **Mọi quote từ note phải truy vết được** về file nguồn kèm timestamp |
| 3 | **AI output là giả thuyết, không phải fact.** Giữ lại các cách giải thích cạnh tranh thay vì chọn một cái ngay |
| 4 | **Ghi cả phần AI sai.** Một bài nộp chỉ khoe AI giúp gì là chưa đủ trung thực |
| 5 | **Không trình bày ba option như ngang hàng** nếu chưa nói rõ C dựa trên giả định chưa có chứng cứ |
| 6 | **Không để AI quyết định thay.** Tài liệu AI soạn → cả nhóm chốt trong buổi họp |

---

## 1. AI đã giúp gì

| # | Việc | Ở đâu | Ghi chú |
|---|---|---|---|
| 1 | **Hệ thống hóa tài liệu Day 17** thành Evidence Snapshot; tách rõ **observation** khỏi **interpretation của nhóm** | [`README.md`](README.md) §2.1–§2.3 | Việc tách hai tầng này tôi làm lại nhiều lần — AI làm nhanh hơn nhưng vẫn phải tôi kiểm lại từng dòng |
| 2 | **Đọc lại chuỗi hành vi trong PN1** và phát hiện mẫu lặp *"xem hiểu → tự làm thì kẹt"* xuyên hai episode | [`README.md`](README.md) §4.4 | Mẫu lặp này là một trong hai căn cứ để đổi Pain A → *thiếu cầu nối* |
| 3 | **Sinh ba cơ chế Human–AI khác nhau** từ một câu hỏi, rồi tôi lọc bỏ các hướng chỉ khác bề mặt | [`README.md`](README.md) §3.1, §3.3 | AI sinh nhiều hơn ba — phần lọc là việc của tôi |
| 4 | **Định dạng lại** tài liệu Chặng 1–3 thành bảng quyết định để cả ba chốt được trong một buổi họp | `NHOM/Day18-chot-chung.md` | Tài liệu tăng từ ~24KB lên ~77KB nhưng việc đọc lại giảm rõ rệt |
| 5 | **Tìm ra bất đối xứng cốt lõi** giữa A/B và C — từ đó sinh ra ba quy tắc C1/C2/C3 | [`README.md`](README.md) §3.3 | Đây là phần tôi coi là **giá trị lớn nhất** AI đem lại trong ngày 18 |
| 6 | **Sinh các trạng thái lỗi** trước khi build, để mỗi option chọn ra một trạng thái sinh nhiều evidence nhất | [`README.md`](README.md) §5.3 | Không chọn theo thứ tự — chọn theo *"cái nào sinh ra nhiều observation nhất"* |
| 7 | **Review code Option C**, phát hiện lỗi hard-code mốc thời gian trong câu mở | [`README.md`](README.md) §5.2 | Lỗi này nếu giữ nguyên sẽ phá đúng C1 |
| 8 | **Định dạng và kiểm tra tính nhất quán** của bảy file đầu ra | Toàn bài | Bảy file dùng chung một bộ quy ước đặt tên — AI giữ được nhất quán khi tôi yêu cầu rõ |

---

## 2. AI sai / hời hợt ở đâu

| # | Chỗ AI đi sai | Mức | Vì sao là lỗi |
|---|---|:---:|---|
| 1 | **Đi từ solution sang giả định "thiếu kiến thức nền là nguyên nhân"** quá nhanh | 🔴 Nặng | Không note nào hỗ trợ trực tiếp. Đây là Pain A của Day 17, đã bị PN1 và PN3 làm nghiêng |
| 2 | **Diễn đạt pain nghe hợp lý nhưng chưa có evidence từ người học** | 🔴 Nặng | Tạo cảm giác *"đã hiểu vấn đề"* trong khi mới chỉ đọc một giả thuyết |
| 3 | **Đề xuất option C trông hấp dẫn, và dễ bị kể hay hơn thực tế** | 🔴 Nặng | C dựa trên **một giả định chưa có chứng cứ nào**. Trình bày ngang hàng mà không kèm giới hạn → C thắng *vì lập luận*, không phải vì dữ liệu |
| 4 | **Sinh câu hỏi interview có nguy cơ leading** | 🟡 Trung bình | Q12 đưa sẵn hai phương án → người học trả lời *"chủ yếu là thiếu kiến thức nền"* vì được dẫn |
| 5 | **Gợi ý cứng mốc thời gian trong câu mở của C** | 🟡 Trung bình | Nếu giữ, AI sẽ nói *"bạn đã quay lại 04:20"* cả khi người học chỉ quay lại 02:00 → phá C1 |
| 6 | **Nhầm output của solution với outcome của người học** | 🟡 Trung bình | *"AI đưa ra phần ôn"* là output. *"Người học quay lại đúng bài và làm tiếp phần kế tiếp"* mới là outcome |
| 7 | **Sinh nhiều "option" chỉ khác ở bề mặt** | 🔴 Nặng | Ba mức độ giải thích, ba nguồn, ba layout — khác nội dung/hiệu suất, **không khác cách chia việc**. Phá luật 2 |
| 8 | **Viết bảo đảm giả** cho hệ thống — ví dụ *"AI sẽ tìm ra nguyên nhân"* | 🔴 Nặng | Hứa quá; xoá khả năng tự kiểm. AI **không biết** người học đang nghĩ gì |
| 9 | **Có xu hướng viết cho đủ số lượng** | 🟡 Trung bình | Bảy quy tắc chung, mười trạng thái lỗi, mười giới hạn — build hết thì hết 80 phút |
| 10 | **Sinh code nghe đúng nhưng không chạy** — `agent-nudge.js` khai báo `T.windowMs` và `winStart` rồi **không dùng**, trong khi câu mở lại nói *"trong khoảng 5 phút"* | 🔴 Nặng | Đây là **AI bịa khoảng thời gian** → phá đúng C1. Xem [`group-feedback-synthesis.md`](group-feedback-synthesis.md) §0b mục 2 |
| 11 | **Bỏ qua thứ tự thực thi DOM** — đề xuất gắn toàn bộ logic vào `DOMContentLoaded` mà không kiểm tra file đó được nhúng bằng DOM injection | 🔴 Nặng | Prototype **trống hoàn toàn**, không mở được. Xem [`group-feedback-synthesis.md`](group-feedback-synthesis.md) §0b mục 1 |
| 12 | **Câu mở nói về HIỆN TẠI** (*"vẫn đang ở slide 12"*) trong khi DOM render một lần và không cập nhật | 🔴 Nặng | Người học đi khác là câu đó thành **sai thật** → họ không kiểm chứng được → đúng cái C1 cấm. Xem §0b mục 4 |
| 13 | **Mô phỏng bằng script, tự kết luận từ hành vi mình tự tạo** | 🟡 Trung bình | Lần đầu script bấm `nextSlide` 2 lần rồi kết luận *"AI nói sai"* — hoá ra **lỗi của script**, không phải lỗi sản phẩm. Phải tách lớp *"đo sai"* khỏi *"sản phẩm sai"* trước khi báo cáo |
| 14 | **Viết logic đúng rồi bỏ không gọi tới** — `self-check.js` có sẵn hàm `renderConclude()` nhưng không nối vào UI, và Decision Table hứa AI *"giải thích một bước khi được gọi"* trong khi A **không có nút** để gọi | 🔴 Nặng | Đây không phải lỗi kỹ thuật mà là lỗi **Cổng 3**: A không cho người học tự viết kết luận, và tài liệu hứa một việc mà prototype không làm. Thêm nút cho A chỉ để *"cho giống B"* thì phá luật 2 — phải sửa vì **Decision Table đã hứa**, không phải vì cho giống |

---

## 3. Tôi tự sửa thế nào

| Sửa ở đâu | Cách tôi sửa | Nhớ lại vì sao |
|---|---|---|
| **Hypothesis** | Bỏ "thiếu kiến thức nền"; đổi thành *"không biết mình **đã biết gì** hoặc **đang thiếu gì** liên quan tới **đúng triệu chứng này"* | Không note nào hỗ trợ Pain A. Barrier là **khoảng cách giữa điều đã biết và lúc dùng** |
| **Evidence** | Ghi rõ Q12 **bị dẫn dắt** và **không dùng** làm evidence | Giữ cả giá trị lẫn giới hạn, thay vì chỉ giữ phần thuận lợi |
| **Tổng hợp evidence** | Bỏ dòng *"Pain A: mạnh"* mà Day 17 đã ghi | Học viên thoát kẹt nhờ **ví dụ thực tế**, không nhờ ôn nền |
| **Ba option** | Lọc bỏ mọi hướng chỉ khác bề mặt; chỉ giữ ba cách **chia việc** khác nhau | Luật 2 — option phải khác về *mechanism*, không về *wording* |
| **Câu mở của C** | Ghi **mốc thật quan sát được** + số đếm + mốc thời gian, thay vì câu chữ viết sẵn | C1 là ranh giới giữa "AI giúp" và "AI bịa". Sai một câu là mất niềm tin ngay |
| **Code Option C** | Bỏ hard-code mốc; tính mốc gần nhất từ hành động thật | Nếu không, AI nói sai hành vi → tester không có cách kiểm chứng → C hỏng |
| **Đường thoát của C** | Thêm nút **"Xem lại thao tác của tôi"** để người học tự mở lại | C3 mà không có đường mở lại thì *"từ chối"* biến thành *"bị khoá"* |
| **Câu dẫn cho tester** | Đổi từ *"AI sẽ tìm ra nguyên nhân"* sang *"AI giúp nhận ra cần kiểm tra gì, không thay bạn kết luận"* | Trung thực với giới hạn |
| **Phần feedback** | **Để trống có khung** thay vì điền sẵn | Bài nộp chỉ nhận **observation thật**. AI tạo sẵn observation là bịa evidence |
| **Cách trình bày C** | Nói thẳng C **không test được** phần quan trọng nhất của nó, và nó dựa trên **một giả định chưa có chứng cứ** | C hấp dẫn hơn khi sai. Giấu phần này là để C thắng vì lập luận |
| **Tài liệu nhóm** | Thêm mục **giới hạn công khai** ở nói trước những gì prototype không đo được | Reviewer cần biết cái gì **không** có bằng chứng, không chỉ cái gì có |
| **Prototype chưa build** | Ban đầu ghi rõ A và B **chưa có** thay vì để liên kết chết — vì link tới option không chạy là thông tin sai. Sau khi tôi dựng xong A và B thì **cập nhật lại cả hai chiều**: bỏ cảnh báo *"chưa build"*, đồng thời **không** bỏ cảnh báo *"chưa có link công khai"* | Chi tiết build đã đúng không có nghĩa Cổng 4 đã đóng. Hai loại "chưa" này khác nhau và phải báo riêng |
| **Vế Situation của Hypothesis** | Đổi từ *"kết quả trên dữ liệu thật khác với hướng dẫn"* (câu chữ scenario Excel) sang *"bài học khẳng định một điều nhưng không đưa ví dụ"*, **và ghi lại lý do** ngay cạnh chỗ sửa | Không giấu việc sửa. Giữ vế cũ thì ba option không giải đúng bài toán → vi phạm luật 1, không phải lỗi chính tả |
| **Ô H6 (phản ứng với việc bị quan sát)** ở A và B | Ghi *"không có cơ chế quan sát trong option này"* thay vì để trống hoặc điền 0 | Ô trống đó là **giới hạn của option**, không phải người dùng không quan tâm. Để trống dễ bị đọc thành "C thắng về quyền riêng tư" — mà không có dữ liệu nào cho kết luận đó |
| **Thứ tự DOM** | Kiểm tra `document.readyState` trước khi gắn listener, thay vì chỉ `addEventListener('DOMContentLoaded')` | File option được nhúng bằng DOM injection nên chạy **sau** sự kiện đó. Loại lỗi **chỉ lộ ra khi mở thật** |
| **Cửa sổ 5 phút** | Lọc mẫu theo `Date.now() - T.windowMs` thay vì đếm toàn bộ phiên | Câu mở nói gì thì phải **kiểm tra đúng cái đó**. Nói *"5 phút"* mà không lọc thì AI đang bịa |
| **Biến chết** | Bỏ `winStart` và `T.copy` thay vì để lại trong code | Biến được gán nhưng không đọc là dấu hiệu **phần đó chưa nghĩ xong** → gây hiểu nhầm cho người đọc tiếp theo |
| **Câu mở viết về hiện tại** | Bỏ vế *"vẫn đang ở slide 12"* khỏi chỉ báo; chỉ nói về **quá khứ** đo được. Câu hỏi ở màn hình hội thoại mới hỏi lại đúng trí nhớ hiện tại | Câu ghi một lần và không re-render → nói về hiện tại là **sai thật** ngay khi người học đi khác |
| **Báo cáo mô phỏng** | Mỗi dòng gắn nhãn **FACT / HYP / UNKN** | Đo được trên hệ thống ≠ biết về con người. Trộn hai tầng là tự bịa evidence |
| **Kết luận sai của script** | Kiểm chéo trước khi báo cáo; phát hiện 1 kết luận là **lỗi của chính script** | Dễ nhất là báo lỗi sản phẩm khi lỗi thật nằm ở cách đo |

---

## 4. Những chỗ tôi **không** để AI quyết

| Việc | Vì sao phải tự quyết |
|---|---|
| **Chọn Hypothesis Problem cuối cùng** | Đây là **căn cứ** cho cả bài. AI gợi ý, nhóm chốt |
| **Chọn phạm vi theo dõi của C** | Là quyết định **chấp nhận rủi ro** — thu hẹp về khung bài hay toàn màn hình. Cả ba cùng quyết |
| **Câu chữ cuối cùng trong prototype** | Chữ trên nút phải khớp với **vật thể người học vừa thấy**. Sửa lại bằng mắt, không sửa bằng AI |
| **Điền observation sau khi test** | **Không dùng AI.** Đây là phần bằng chứng cao nhất |
| **Kết luận Next Change** | Chọn **một** thay đổi dựa trên hành vi lặp — không chọn vì nghe hợp lý |

---

## 5. Đánh giá tổng

| Câu hỏi | Trả lời của tôi |
|---|---|
| AI có làm thay được phần **suy luận** không? | **Không.** Vì sao coi Pain A là bottleneck là câu hỏi về evidence, không phải về logic |
| AI có làm thay được phần **định dạng và hệ thống hóa** không? | **Có**, và đây là phần tiết kiệm thời gian nhiều nhất |
| AI có làm thay được phần **thiết kế cơ chế Human–AI** không? | **Có một phần.** AI gợi ý bất đối xứng A/B với C; tôi phải tự quyết đó có đủ làm nền cho C1/C2/C3 không |
| Phần nào của tôi **không thể** thay bằng AI? | Phỏng vấn thật · facilitation thật · quan sát thật · **quyết định chịu rủi ro** · câu chữ phải khớp với thứ người dùng vừa thấy |

---

**Xem thêm:** [`README.md`](README.md) §6 — bản tóm tắt trong README
