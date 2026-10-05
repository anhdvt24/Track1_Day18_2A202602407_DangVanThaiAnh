# Group Feedback Synthesis — Nhóm AAA

> Điền **sau khi đủ ba Feedback Notes** từ ba tester ngoài nhóm. Mỗi tester dùng cả A/B/C với cùng task (xem phần "Chuẩn bị test" trong [prototype-feedback-note.md](prototype-feedback-note.md)).
> Gate 5 đạt khi: có 3 note · tách pattern / Next Change / Still Unproven · không nói quá evidence.

## 0. Pilot trước test — Option B (không tính là Feedback Note)

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

## 1. Ba Feedback Notes

| Tester | Facilitator | Thứ tự | Có relevant context? | Link note |
|---|---|---|---|---|
| T1 | Nguyễn Thị Bảo Trang | A → B → C | TODO | TODO |
| T2 | Đàm Quang Trung | B → C → A | TODO | [prototype-feedback-note.md](prototype-feedback-note.md) |
| T3 | Đặng Văn Thái Anh | C → A → B | TODO | TODO |

## 2. So sánh hành vi theo 5 điểm quan sát

Mỗi ô ghi **hành vi** (T1/T2/T3), không ghi "thích / không thích".

| Quan sát | A — Bản đồ tự kiểm tra | B — Đối thoại đồng chẩn đoán | C — AI kiểm tra artefact |
|---|---|---|---|
| First action | TODO | TODO | TODO |
| Hesitation | TODO | TODO | TODO |
| Evidence read / ignored | TODO | TODO | TODO |
| Correction / recovery | TODO | TODO | TODO |
| Help needed | TODO | TODO | TODO |
| Tìm ra nguyên nhân & quay lại bài? | TODO | TODO | TODO |

**Option được chọn và trade-off (lời tester):**
- T1: TODO
- T2: TODO
- T3: TODO

## 3. Pattern và khác biệt

| | Nội dung | Từ tester nào |
|---|---|---|
| **Lặp lại ở ≥2 tester** | TODO | TODO |
| **Khác nhau giữa các tester** | TODO | TODO |
| **Trái với kỳ vọng của nhóm** (đối chiếu "Evidence sẽ bác bỏ option này", design sheet §2.3) | TODO | TODO |

Câu hỏi cần trả lời từ dữ liệu, không đoán trước:
- A: tester có biết bắt đầu từ nhánh nào không?
- B: tester có chia sẻ dữ liệu ở câu 3 không? Trả lời "Không biết" bao nhiêu câu?
- C: tester có đồng ý cho đọc file không? Có mở bằng chứng trước khi duyệt không?

## 4. Next Change

> "Với Hypothesis Problem này, chúng tôi đã thử ba cách giải. Tester đã làm **TODO (hành vi cụ thể)**, vì vậy iteration tiếp theo chúng tôi sẽ **TODO (một thay đổi)**."

Chỉ chọn **một** thay đổi, dựa trên hành vi lặp lại ở mục 3.

## 5. Still Unproven

- Học viên có sẵn sàng chia sẻ file công việc cho AI không? (Option C và câu 3 của B dựa trên giả định này; 3 tester trong prototype không phải dữ liệu thật của họ.)
- Lớp 1 (không biết mình thiếu gì) hay Lớp 2 (biết nhưng không nối được) phổ biến hơn? Prototype chỉ test Lớp 2.
- Tần suất: các note Day 17 khác chủ đề, chưa có lặp lại cùng tình huống.
- Ba tester với dữ liệu cứng không chứng minh product value, độ chính xác của AI thật, hay nhu cầu thị trường.
- TODO: điều mới phát sinh từ test mà nhóm chưa trả lời được.
