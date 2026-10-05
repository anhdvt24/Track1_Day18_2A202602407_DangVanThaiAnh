# OPTION A — BẢN ĐỒ TỰ KIỂM

> **Annotation — đặt NGOÀI frame, KHÔNG hiện cho tester.**
> File này nằm cùng thư mục với `self-check.js`. Chỉ người mô phỏng và
> người đọc kết quả test được đọc. Tester không được thấy.
>
> **Mở prototype:** https://anhdvt24.github.io/Track1_Day18_2A202602407_DangVanThaiAnh/prototype/index.html?o=A
> **Người build:** Đặng Văn Thái Anh (2A202602407)
> **Người KHÔNG được test option này:** Đàm Quang Trung (luật 5)
>
> **Bối cảnh:** học viên tự học khóa RAG chatbot qua video + slide + đoạn code.
> Kẹt ở: tại sao phải kết hợp semantic search và BM25 (RRF).
> Nguồn: `interview/note.md` (PN1) — note có file nguồn đầy đủ.

---

## Mẫu annotation

```text
OPTION A — BẢN ĐỢ TỰ KIỂM

We expect the tester to:
  tự chọn một nhánh theo đúng triệu chứng đang hiện, chạy phép kiểm,
  tự đối chiếu với "Kết quả mong đợi", rồi tự viết kết luận bằng lời mình

Watch for:
  · làm gì ngay khi màn hình mở — bấm thẳng, hay đứng yên tìm nút   ← H1, H2
  · có biết bắt đầu từ nhánh nào không, hay đi sai nhánh rồi tự sửa   ← H2
  · có đọc dòng "Kết quả mong đợi" trước khi bấm chạy không        ← H3
  · có bấm "Giải thích bước này giúp tôi" không, đọc xong có làm theo không  ← H3
  · chạy 2 nhánh chưa ra thì bỏ cuộc hay thử tiếp                  ← H7
  · có bấm "Đến lượt bạn kết luận" không, có viết ra lời mình không ← H7

Do not explain:
  slide 13 là câu trả lời; các nhánh nào trong bản đồ là "đúng"
  — người học tự đối chiếu, không mở hội thoại AI
```

---

## Cách chạy tới từng trạng thái (để người mô phỏng biết)

| Trạng thái | Cách tới |
|---|---|
| Bản đồ, chưa chạy nhánh nào | Mở trang. Nút *"Đến lượt bạn kết luận"* **chưa hiện** — đúng thiết kế, vì chưa có gì để kết luận |
| Bản đồ, đã chạy ≥1 nhánh | Bấm một thẻ nhánh → đọc điều kiện → bấm *"Tôi đã chạy xong"* → chọn kết quả → nút kết luận **xuất hiện** |
| Màn giải thích một bước | Ở màn phép kiểm, bấm *"Giải thích bước này giúp tôi"*. Chỉ dùng được **một lần** cho cả phiên — hết lượt thì nút biến mất, không mở lại được |
| Màn kết luận | Bấm *"Đến lượt bạn kết luận"*. AI **không** gợi ý trong ô này |

> ⚠️ **Lưu ý khi đọc kết quả:** nếu tester **không** bấm *"Đến lượt bạn kết luận"*, đó **không** phải lỗi của họ — mà là dữ liệu về việc affordance có đủ nổi bật không. Ghi vào ô H7, đừng ghi vào ô "họ không kết luận được".

---

## Điều KHÔNG được nói cho tester

| ❌ Không nói | Vì sao |
|---|---|
| "Bạn thiếu kiến thức nền về BM25 và semantic search" | Đó là **kết luận của nhóm**, không phải quan sát. Và nó nằm trong §1.7 mục 1 — suy đoán chưa được chứng minh |
| "Hãy qua slide 13" | Là hướng dẫn, không phải gợi ý |
| "Tôi thấy bạn chưa hiểu RRF" | Không kiểm chứng được — phá C1 |
| Nhánh nào trong bản đồ là nhánh "đúng" | Người học tự đối chiếu với kết quả mong đợi. Nói ra là hủy đúng cơ chế của A |
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

**Điều A được test được:** người học có tự định vị được điểm vướng bằng
dấu hiệu trên màn hình không, và có chịu đi cả quy trình tự kiểm không.

**Điều A KHÔNG test được:** đây là option **tốn công nhất** và có nguy cơ
lặp lại đúng tình huống gốc (người học phải tự biết mình đang kẹt để bắt đầu).
Prototype dùng dữ liệu cứng nên đo được *quy trình*, không đo được *hiệu quả thật*.

**Cân bằng R1 — điểm cần đối chiếu khi so sánh A với B:** sau khi chạy ít nhất
một nhánh, nút *"Đến lượt bạn kết luận"* xuất hiện để người học tự viết kết luận
bằng lời mình. B có cùng màn hình đó. Nếu chỉ có một trong hai option có, thì
A thua B **không vì cơ chế** → phá luật 2. Đây là điều đã sửa trong repo này,
xem `README.md` §4.1b.
