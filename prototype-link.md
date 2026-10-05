# Prototype — Link và cách mở

> **Prototype của nhóm AAA, Case A — AI Tutor: Diagnostic Refresher.**
> Mỗi option là **một critical interaction khác nhau**, trên **cùng một context chung**.

---

## 1. Cách mở

Prototype là HTML/CSS/JavaScript thuần — **không cần server, không cần tài khoản, không cần cài gì.**

### Cách 1 — mở trực tiếp bằng trình duyệt

Mở `prototype/index.html`, rồi chọn option bằng tham số trong đường dẫn:

| Mục tiêu | Đường dẫn |
|---|---|
| **Option A** — Bản đồ tự kiểm tra | `prototype/index.html?o=A` |
| **Option B** — Đối thoại đồng chẩn đoán | `prototype/index.html?o=B` |
| **Option C** — Agent theo dõi, rồi mở hội thoại | `prototype/index.html?o=C` |

> Không có tham số thì mặc định là **Option C**.

### Cách 2 — chạy local server (khuyến nghị khi test)

Một số trình duyệt chặn `file://` khi tải script. Nếu gặp lỗi, chạy server từ thư mục `prototype/`:

```bash
cd prototype
python -m http.server 8000
```

Rồi mở `http://localhost:8000/index.html?o=A` (tương ứng `?o=B`, `?o=C`).

---

## 2. Trạng thái từng option

| Option | Người build | File | Link | Trạng thái |
|---|---|---|---|:---:|
| **A** — Bản đồ tự kiểm tra | Đàm Quang Trung | `prototype/options/A/self-check.js` | `index.html?o=A` | ✅ **sẵn sàng** |
| **B** — Đối thoại đồng chẩn đoán | Nguyễn Thị Bảo Trang | `prototype/options/B/chat-diagnose.js` | `index.html?o=B` | ✅ **sẵn sàng** |
| **C** — Agent theo dõi | **Đặng Văn Thái Anh** | `prototype/options/C/agent-nudge.js` | `index.html?o=C` | ✅ **sẵn sàng** |

> ✅ **Cả ba option đều đã build và tự kiểm** (61/61 phép kiểm pass bằng trình duyệt thật — xem `README.md` §5.2). Ba dòng `?o=A|B|C` chạy được ngay bằng file local.
>
> ✅ **Đã deploy, có link công khai** — xem bảng §4. Cổng 4 đã đóng.

## 2.1 Cấu trúc thư mục

```text
prototype/
├── index.html                      ← context chung + bootstrap chọn option
├── common/
│   ├── context.js                  ← context chung + cơ chế phát sự kiện
│   └── styles.css                  ← bộ component chung
└── options/
    ├── A/
    │   ├── self-check.js            ← critical interaction của A
    │   └── ANNOTATION.md           ← hướng dẫn facilitation, KHÔNG cho tester xem
    ├── B/
    │   ├── chat-diagnose.js         ← critical interaction của B
    │   └── ANNOTATION.md           ← hướng dẫn facilitation, KHÔNG cho tester xem
    └── C/
        ├── agent-nudge.js          ← critical interaction của C
        └── ANNOTATION.md           ← hướng dẫn facilitation, KHÔNG cho tester xem
```

**Nguyên tắc 70% chung:** context, data fixture, component và task **giống nhau 100%** ở cả ba option. Chỉ có **critical interaction** là khác. Nếu ba option trông giống nhau ở chỗ nào khác critical interaction → build sai.

---

## 3. Data fixture — dùng chung, không ai tự sửa

| Mục | Giá trị cố định |
|---|---|
| **Bài học** | Xây dựng RAG chatbot · Bài 4 — Hybrid Retrieval |
| **Khoá dừng video** | **04:20** — slide 12: *"Tại sao kết hợp kết quả hai phương pháp"* |
| **Task** | *"Bạn hiểu semantic search và BM25 riêng lẻ, nhưng không hiểu **tại sao phải kết hợp** hai cách này. Hãy tìm ra lý do đó."* |
| **Slide 12** | Công thức RRF · khẳng định *"mỗi phương pháp có điểm mạnh riêng nên kết hợp"* — **không kèm ví dụ** |
| **Slide 13** | Ví dụ thật đặt cạnh nhau: BM25 theo từ khoá vs semantic search theo nghĩa |
| **Đoạn code** | `rag/retrieval.py` — dòng `reciprocal_rank_fusion(dense, sparse, k)` |

> ⚠️ **Fixture này dùng cho cả ba, không được ai tự sửa.** Nếu đổi dấu hiệu trong nội dung bài thì phép so sánh A với B mất ý nghĩa.
> **Slide 12 cố tình** viết đúng kiểu bài giảng khiến người học kẹt trong `interview/note.md` — khẳng định kết hợp là tốt nhưng không có ví dụ. Câu trả lời nằm ở slide 13, **ngay trong bài**.

---

## 4. Địa chỉ công khai

| Mục | Link |
|---|---|
| **Trang prototype** (mở được cả ba) | https://anhdvt24.github.io/Track1_Day18_2A202602407_DangVanThaiAnh/prototype/index.html |
| **Option A** — Bản đồ tự kiểm tra | https://anhdvt24.github.io/Track1_Day18_2A202602407_DangVanThaiAnh/prototype/index.html?o=A |
| **Option B** — Đối thoại đồng chẩn đoán | https://anhdvt24.github.io/Track1_Day18_2A202602407_DangVanThaiAnh/prototype/index.html?o=B |
| **Option C** — Agent theo dõi | https://anhdvt24.github.io/Track1_Day18_2A202602407_DangVanThaiAnh/prototype/index.html?o=C |

> ✅ **Đã deploy GitHub Pages, public, quyền xem công khai** — giảng viên và trợ giảng mở được bằng trình duyệt, **không cần cài gì**. Ba option dùng **chung một trang**, phân biệt bằng tham số `?o=A|B|C` → không phải deploy ba bản riêng.
>
> **Ba option đều đã build và tự kiểm** (61/61 phép kiểm pass bằng trình duyệt thật). Link trên phục vụ từ nhánh `main` — nên **sau mỗi lần push, đợi 1–2 phút** rồi mới gửi cho tester, tránh lúc Pages đang build lại.
>
> **Nếu link chết:** tải file `prototype/` về mở bằng `index.html?o=A` cũng chạy được — không phụ thuộc mạng.

---

## 5. Trước khi mở phiên test

| # | Việc | Vì sao |
|---|---|---|
| 1 | Bảo đảm **màn hình test dùng dữ liệu giả** — không có tên khách hàng, không có dữ liệu thật của tester | R6 — prototype không thu thập dữ liệu thật. Nói trước với tester để họ không vô tình đưa việc thật vào |
| 2 | Đọc `ANNOTATION.md` của option | Ghi trước **điều không được nói** cho tester |
| 3 | Chuẩn bị sẵn **câu dẫn cho tester** | Không hứa *"AI sẽ tìm ra nguyên nhân"* — trung thực với giới hạn: AI giúp nhận ra cần kiểm tra gì, không thay người học kết luận |
| 4 | Bấm **"Bắt đầu lại"** một lần để xác nhận reset về đúng context ban đầu | Tiêu chí testable — nếu không có thì không test lại được |
| 5 | Mở option của **người khác** mà không cần giải thích gì | Nếu tester phải hỏi *"bấm cái nào"* → build sai |

---

## 6. Nguyên tắc khi test

| Quy tắc | Nội dung |
|---|---|
| **Không giải thích giao diện** | Người mô phỏng AI **không nói gì**. Nếu tester hỏi facilitator → **ghi vào observation, không trả lời**. Việc đó là dữ liệu |
| **Không nói kết luận của nhóm** | Ví dụ *"bạn thiếu kiến thức nền về BM25"* — đó là **diễn giải của nhóm**, không phải observation, và nằm trong phần suy đoán chưa chứng minh |
| **Không hướng dẫn** | *"Hãy qua slide 13"* — đó là hướng dẫn, không phải gợi ý |
| **Không khẳng định không kiểm chứng được** | *"Tôi thấy bạn chưa hiểu RRF"* — vi phạm C1 |
| **Không nói về ngưỡng** | Chỉ báo của C do AI tự quyết khi nào hiện — **không can thiệp** |
| **Bỏ dở được bất cứ lúc nào** | Tester được phép dừng. **Không** ghi nhận là *"fail"* |
| **Luật 5** | Mỗi thành viên test cả ba option, **không ai test option mình làm** |

---

## 7. Ràng buộc kỹ thuật

| Ràng buộc | Lý do |
|---|---|
| **Dữ liệu cứng, không gọi model thật** | Nếu không, mỗi lần ra kết quả khác nhau → **không so sánh được**, và tester 2 sẽ thấy khác tester 1 |
| **Không upload / không đọc file thật** | Không note nào cho thấy người học tự học đưa file công việc cho AI |
| **Không có nút "áp dụng sửa"** ở bất kỳ option nào | Thêm chỉ để ba option trông giống nhau là **phá comparison** |
| **Không lưu dữ liệu tester lâu dài** | Nhật ký phiên chỉ tồn tại trong phiên hiện tại, người học xoá được bất cứ lúc nào |

---

**Xem thêm:** [`README.md`](README.md) · [`three-option-design-sheet.md`](three-option-design-sheet.md) · [`prototype-feedback-note.md`](prototype-feedback-note.md) · [`group-feedback-synthesis.md`](group-feedback-synthesis.md) · [`ai-support-log.md`](ai-support-log.md)
