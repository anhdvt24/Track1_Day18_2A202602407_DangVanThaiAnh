# NHOM/ — Tài liệu chung của nhóm AAA

> **Mục đích thư mục này:** lưu tài liệu làm việc chung của ba thành viên. **Không phải** nơi để nộp bài.
> **Bài nộp cá nhân nằm ở thư mục gốc**, đúng 6 tệp phẳng bắt buộc:
> [`README.md`](../README.md) · [`three-option-design-sheet.md`](../three-option-design-sheet.md) · [`prototype-link.md`](../prototype-link.md) · [`prototype-feedback-note.md`](../prototype-feedback-note.md) · [`group-feedback-synthesis.md`](../group-feedback-synthesis.md) · [`ai-support-log.md`](../ai-support-log.md)

---

## ⚠️ Đọc trước: thư mục này chứa **hai scenario khác nhau**

Đây là điểm dễ gây mất điểm nhất của bài nộp, nên ghi rõ ngay từ đầu.

| | **Bài nộp (scenario RAG)** | **Tài liệu cũ trong `NHOM/` (scenario Excel)** |
|---|---|---|
| **Bài toán** | Học viên kẹt ở **RAG / Hybrid Retrieval (RRF)** — slide 12 khẳng định *"mỗi phương pháp có điểm mạnh riêng nên kết hợp"* nhưng **không kèm ví dụ** | Người dùng thấy **PivotTable hiện Count thay vì Sum** trong bảng Excel |
| **Prototype** | `prototype/` — dùng chung context RAG | Bản Excel đã dừng, **không còn trong `prototype/`** |
| **Được dùng làm bằng chứng?** | ✅ Có — đây là scenario của bài nộp | ❌ **Không** — nếu trộn vào sẽ thành hai bài toán trong một bài nộp → vi phạm **Cổng 1** (*"tự ý đổi đề bài"*) và **luật 1** |
| **Tài liệu ở đây** | `three-option-design-sheet.md` (bản RAG, ở thư mục gốc) | `Day18-chot-chung.md` · `Chang_1_3.md` |

**Nguyên tắc áp dụng:** tài liệu Excel **vẫn được giữ lại** vì đó là công việc thật của nhóm và ghi lại một bài học thiết kế có giá trị. Nhưng khi viết bài nộp ở thư mục gốc, chỉ trích từ đây **những gì không phụ thuộc scenario** (quy tắc test, bài học về recovery, mẫu phiếu ghi chép).

---

## Danh mục tệp

| Tệp | Nội dung | Scenario | Ghi chú |
|---|---|:---:|---|
| [`Day18-chot-chung.md`](Day18-chot-chung.md) | Bản chốt Chặng 1–3 của nhóm: Evidence Snapshot · ba Solution Option · Human–AI Decision Table | 🔶 **Excel** | ⚠️ §1.8 viết Situation là *"kết quả trên dữ liệu thật khác với hướng dẫn"* — câu chữ này **không dùng** ở bài RAG. Lý do ghi ở [`README.md`](../README.md) §2 |
| [`Chang_1_3.md`](Chang_1_3.md) | Ghi chú Chặng 1–3 của **Nguyễn Thị Bảo Trang**, kèm timestamp evidence PN3 | 🔶 **Excel** | ⚠️ MHV ghi trong file là `2A202602580`, còn thư mục bài nộp là `2A202602407` — đã ghi nhận, không sửa tự ý vì là tài liệu của đồng đội |
| [`MAU-PHIEU-VD-KHONG-PHAI-EVIDENCE.md`](MAU-PHIEU-VD-KHONG-PHAI-EVIDENCE.md) | Mẫu phiếu ghi chép phiên test — **ví dụ về thứ KHÔNG phải evidence** | ⚪ Trung tính | Dùng để nhắc nhở: chỉ ghi **hành vi quan sát được**, không ghi *"thích / không thích"* |
| [`MAU-TONG-HOP-VD-KHONG-PHAI-EVIDENCE.md`](MAU-TONG-HOP-VD-KHONG-PHAI-EVIDENCE.md) | Mẫu bản tổng hợp — **ví dụ về thứ KHÔNG phải evidence** | ⚪ Trung tính | Nhắc: phải tách *quy luật lặp* / *khác biệt giữa người* / *trái kỳ vọng nhóm*, và nêu rõ **Still Unproven** |
| `three-option-design-sheet.md` | ⚠️ **File này ở thư mục gốc**, không ở `NHOM/` | ✅ **RAG** | Đây là bản design sheet **chính thức** của bài nộp |

---

## Bốn việc nhóm còn treo trong `Day18-chot-chung.md`

Tôi giữ lại danh sách này vì nó là việc thật chưa xong, không phải để tỏ ra đã làm hết. Chi tiết ở [`Day18-chot-chung.md`](Day18-chot-chung.md) §"TRƯỚC KHI HỌP".

| # | Việc | Trạng thái |
|---|---|---|
| 1 | Gửi file evidence **PN3** vào folder — nội dung có trong `Chang_1_3.md` nhưng **không có file note gốc** → reviewer không kiểm chứng được trích dẫn kèm timestamp | ⏳ |
| 2 | Sửa MHV sai trong `Chang_1_3.md` (`2A202602580` → `2A202602407`) | ⏳ |
| 3 | Chốt **một** file design sheet chính thức | ✅ Đã chốt — dùng bản RAG ở thư mục gốc |
| 4 | Đối chiếu các quote từ **PN1** với audio `interview/VinUniversity.m4a` | ⏳ |

---

## Nguyên tắc khi dùng lại tài liệu trong thư mục này

| ✅ Được | ❌ Không được |
|---|---|
| Trích **nguyên tắc** không phụ thuộc scenario (quy tắc khi test, tiêu chí recovery, mẫu phiếu) | Trích **dữ liệu test** của scenario Excel vào bảng so sánh của bài RAG |
| Ghi *"đây là tài liệu nhóm, thuộc scenario khác"* khi dùng làm minh hoạ | Im lặng dùng như thể cùng bài toán |
| Giữ nguyên file gốc của đồng đội | Tự sửa nội dung tài liệu của người khác mà không ghi lại |
| Dẫn lại bằng đường dẫn `../` về bài nộp | Tạo bản sao của tài liệu nhóm vào thư mục gốc |

---

**Xem thêm:** [`README.md`](../README.md) · [`group-feedback-synthesis.md`](../group-feedback-synthesis.md) · [`TEAM/`](../TEAM/) — `TEAM/` cũng là tài liệu nhóm, chứa phiếu test thật của **Nguyễn Thị Bảo Trang** (scenario Excel), giữ lại nhưng **không dùng làm evidence cho bài nộp RAG**.
