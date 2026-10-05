# OPTION B — ĐỐI THOẠI ĐỒNG CHẨN ĐOÁN

> **Annotation — đặt NGOÀI frame, KHÔNG hiện cho tester.**
> File này nằm cùng thư mục với `chat-diagnose.js`. Chỉ người mô phỏng và
> người đọc kết quả test được đọc. Tester không được thấy.
>
> **Mở prototype:** https://anhdvt24.github.io/Track1_Day18_2A202602407_DangVanThaiAnh/prototype/index.html?o=B
> **Người build:** Đặng Văn Thái Anh (2A202602407)
> **Người KHÔNG được test option này:** Nguyễn Thị Bảo Trang (luật 5)
>
> **Bối cảnh:** học viên tự học khóa RAG chatbot qua video + slide + đoạn code.
> Kẹt ở: tại sao phải kết hợp semantic search và BM25 (RRF).
> Nguồn: `interview/note.md` (PN1) — note có file nguồn đầy đủ.

---

## Mẫu annotation

```text
OPTION B — ĐỐI THOẠI ĐỒNG CHẨN ĐOÁN

We expect the tester to:
  trả lời 2-3 câu hỏi thích ứng (được trả lời "không biết"),
  đọc giả thuyết được xếp hạng kèm dấu hiệu hỗ trợ/chống lại,
  chọn giả thuyết cần kiểm tra, tự chạy phép kiểm, rồi tự viết kết luận

Watch for:
  · làm gì ngay khi màn hình mở                                  ← H1
  · trả lời "không biết" ở bao nhiêu câu trong 3 câu             ← đo chất lượng B
  · có đọc dòng "AI dựa vào: ..." không                         ← H3
  · có tự mở slide 13 kiểm chứng trước khi nghe AI không        ← H3
  · có bấm "Cả hai đều không đúng với tôi" không                ← H4
  · bác giả thuyết rồi có đọc lại không, hay im                  ← H4
  · đọc xong tóm tắt vẫn chưa ra nguyên nhân thì phản ứng gì   ← H7
  · có bấm "Đến lượt bạn kết luận" và viết ra lời mình không   ← H7

Do not explain:
  vì sao AI hỏi câu này; giả thuyết nào đúng; slide 13 là câu trả lời
  — người học tự chạy phép kiểm, AI không kết luận thay
```

---

## Cách chạy tới từng trạng thái (để người mô phỏng biết)

| Trạng thái | Cách tới |
|---|---|
| Màn chào, chưa bắt đầu | Mở trang → bấm *"Bắt đầu 3 câu hỏi"* |
| Câu hỏi 1–3 | Trả lời. Có nút *"◀ Sửa câu trước"* và *"Làm lại từ đầu"* ở mọi câu |
| Danh sách giả thuyết | AI tự tóm tắt, xếp hạng. Có nút *"Cả hai đều không đúng với tôi"* |
| Màn kiểm một giả thuyết | Bấm một giả thuyết → đọc *"AI dựa vào: …"* → bấm *"Tôi đã kiểm xong"* hoặc *"Không phải, không đúng với tôi"* |
| Màn bác bỏ AI viết sai bài | Xem nguyên văn bài trong nội dung, rồi chọn *"Có, tôi nghĩ bài viết sai"* hoặc *"Không, bài không sai — tôi chỉ chưa thấy lý do"* |
| Màn kết luận | Bấm *"Tôi đã kiểm xong"* ở màn giả thuyết → tới màn *"Đến lượt bạn kết luận"*. Cùng câu hỏi, cùng chỗ lưu như A |

> ⚠️ **Điểm cần đo riêng ở B:** đây là option mà **chất lượng phụ thuộc hoàn toàn
> vào câu trả lời** của người học — mà người học có thể không biết cách mô tả
> thứ mình chưa nhận ra. Số lần trả lời *"không biết"* là chỉ báo trực tiếp cho
> giới hạn đó. Nếu tester trả lời *"không biết"* cả 3 câu mà vẫn không ra,
> đó **không** phải lỗi của họ — đó là dữ liệu về giới hạn của B.

---

## Điều KHÔNG được nói cho tester

| ❌ Không nói | Vì sao |
|---|---|
| "Bạn thiếu kiến thức nền về BM25 và semantic search" | Đó là **kết luận của nhóm**, không phải quan sát. Và nó nằm trong §1.7 mục 1 — suy đoán chưa được chứng minh |
| "Hãy qua slide 13" | Là hướng dẫn, không phải gợi ý |
| "Tôi thấy bạn chưa hiểu RRF" | Không kiểm chứng được — phá C1 |
| "Trả lời sai rồi, hãy nghĩ kỹ hơn" | Đây là **đánh giá năng lực người học** — phá R5. Chỉ nói *vế mệnh đề AI dựa vào đâu* |
| Bất cứ gì khi tester hỏi "bấm cái nào" | **Ghi vào observation, không trả lời.** Việc này là dữ liệu |

## Nếu tester hỏi, ghi vào đây

```text
· tester hỏi: ______________________________________________
  → ghi vào Watch for, KHÔNG trả lời
· tester hỏi: ______________________________________________
  → ghi vào Watch for, KHÔNG trả lời
```

---

## Ghi chú cho người đọc kết quả

**Điều B được test được:** hai bên có cùng dựng được chẩn đoán trong 3 câu
hỏi không, và người học có dùng được dấu hiệu AI đưa để bác bỏ AI không.

**Điều B KHÔNG test được:** chất lượng chẩn đoán nói chung. Fixture là dữ liệu
cứng, nên chỉ đo được phản ứng với **một** tình huống.

**Không đọc sai thứ này khi tổng hợp:** nếu tester trả lời "không biết" nhiều
và B cho kết quả kém hơn A, **đừng** kết luận *"A tốt hơn B"*. Ba option khác
nhau ở **cơ chế**, nên khác biệt về chất lượng **là kết quả mong đợi**, không
phải bằng chứng A thắng. Muốn kết luận về ưu thế thì cần đo **cùng một đại lượng**
trên cả ba — mà prototype này chưa đủ dữ liệu để làm việc đó.
