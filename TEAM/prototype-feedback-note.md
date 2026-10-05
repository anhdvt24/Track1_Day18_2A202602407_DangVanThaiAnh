# Prototype Feedback Note — Nguyễn Thị Bảo Trang

> Nội dung dưới đây được chuyển từ phiên R1 đã ghi trong `Tester.md`. Không bổ sung observation hoặc quote ngoài nguồn này.

## 1. Thông tin phiên

| Mục | Nội dung |
|---|---|
| Tester/context | Phan Thị Khánh Linh; trải nghiệm tình huống PivotTable theo task chung |
| Ngày test |05/10/2026|
| Facilitator | Nguyễn Thị Bảo Trang |
| Thứ tự option | A → B → C |
| Prototype/link | [`prototype/index.html`](prototype/index.html) |
| Đồng ý tham gia | Chưa được ghi riêng trong `Tester.md` |

## 2. Ghi chép theo observation focus

| Observation | Note thực tế |
|---|---|
| First action ở A | Chọn “Xem lại thao tác trong video” và cho rằng mình có thể đã làm sai bước. |
| First action ở B | Trả lời lần lượt các câu hỏi dựa trên task, gồm dấu hiệu Count/Sum và thao tác đã thử. |
| First action ở C | Giữ phạm vi screenshot trước; chỉ cân nhắc nâng sang vùng trong sheet khi muốn xem preview. |
| Chỗ dừng, do dự hoặc hiểu sai | Dừng vài giây ở A sau khi không thấy dấu hiệu của nhánh thao tác; ở C dừng khi hệ thống yêu cầu nâng scope để mở preview. |
| Evidence được đọc hoặc bỏ qua | Đọc mô tả nhánh A, phần evidence hỗ trợ/chống lại ở B và các dấu hiệu ở C; dùng preview để so sánh trước/sau. |
| Cách tester sửa/lấy lại control | Dùng “Thử nhánh khác” ở A; dùng Undo sau khi apply trên bản sao ở C. |
| Help needed | Không cần facilitator gợi ý. |
| Option được chọn | B |
| Lý do và trade-off | Chọn B vì có thể cung cấp thông tin đầu vào mà không cấp quyền xem sheet. Đánh đổi là phải tự trả lời câu hỏi và kiểm tra đề xuất. |
| Evidence chống lại kỳ vọng của nhóm | Tester không chỉ nhìn badge xếp hạng ở B mà đọc evidence. Ở C, Undo được tìm thấy sau apply, nhưng chưa có bằng chứng rằng thông báo về Undo trước apply đã được chú ý. |

## 3. Exact quotes — theo `Tester.md`

> “Chắc mình làm sai bước trong video rồi.”

> “À, vấn đề có thể nằm ở dữ liệu chứ không phải cách tạo PivotTable.”

> “Mình muốn tự kiểm tra trước khi sửa.”

> “Undo có rồi nên mình yên tâm thử trên bản sao.”

## 4. Tách bốn lớp

### OBSERVED — Tester thực sự làm hoặc nói gì?

- Bắt đầu A bằng giả thuyết thao tác sai, loại trừ nhánh này rồi tự tìm “Thử nhánh khác”.
- Sau khi đọc dấu hiệu ở nhánh dữ liệu nguồn, tester chuyển giả thuyết từ lỗi thao tác sang vấn đề dữ liệu.
- Ở B, tester đọc evidence của giả thuyết được xếp hạng cao hơn trước khi chọn.
- Ở C, tester bắt đầu bằng phạm vi screenshot, dừng lại khi được yêu cầu nâng scope, sau đó đồng ý, xem preview, apply trên bản sao và dùng Undo.
- Tester hoàn thành A/B/C mà không cần facilitator hướng dẫn và chọn B ở phần so sánh cuối.

### INTERPRETED — Hành vi đó có thể có nghĩa gì?

- Nhánh sai của A không tạo đường cụt, nhưng khả năng tìm thấy recovery phụ thuộc vào việc tester đọc nút sau kết quả loại trừ.
- Evidence có thể giúp tester sửa phỏng đoán ban đầu thay vì chỉ lặp lại thao tác.
- B phù hợp với tester muốn nhận hỗ trợ nhưng vẫn tránh chia sẻ sheet; lựa chọn này phản ánh trade-off về quyền dữ liệu hơn là kết luận rằng B tốt nhất nói chung.
- Việc dừng ở bước nâng scope của C có thể là dấu hiệu tester đang cân nhắc quyền truy cập, không mặc nhiên là lỗi usability.

### DECIDED / NEXT CHANGE — Đề xuất gì sau phiên này?

- Giữ recovery “Thử nhánh khác” của A và kiểm tra thêm khả năng nhận ra nút này ở các tester khác.
- Ở C, làm rõ ngay tại điểm nâng scope: vì sao preview cần thêm dữ liệu, phần dữ liệu nào sẽ được đọc và lựa chọn nào vẫn khả dụng nếu user không đồng ý.
- Không biến lựa chọn B của một tester thành kết luận ưu tiên chung; đưa observation vào synthesis cùng hai phiên còn lại.

### STILL UNPROVEN — Chưa thể kết luận điều gì?

- Chưa thể kết luận B là option phù hợp cho đa số người học.
- Chưa biết tester có đồng ý chia sẻ vùng dữ liệu nếu đó là file công việc thật thay vì fixture mô phỏng.
- Chưa biết thông báo Undo trước apply có được nhìn thấy hoặc có làm tester yên tâm hơn hay không.
- Chưa kiểm chứng độ chính xác của chẩn đoán AI ngoài tình huống cố định này.

## 5. Reflection cá nhân của Trang

- Observation khác kỳ vọng: tester bắt đầu A bằng phỏng đoán thao tác sai nhưng vẫn tự phục hồi và chuyển được sang kiểm tra dữ liệu; nhánh sai không làm phiên bị bế tắc.
- Quyết định thiết kế của Option A cần xem lại: tăng độ dễ nhận ra của recovery sau khi một nhánh bị loại trừ, nhưng không làm lộ sẵn nhánh đúng.
- Facilitator guidance: theo ghi chép hiện có, tester không cần gợi ý; `Tester.md` chưa ghi nhận lần facilitator vô tình hướng dẫn.
- Điều mang vào Group Feedback Synthesis: lựa chọn cuối chịu ảnh hưởng bởi trade-off quyền dữ liệu; điểm dừng khi C yêu cầu nâng scope cần được so sánh với R2 và R3.
