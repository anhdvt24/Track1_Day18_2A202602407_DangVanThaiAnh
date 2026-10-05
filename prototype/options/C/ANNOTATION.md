# OPTION C — AGENT THEO DÕI, RỒI MỞ HỘI THOẠI

> **Annotation — đặt NGOÀI frame, KHÔNG hiện cho tester.**
> File này nằm cùng thư mục với `agent-nudge.js`. Chỉ người mô phỏng và
> người đọc kết quả test được đọc. Tester không được thấy.
>
> **Mở prototype:** `index.html?o=C`
> **Người build:** Đặng Văn Thái Anh (2A202602407)
> **Người KHÔNG được test option này:** Thái Anh (luật 5)
>
> **Bối cảnh:** học viên tự học khóa RAG chatbot qua video + slide + đoạn code.
> Kẹt ở: tại sao phải kết hợp semantic search và BM25 (RRF).
> Nguồn: `interview/note.md` (PN1) — note có file nguồn đầy đủ.

---

## Mẫu annotation

```text
OPTION C — AGENT THEO DÕI, RỒI MỞ HỘI THOẠI

We expect the tester to:
  bấm chỉ báo khi nó xuất hiện, xác nhận hoặc phủ nhận quan sát của AI,
  rồi tự đọc slide 13 và tự kết luận

Watch for:
  · có bấm chỉ báo không, hay bỏ qua
  · bấm xong có đóng sớm không
  · phản ứng thế nào khi bị nói sai về hành vi của mình   ← quan trọng nhất
  · có nói thấy bị theo dõi không
  · bỏ qua một lần thì lần sau có tự mở lại không (C3)
  · có tự đi tìm nguồn ngoài (Google, ChatGPT) không — và trước khi tìm hay sau

Do not explain:
  agent đang quan sát thao tác; AI không đọc file, không sửa gì;
  chỉ báo do AI tự quyết khi nào hiện — không can thiệp
```

---

## Cách chạy được tới chỉ báo (để người mô phỏng biết)

Chỉ báo **KHÔNG** hiện ngay khi mở trang. Cần một trong hai:

| Cần | Cách tạo |
|---|---|
| Quay lại mốc **04:20** từ **3 lần** trở lên | Bấm nút mốc `06:40` rồi bấm lại mốc `04:20`, lặp lại 3 vòng |
| Quay lại **slide 12** từ **3 lần** trở lên | Bấm `Sau ▶` rồi bấm `Về slide 12`, lặp lại 3 vòng |

> Cả hai đều là hành vi thật trong `note.md`: *"Đầu tiên mình xem lại video.
> Sau đó mình đọc lại slide."*

---

## Điều KHÔNG được nói cho tester

| ❌ Không nói | Vì sao |
|---|---|
| "Bạn thiếu kiến thức nền về BM25 và semantic search" | Đó là **kết luận của nhóm**, không phải quan sát. Và nó nằm trong §1.7 mục 1 — suy đoán chưa được chứng minh |
| "Hãy qua slide 13" | Là hướng dẫn, không phải gợi ý |
| "Tôi thấy bạn chưa hiểu RRF" | Không kiểm chứng được — vi phạm C1 |
| "Đây là ngưỡng phát hiện, tôi đặt sẵn" | Tester phải tưởng mình hành xử tự nhiên |
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

**Điều C được test được:** agent có nhận ra mẫu lặp và mở hội thoại hữu ích không.

**Điều C KHÔNG test được:** một người học thật đang kẹt thật thì có tạo ra mẫu hành
vi này không. Fixture là do nhóm dựng. → **C có phát biểu yếu hơn A và B sau
khi test.** Phải nói rõ khi trình bày (§X.1 mục 3).

**Giả định lớn nhất của C:** rằng người học đồng ý để AI quan sát thao tác
học tập của mình. Với scope video + slide, điều này *dễ hơn* so với theo dõi
toàn màn hình — nhưng vẫn **chưa có note nào** xác nhận điều đó (§X.1 mục 9).

**Vì sao nội dung bài học trong prototype quan trọng:** slide 12 cố tình viết
đúng kiểu *"mỗi phương pháp có điểm mạnh riêng nên kết hợp"* — **không kèm
ví dụ**. Đây là dạng bài giảng mà `note.md` ghi là khiến người học kẹt. Và
người học thoát kẹt nhờ **một ví dụ thực tế**. Nên slide 13 là câu trả lời,
và nó nằm ngay trong bài — không cần ra ngoài.
