# Track1_Day18_2A202602407_DangVanThaiAnh

> **Case A — AI Tutor: Diagnostic Refresher** · Nhóm AAA · Đặng Văn Thái Anh (2A202602407)
> Bài nộp gồm **6 tệp phẳng** tại thư mục gốc. Mọi chi tiết kỹ thuật nằm trong từng file tương ứng.

---

## 1. Thông tin cá nhân & Đội ngũ

| Thông tin | Nội dung |
|---|---|
| **Họ và tên** | **Đặng Văn Thái Anh** |
| **Mã sinh viên** | **2A202602407** |
| **Tên nhóm** | **Nhóm AAA** |
| **Case bài toán nghiên cứu** | **Case A — AI Tutor: Diagnostic Refresher** |

### Ba thành viên

| STT | Họ và tên | Trách nhiệm chính trong Day 18 |
|---|---|---|
| 1 | **Đặng Văn Thái Anh** | Phỏng vấn PN1 · dựng **bối cảnh chung** · build **Option C** · điều phối phiên test T3 |
| 2 | Đàm Quang Trung | Build **Option A** — Bản đồ tự kiểm tra |
| 3 | Nguyễn Thị Bảo Trang | Phỏng vấn PN3 · build **Option B** — Đối thoại đồng chẩn đoán |

**Điểm chung của cả ba option:** cùng một học viên, cùng một tình huống, cùng một nhiệm vụ, cùng một bộ dữ liệu — chỉ khác nhau ở **cách chia việc giữa người học và AI**.

---

## 2. Hypothesis Problem

> Câu phát biểu 5 thành tố mà nhóm chọn làm điểm tựa ở Day 18:

> **Khi** học viên tự học trực tuyến theo nhịp cá nhân — thường để áp dụng ngay vào một việc thật — **và gặp một tình huống mà kết quả trên dữ liệu thật khác với hướng dẫn**, **họ gặp khó khăn trong việc xác định điểm vướng và dùng đúng những gì mình đã biết**, **vì** họ không biết mình **đã biết gì** hoặc **đang thiếu gì** có liên quan tới **đúng triệu chứng này**, và các nguồn ngoài đều được viết cho người chưa từng gặp tình huống đó trên dữ liệu thật của họ — **dẫn đến** lặp lại thao tác, dò nhiều nguồn không khớp, mất thời gian và gián đoạn luồng học; **đôi khi họ bỏ hẳn phần học tiếp theo dù vẫn hoàn thành được công việc trước mắt**.

### 2.1 Dữ kiện thực tế từ Day 17 — vì sao hypothesis phải sửa

Hypothesis này **không phải** Pain A của Day 17 (*"thiếu kiến thức nền"*). Nhóm phải sửa vì evidence chống lại:

| Dữ kiện quan sát được | Nguồn | Tác động |
|---|---|---|
| Thoát kẹt nhờ **một ví dụ thực tế**, không phải nhờ ôn lại kiến thức nền | PN1, Q8 | Nghiêng sang *thiếu cầu nối* |
| **"Khoảng một tiếng"** — phần mất nhiều nhất là *tìm đúng cách giải thích* | PN1, Q9 | Barrier có thể là **chi phí** tìm cách giải thích |
| **"Mình chỉ biết là mình không hiểu hybrid retrieval. Sau đó mình mới nhận ra là mình chưa hiểu rõ điểm mạnh và điểm yếu của BM25 với semantic search."** | PN1, Q8 | Chỉ biết *"không hiểu"*, không biết **thiếu gì** |
| Người học **đã biết** chuyện dữ liệu có thể bị lưu nhầm kiểu, nhưng **không nối được** với triệu chứng hiện tại | PN3, 03:27–03:54 | Phủ định Pain A trực tiếp |
| Nguồn ngoài viết cho người chưa từng gặp tình huống trên dữ liệu thật | PN3, 01:45–02:23 | Nguồn ngoài không giải quyết được, **không phải** vì thiếu nội dung |

**Điểm mấu chốt:** barrier chung **không phải "thiếu kiến thức"** — nó là **khoảng cách giữa điều đã biết và việc dùng nó đúng lúc đang kẹt**.

### 2.2 Ẩn số chưa biết mang sang thiết kế

| # | Điều chưa biết | Ảnh hưởng tới thiết kế |
|---|---|---|
| 1 | Học viên có chấp nhận để AI **quan sát thao tác** của mình không? | Quyết định Option C có khả thi hay không |
| 2 | Lớp barrier nào phổ biến hơn — **thiếu ý thức** hay **thiếu cầu nối**? | Lớp 1 cần AI phát hiện trước; Lớp 2 thì dấu hiệu trên màn hình là đủ |
| 3 | Học viên chấp nhận tin AI tới mức nào? | Quyết định AI được phép nói thẳng, hay chỉ chỉ ra điều kiểm chứng được |

### 2.3 Ghi chó trung thực về evidence

| Note | Trạng thái |
|---|---|
| **PN1** | ✅ Có file nguồn đầy đủ (`interview/note.md` + audio). Mọi trích dẫn ở trên **truy vết được**. |
| **PN2** | ❌ **Đã loại khỏi phạm vi** theo quyết định nhóm — không dùng làm căn cứ cho kết luận nào |
| **PN3** | ⚠️ Nội dung do Trang ghi, kèm timestamp. Trích dẫn ở trên lấy theo bản ghi đó |

> **Một giới hạn tôi tự ghi nhận:** câu trả lời Q12 của PN1 (thiếu nền hay cách giải thích) **bị dẫn dắt** — interviewer đưa sẵn hai phương án. Vì vậy tôi **không dùng** câu trả lời đó làm evidence, và cũng không dùng nó để phủ nhận Pain A một cách trực tiếp.

---

## 3. Three Solution Options

Câu hỏi sinh ra ba option:

> **Ai làm công việc định vị điểm vướng — người học, AI, hay cả hai?**

```text
Người học giữ phần lớn quyền  ◄──────────────────────────►  AI giữ phần lớn quyền

  A: Bản đồ tự kiểm tra      B: Đối thoại đồng chẩn đoán     C: Agent theo dõi
     User-led, AI Don't Act     Human–AI co-create, Ask → Act      rồi mở hội thoại
```

### 3.1 Mô tả ngắn gọn cơ chế

#### A — Bản đồ tự kiểm tra · *User-led, AI Don't Act*
AI hiện một **cây quyết định theo triệu chứng** có **điểm vào gắn thẳng với đúng triệu chứng đang hiện trên màn hình**. Người học tự chọn nhánh, tự chạy từng phép kiểm tra, tự ghi nhận kết quả. AI **chỉ giải thích một bước khi được gọi**, không tự suy luận.
**Trade-off:** quyền kiểm soát cao nhất nhưng tốn công nhất, và có nguy cơ lặp lại đúng tình huống gốc.

#### B — Đối thoại đồng chẩn đoán · *Human–AI co-create, Ask → Act*
AI hỏi **2–3 câu thích ứng** chạm được cả hai lớp barrier, nhận *"không biết"* là một câu trả lời hợp lệ. Hai bên cùng thu hẹp nguyên nhân: AI tóm tắt evidence đã dùng và **xếp hạng** các giả thuyết, mỗi giả thuyết gắn với dấu hiệu hỗ trợ/chống lại nó. Người học chọn giả thuyết cần kiểm tra và **tự chạy phép kiểm tra**.
**Trade-off:** cân bằng nhất, nhưng chất lượng **phụ thuộc hoàn toàn** vào câu trả lời — mà người học có thể không biết cách mô tả thứ mình chưa nhận ra.

#### C — Agent theo dõi, rồi mở hội thoại · *AI-detects, user-decides*
Agent **quan sát thụ động** thao tác trong bài và ghi nhật ký. Khi có **mẫu lặp kèm kết quả không đổi** trong cửa sổ 5 phút, nó hiện **một chỉ báo** kèm **một câu mở có thể kiểm chứng** — chỉ nói về quá khứ đo được, **không** kèm nguyên nhân. **Người học bấm** thì mới mở hội thoại. AI hỏi **một** câu rồi dừng; **không** đọc file, **không** ghi file, **không** đề xuất đổi dữ liệu, **không** tự mở hội thoại.
**Trade-off:** effort thấp nhất, nhưng khi AI đọc sai thì người học **mất đi chính lợi thế tự kiểm**.

### 3.2 Link trải nghiệm prototype

| Option | Link mở trực tiếp | Trạng thái |
|---|---|:---:|
| **A** | `prototype/index.html?o=A` | ⏳ chưa build |
| **B** | `prototype/index.html?o=B` | ⏳ chưa build |
| **C** | `prototype/index.html?o=C` | ✅ **chạy được** |

Prototype là HTML/CSS/JS thuần — **không cần server, không cần cài gì**. Chi tiết cách mở, địa chỉ deploy và quy tắc khi test: [`prototype-link.md`](prototype-link.md).

### 3.3 Ba option khác nhau ở đâu

| So sánh | Khác biệt **bản chất** |
|---|---|
| **A vs B** | A: AI **không tự suy luận**, người học tự đi hết. B: AI **hỏi thích ứng**, hai bên cùng dựng chẩn đoán. |
| **B vs C** | B: người học là người **khởi động**, thông tin đến từ lời kể. C: **AI là người khởi động**, thông tin đến từ hành vi quan sát được. |
| **A vs C** | A giữ **toàn bộ** quá trình ở phía người học. C đưa **việc phát hiện** sang AI trước. |

**Chiều khác biệt thứ hai — thời điểm phát hiện:** A và B cần người học **tự nhận ra mình kẹt** rồi bấm; C thì **không cần**. Đây là khác biệt bản chất, không phải khác biệt diễn đạt.

**Những gì bị loại vì chỉ khác ở bề mặt:** ba mức độ giải thích · ba nguồn hướng dẫn · ba kiểu giao diện · ba mức độ chủ động của AI. Tất cả đều khác *nội dung/hiệu suất* chứ không khác *cách chia việc*.

> ⚠️ **Ba quy tắc bắt buộc cho C** — thiếu chúng thì C là một ý tưởng tệ:
> **C1** câu mở phải là quan sát **kiểm chứng được** (có số đếm, mốc thời gian), không dùng *"tôi nghĩ"*
> **C2** người học nói *"không phải"* → AI **dừng và xoá suy đoán**, không cố giữ lập luận
> **C3** bỏ qua một lần → lần sau **im**, nhưng phải có đường để **tự mở lại** (để *"từ chối"* không biến thành *"bị khoá"*)

Bản thiết kế đầy đủ: [`three-option-design-sheet.md`](three-option-design-sheet.md).

---

## 4. Đóng góp cụ thể của tôi trong sản phẩm nhóm

> **Đặng Văn Thái Anh.** Ghi những gì **tôi đã thực sự làm**, không ghi việc chung.

### 4.1 Tôi chịu trách nhiệm chính Option nào

**Option C — Agent theo dõi, rồi mở hội thoại.** Đây là option khó nhất: phải chứng minh được cả AI *chủ động phát hiện* lẫn ranh giới *không áp đặt*.

| Hạng mục | Tôi làm gì |
|---|---|
| **Ngưỡng phát hiện** | Chỉ hiện chỉ báo khi có **mẫu lặp kèm kết quả không đổi** trong cửa sổ 5 phút — không chỉ dựa vào số lần, vì xem lại để học kỹ *cũng* là lặp |
| **Câu mở (C1)** | Có **số đếm và mốc thời gian** lấy từ hành vi thật trong `note.md`. Ghi **mốc thật quan sát được**, không hard-code câu chữ |
| **C2** | Nút **"Không phải, tôi không làm vậy"** ở **mọi** màn hình sau chỉ báo → AI thừa nhận, **xoá toàn bộ suy đoán** |
| **C3** | Bỏ qua một lần → im. Nhưng có nút **"Xem lại thao tác của tôi"** để tự mở lại |
| **Tắt theo dõi** | Ở mọi trạng thái, hiệu lực **ngay**, không cần giải thích, không cần đợi hết phiên |
| **Nhật ký** | Chỉ tồn tại **trong phiên**, hiện thành khung xem được, người học tự xoá. Không lưu lâu dài |

### 4.2 Đóng góp vào bối cảnh chung

Tôi dựng **common context** để ba option thực sự so sánh được. Đây là phần tôi **không tự ý sửa** sau khi ba người build xong.

| Hạng mục | Tôi làm gì | Vì sao cần |
|---|---|---|
| **Màn hình context** | Video bài học có thanh tua · slide deck · đoạn code trong bài | Ba option mở ra phải thấy y hệt nhau |
| **Bộ dữ liệu dùng chung** | Khoá dừng ở **04:20** · slide 12 viết đúng kiểu *"mỗi phương pháp có điểm mạnh riêng nên kết hợp"* **không kèm ví dụ** · slide 13 là ví dụ thật | Đủ dấu hiệu để **tự kiểm**, nhưng **không** nói nguyên nhân |
| **Bộ component** | `Header` · `TaskBanner` · `VideoPlayer` · `CodeBlock` · `ChipTrạngThái` · `LogBox` · `BtnVềBàiHọc` · `BtnBắtĐầuLại` | Khác màu / layout là phí thời gian, không tạo dữ liệu |
| **Cơ chế sự kiện** | `CTX.on(fn)` phát ra mọi hành động của tester: `video:seek` · `slide:revisit` · `code:copy`… | Cho phép C theo dõi thật mà **không** đọc file |
| **Đường reset chung** | Nút "Bắt đầu lại" ở mọi màn hình, đưa về đúng context ban đầu | Điều kiện để test lại được |

**Một quyết định thiết kế tôi giữ vững:** slide 12 **cố tình** viết đúng kiểu bài giảng mà `note.md` ghi là khiến người học kẹt — khẳng định kết hợp là tốt **nhưng không có ví dụ**. Và câu trả lời nằm ở slide 13, **ngay trong bài** — vì người học thoát kẹt nhờ một ví dụ, nên đưa ví dụ ra khỏi bài sẽ phá đúng barrier đang test.

### 4.3 Tham gia xây dựng Human–AI Decision Table

| Quyết định | Tôi đề xuất | Vì sao |
|---|---|---|
| **Mức độ AI nói** | Chọn **mức 2** — chỉ ra điều kiểm chứng được, không nói thẳng nguyên nhân | Mức 1 xoá sạch khả năng tự kiểm → **không phân biệt được A với B với C** |
| **C1 — câu mở** | Bắt buộc phải kiểm chứng được | Không kiểm chứng được thì đừng bắt người học tin |
| **C2 — thừa nhận sai** | Bắt buộc, **không** phải tuỳ chọn | Nếu AI đọc sai mà cố giữ lập luận → bằng chứng C **không đạt** |
| **C3 — tôn trọng từ chối** | Bắt buộc, nhưng kèm đường tự mở lại | Không có đường mở lại thì C3 thành khoá người học |
| **Phạm vi theo dõi** | Thu hẹp về **khung bài đang học** thay vì toàn màn hình | Ba tín hiệu hữu ích đều nằm trong khung bài; ghi thêm ngoài bài gần như không tăng gì |
| **Không có nút "áp dụng"** | Giữ nguyên, không thêm cho giống nhau | Thêm nút để "cho giống nhau" là **phá phép so sánh** |

**Bốn trụ cột mà cả ba option đều phải trả lời** — Expectation · Agency · Evidence · Recovery — được ghi rõ trong [`three-option-design-sheet.md`](three-option-design-sheet.md).

**Một điều tôi nói thẳng với nhóm:** C là option **duy nhất chạm được Lớp 1** (thiếu ý thức), nhưng đổi lại nó **không test được phần quan trọng nhất của nó**. Nếu trình bày C ngang hàng A và B mà không kèm phần giới hạn, C sẽ thắng **vì được kể hay**, không phải vì thiết kế tốt.

### 4.4 Đóng góp evidence

Tôi phỏng vấn **PN1** — học viên tự học RAG, kẹt ở Hybrid Retrieval / RRF.

**Chuỗi hành vi theo đúng thứ tự người học kể:**

```text
Xem lại đoạn video → đọc lại slide → đọc documentation BM25
→ search Google → xem video khác → hỏi ChatGPT
→ tìm một ví dụ thực tế → thoát kẹt
```

**Ba gì đã làm đổi hướng thiết kế của nhóm:**

| # | Gì tôi ghi lại | Ảnh hưởng |
|---|---|---|
| 1 | *"Cuối cùng điều gì đã giúp bạn hiểu?"* → **"Một ví dụ thực tế."** | Nghiêng hypothesis sang *thiếu cầu nối* |
| 2 | *"Khoảng một tiếng"* — mất nhiều nhất là **tìm đúng cách giải thích** | Barrier có thể là **chi phí** tìm cách giải thích, không chỉ thiếu nền |
| 3 | *"Mình chỉ biết là mình không hiểu hybrid retrieval…"* | Chỉ biết *"không hiểu"*, không biết **thiếu gì** → phải dò 6 nguồn mới nhận ra |

**Episode lặp:** tuần trước cũng kẹt ở embeddings — *"lúc đầu mình xem video và tưởng là hiểu. Nhưng khi tự implement thì mình bị kẹt."* Mẫu **"xem hiểu → tự làm thì kẹt"** lặp ở cả hai lần.

### 4.5 Hỗ trợ đồng đội

| Việc | Chi tiết |
|---|---|
| **Soạn tài liệu chốt nhóm** | Viết bản chốt Chặng 1–3: Evidence Snapshot · ba Solution Option · Human–AI Decision Table · phạm vi scope · bảy quy tắc chung · **mục giới hạn công khai** |
| **Rút gọn design sheet** | Từ bốn tài liệu dài của nhóm về **một** design sheet ba option để cả ba chốt được trong một buổi họp |
| **Chuẩn bị sẵn cho hai bạn** | Bộ component dùng chung + danh sách sự kiện + **cơ chế sẵn có** để A và B chỉ viết phần critical interaction |
| **Phát hiện mâu thuẫn** | Cảnh báo nhóm: `Day18-chot-chung.md` dựng trên scenario **Excel**, còn `three-option-design-sheet.md` + prototype dựng trên **RAG** → nếu để cả hai trong bài nộp sẽ vi phạm luật *"một bài toán duy nhất"* |
| **Rà soát trước khi test** | Chạy thử prototype bằng máy, tìm và sửa lỗi trước khi đưa người thật vào — xem §5.2 |

### 4.6 Điều phối phiên test của tôi

Tôi là người điều phối phiên **T3** (thứ tự **C → A → B**).

| Mục | Nội dung |
|---|---|
| **Luật 5** | Tôi **không** test Option C — option của chính tôi |
| **Câu dẫn** | Không hứa *"AI sẽ tìm ra nguyên nhân"*. Trung thực với giới hạn: **AI giúp nhận ra cần kiểm tra gì, không thay người học kết luận** |
| **Khi tester hỏi "bấm cái nào"** | **Ghi vào quan sát, không trả lời.** Việc đó là dữ liệu |
| **Màn hình test** | **Dữ liệu giả** — nói trước để tester không vô tình đưa việc thật vào |
| **Phiếu ghi chép** | [`prototype-feedback-note.md`](prototype-feedback-note.md) |

---

## 5. Dữ liệu kiểm thử & Bài học

### 5.1 Phiên test do tôi điều phối — T3 (C → A → B)

**Trạng thái: chưa diễn ra.** Phiếu ghi chép ở [`prototype-feedback-note.md`](prototype-feedback-note.md).

| Mục | Nội dung |
|---|---|
| **Tester** | ⏳ |
| **Ngày** | ⏳ |
| **Điều kiện** | ⚠️ **Chỉ chạy được tới C.** Option A và B chưa build, nên chưa thể test đủ ba option theo thứ tự đã chốt |

> ⚠️ **Tôi không điền sẵn phần này.** Bài nộp chỉ nhận **quan sát thật** của phiên tôi điều phối. Viết sẵn thì là bịa evidence — và chính nhóm đã ghi quy tắc này ở Day 17.

### 5.2 Tôi đã tự kiểm thử được (bằng máy, **không** thay phiên thật)

Trước khi đưa người thật vào, tôi chạy Option C bằng Playwright theo đúng các đường đi mà `ANNOTATION.md` mô tả. **Kết quả KHÔNG tính là Feedback Note** — chỉ dùng để tìm chỗ gãy.

**Ba lỗi đã tìm và sửa:**

| # | Mức | Lỗi | Nguyên nhân |
|---|:---:|---|---|
| 1 | 🔴 | Prototype **trống hoàn toàn** — không có nút nào | `index.html` nhúng file option bằng DOM injection **trong `<body>`**, nên file chạy *sau* `DOMContentLoaded` → listener không bao giờ chạy |
| 2 | 🔴 | AI nói *"trong khoảng 5 phút"* mà **không hề kiểm tra thời gian** | `T.windowMs` khai báo rồi **không dùng** → đếm cả phiên. Đây là **AI bịa khoảng thời gian**, vi phạm C1 |
| 3 | 🔴 | AI nói *"vẫn đang ở slide 12"* sau khi người học đã sang slide 14 | Câu mở ghi **một lần** và không re-render → thành **sai thật** |

**Sau khi sửa, các trạng thái then chốt đều đạt:** C1 (câu mở đúng mốc thật đã tua) · C2 (dừng và xoá suy đoán) · C3 (im sau một lần bỏ qua, **có** đường tự mở lại) · đường thoát về bài luôn hiện · nút "Không phải" có ở mọi màn hình sau chỉ báo · reset về đúng context.

**Một phát hiện về thiết kế, không phải về code:** chạy hồ sơ *"không biết mình thiếu gì"* (Lớp 1) thì **chỉ báo không bao giờ hiện**, và panel chỉ có nút *"Tắt theo dõi"* — **không có đường nào để tự hỏi giúp**. Điều này cho thấy C chỉ chạm được Lớp 1 *khi Lớp 1 đã bắt đầu tự lặp* — tức đã gần Lớp 2. Đây là mâu thuẫn **trong luận điểm thiết kế**, cần đưa vào họp.

### 5.3 Bảng tổng hợp 3 phiên của cả nhóm

**Trạng thái: 0/3 phiếu trên prototype RAG.** Chi tiết ở [`group-feedback-synthesis.md`](group-feedback-synthesis.md) §1.

| Tester | Người điều phối | Thứ tự | Phiếu ghi chép | Trạng thái |
|---|---|---|---|---|
| T1 | Nguyễn Thị Bảo Trang | A → B → C | `TEAM/prototype-feedback-note.md` | ⚠️ **Có phiếu thật — nhưng scenario Excel**, không dùng cho bài RAG |
| T2 | Đàm Quang Trung | B → C → A | — | ⏳ chưa có |
| T3 | **Đặng Văn Thái Anh** | **C → A → B** | [`prototype-feedback-note.md`](prototype-feedback-note.md) | ⏳ chưa diễn ra |

**Một điều tôi cần nói rõ vì nó ảnh hưởng tới cách bài nộp được chấm:** trong `TEAM/` có phiếu test thật của Trang — đầy đủ observation, quote nguyên văn và mục Still Unproven. Tôi **không** đưa nó vào bảng tổng hợp này, vì nó chạy trên scenario **Excel / PivotTable** còn bài nộp này dùng **RAG / Hybrid Retrieval**. Đưa vào sẽ tạo hai bài toán khác nhau trong cùng một bài nộp — vi phạm đúng Cổng 1.

> Nếu nhóm muốn dùng phiếu đó, phải chọn: **(a)** đổi bài nộp sang Excel → phải build lại prototype, hoặc **(b)** giữ RAG và chạy lại 3 phiên trên prototype RAG. Đây là quyết định của cả ba, tôi không tự chọn.

**Quy tắc tổng hợp:** mỗi ô ghi **hành vi quan sát được**, không ghi *"thích / không thích"*. Tách rõ **lặp lại ở ≥2 tester** / **khác nhau giữa các tester** / **trái với kỳ vọng của nhóm**. Không nói quá evidence.

### 5.4 Quyết định Next Change

> **Chỉ chọn MỘT thay đổi**, dựa trên hành vi **lặp lại ở mục 5.5** — không chọn vì nó nghe hợp lý.
> **Trạng thái: chưa chốt** — phải đủ ba phiếu thật mới đủ căn cứ.

**Gợi ý đang cân nhắc** (chưa phải quyết định): nếu dữ liệu thật cho thấy tester ở Lớp 1 không bao giờ thấy gợi ý, thì cần một **đường tự mở không phụ thuộc mẫu lặp**. Nhưng làm vậy khiến C giống A và B → phá phép so sánh. Đây là câu hỏi cần họp, không phải quyết định của một người.

### 5.5 Ẩn số Still Unproven

| # | Điều chưa chứng minh | Vì sao chưa |
|---|---|---|
| 1 | ⚠️ **Học viên có chấp nhận để AI quan sát thao tác học tập của mình?** | **Giả định lớn nhất của cả tài liệu.** Cả hai note chỉ ghi hành vi **chủ động**. Chia sẻ với **đồng nghiệp** không phải chia sẻ với **AI** |
| 2 | Học viên có sẵn sàng chia sẻ **ảnh chụp màn hình / file công việc** cho AI? | Ba tester dùng **dữ liệu cứng**, không phải dữ liệu thật |
| 3 | Lớp 1 hay Lớp 2 **phổ biến hơn**? | Prototype chỉ test được Lớp 2 |
| 4 | Người học **thật** đang kẹt thật có tạo ra chuỗi hành vi mà C dựa vào không? | Bộ dữ liệu do nhóm dựng. **Đây là điều kiện tiên quyết để C hoạt động** — và không test được bằng prototype |
| 5 | Tình huống này có **lặp lại** ở nhiều người, môn, công cụ? | Hai note **khác chủ đề hoàn toàn**. Chúng chỉ khớp ở *cơ chế*, chưa khớp ở *tần suất* |
| 6 | Độ bền của chẩn đoán khi dùng **model thật**? | Dữ liệu cứng → đo được phản ứng với một tình huống, không đo được chất lượng chẩn đoán nói chung |
| 7 | Đây có phải **pain lớn nhất** của học viên không? | Ba tester với dữ liệu cứng **không** chứng minh product value hay nhu cầu thị trường |

### 5.5.1 Ba câu hỏi mới từ phiếu của đồng đội

Khi đọc `TEAM/prototype-feedback-note.md`, tôi thấy 3 điểm **chưa ai trả lời được**. Ghi vào đây như **câu hỏi**, không phải kết luận — và phiếu đó thuộc scenario khác nên không dùng làm số liệu.

| # | Câu hỏi | Vì sao đáng hỏi |
|---|---|---|
| 1 | Khi hệ thống cần **mở rộng quyền**, người dùng có **dừng lại cân nhắc** không — hay chỉ là chưa biết bấm đâu? | Trong phiếu T1, tester dừng đúng ở bước nâng scope của C. Hai cách giải thích này dẫn tới hai kết luận **ngược nhau** về Cổng 3. Chưa phân biệt được |
| 2 | Thông báo *"Có thể hoàn tác"* **trước** khi áp dụng có được chú ý không? | Trong phiếu T1, nút Undo được tìm thấy **sau** khi đã áp dụng. Nếu vậy, thông báo trước đó vô dụng — đây là vấn đề **Expectation** |
| 3 | Nút recovery sau khi một nhánh bị loại trừ có **đủ dễ nhận ra** không? | Trong phiếu T1, tester tự phục hồi được. Nhưng tự phục hồi vì **thấy nút**, hay vì **biết phải làm gì**? Hai thứ khác nhau, chưa tách được |

> ⚠️ Cả ba đều cần test lại trên prototype **RAG** trước khi dùng làm căn cứ cho Next Change.

### 5.6 Bài học tôi rút ra từ Day 18

| # | Bài học | Vì sao đáng nhớ |
|---|---|---|
| 1 | **Đọc code không đủ — phải mở thật.** Cả ba lỗi đều loại *chỉ lộ ra khi chạy*: lỗi thứ tự DOM, biến khai báo rồi không dùng, câu chữ thành sai thật | Đặc biệt lỗi 2 và 3 đều **nghe rất hợp lý** khi đọc. Chỉ chạy mới thấy |
| 2 | **Một câu nói về hiện tại thì luôn có nguy cơ thành sai thật.** Chỉ nói về quá khứ đo được thì mới an toàn | Đây là bài học rút ra từ C1, và nó áp dụng cho **mọi** AI trong sản phẩm |
| 3 | **"Không" của người dùng phải có hiệu lực ngay, nhưng không được biến thành khoá.** Đây là ranh giới mỏng giữa *tôn trọng* và *trừng phạt* | Nếu bỏ chi tiết này, C trông có vẻ chỉn chu nhưng vô dụng với người đã từng từ chối |
| 4 | **Hypothesis phải chịu sửa.** Nhóm đã sửa Pain A của chính mình sau khi đọc evidence | Đây là điều Cổng 1 thực sự yêu cầu: bám dữ kiện, không bám đề bài |
| 5 | **Việc tự kiểm bằng máy không thay được phiên thật.** Nó chỉ chứng minh *interaction không gãy*, không chứng minh *con người có chịu được không* | Hai câu hỏi khác nhau, và bài nộp không được trộn |

---

## 6. AI Support Log

> Bản ghi đầy đủ ở [`ai-support-log.md`](ai-support-log.md). Tóm tắt:

### 6.1 Công cụ AI đã sử dụng

| Công cụ | Dùng để làm gì |
|---|---|
| **Claude (Cursor)** | Hệ thống hóa tài liệu · soạn khung tài liệu nhóm · **review và tự sửa code prototype** · chạy kiểm thử bằng máy · định dạng và kiểm tra tính nhất quán |
| **AI làm tròn vai người mở prototype** | Chạy thử các đường đi trước khi đưa người thật vào |

### 6.2 AI hỗ trợ hiệu quả ở khâu nào

| Khâu | Kết quả |
|---|---|
| **Tách observation khỏi diễn giải** | Nhanh hơn tôi làm tay nhiều lần — nhưng vẫn phải kiểm lại từng dòng |
| **Đọc lại chuỗi hành vi** | Phát hiện mẫu lặp *"xem hiểu → tự làm thì kẹt"* xuyên hai episode |
| **Định dạng tài liệu Chặng 1–3** | Tài liệu dài hơn nhưng **thời gian đọc lại giảm rõ rệt** — giúp cả ba chốt trong một buổi họp |
| **Tìm ra bất đối xứng giữa A/B và C** | Đây là phần giá trị nhất: từ đó sinh ra ba quy tắc C1/C2/C3 |
| **Sinh trạng thái lỗi trước khi build** | Chọn ra trạng thái **sinh nhiều quan sát nhất** thay vì theo thứ tự |
| **Kiểm thử bằng máy** | Tìm 3 lỗi thật trong Option C mà đọc code không thấy |

### 6.3 AI sai ở đâu, và tôi tự sửa

| AI sai | Mức | Tôi tự sửa thế nào |
|---|:---:|---|
| **Đi nhanh từ solution sang giả định "thiếu kiến thức nền"** | 🔴 | Bỏ khỏi hypothesis; dùng dữ kiệc PN1/PN3 để viết lại thành *thiếu cầu nối* |
| **Diễn đạt pain nghe hợp lý nhưng chưa có evidence** | 🔴 | Giữ cả giá trị lẫn **giới hạn**; đánh dấu rõ chỗ nào còn là diễn giải |
| **Sinh nhiều "option" chỉ khác ở bề mặt** | 🔴 | Lọc bỏ; chỉ giữ ba cách **chia việc** khác nhau |
| **Viết bảo đảm giả** cho hệ thống | 🔴 | Đổi câu dẫn thành trung thực: AI giúp nhận ra cần kiểm tra gì, **không** thay người học kết luận |
| **Sinh câu hỏi interview có nguy cơ dẫn dắt** | 🟡 | Ghi rõ Q12 **không dùng** làm evidence |
| **Gợi ý cứng mốc thời gian trong câu mở** | 🟡 | Ghi **mốc thật quan sát được** thay vì câu chữ viết sẵn |
| **Sinh code nghe đúng nhưng không chạy** | 🔴 | Mở prototype ra kiểm, tìm 3 lỗi, sửa và chạy lại |
| **Tự kết luận từ hành vi do chính nó tạo ra** | 🟡 | Tách lớp *"đo sai"* khỏi *"sản phẩm sai"* trước khi báo cáo |

### 6.4 Nguyên tắc tôi giữ

1. **Không để AI tạo feedback, quote hay quan sát.** Phần feedback để trống có khung — điền bằng quan sát thật.
2. **Mọi quote phải truy vết được** về file nguồn kèm timestamp.
3. **AI output là giả thuyết, không phải fact.** Giữ các cách giải thích cạnh tranh thay vì chọn một cái ngay.
4. **Ghi cả phần AI sai.** Một bài nộp chỉ khoe AI giúp gì là chưa đủ trung thực.
5. **Không trình bày ba option như ngang hàng** nếu chưa nói rõ C dựa trên giả định chưa có chứng cứ.

---

## 7. Trạng thái bài nộp

| Hạng mục | Trạng thái |
|---|---|
| 1. Thông tin cá nhân & Đội ngũ | ✅ |
| 2. Hypothesis Problem | ✅ |
| 3. Three Solution Options | ✅ |
| 4. Đóng góp của tôi | ✅ |
| 5. Dữ liệu kiểm thử & Bài học | ⏳ **thiếu 3 phiên thật** |
| 6. AI Support Log | ✅ |
| Prototype Option C | ✅ *(đã tự kiểm, sửa 3 lỗi)* |
| Prototype Option A | ✅ **đã build + tự kiểm** — `prototype/options/A/self-check.js` |
| Prototype Option B | ✅ **đã build + tự kiểm** — `prototype/options/B/chat-diagnose.js` |
| Ba phiếu ghi chép | ⏳ **0/3 trên prototype RAG** · có 1 phiếu ở `TEAM/` nhưng scenario Excel |
| Next Change | ⏳ chờ đủ ba phiếu |

**Còn lại để hoàn tất:** deploy GitHub Pages rồi điền link · chạy ba phiên test thật · điền ba phiếu ghi chép · tổng hợp với Next Change.

> **Nhắc lại Cổng 5:** sau ba phiên test, **không** được viết ở đâu là *"Pain A đã được xác nhận"*, *"học viên cần ôn kiến thức nền"* hay *"AI đã chẩn đoán đúng"*. Tài liệu này chỉ ghi **quan sát** và **diễn giải của nhóm, đã đánh dấu là diễn giải**.

---

## 8. Đối chiếu 5 Cổng Đánh Giá Chất Lượng

Tự đối chiếu để reviewer kiểm nhanh. **Không phải** tự chấm điểm — cột cuối ghi rõ chỗ nào **chưa** có bằng chứng.

| Cổng | Tiêu chí đạt | Ở đâu trong bài | Trạng thái |
|---|---|---|---|
| **Cổng 1** — Evidence Continuity | Hypothesis gắn với dữ kiện thật Day 17, nêu ẩn số chưa biết | §2.1 (bảng 5 dữ kiện PN1/PN3) · §2.2 (3 ẩn số) · §2.3 (giới hạn evidence) | ✅ đạt · **không** tự đổi đề bài — nhóm đã sửa Pain A của chính mình |
| **Cổng 2** — Meaningful Options | Ba option khác nhau về **cơ chế / mức tự trị** | §3.1 (cơ chế) · §3.3 (bảng so sánh + 2 chiều khác biệt) | ✅ đạt · khác cả **cách chia việc** lẫn **thời điểm phát hiện** |
| **Cổng 3** — Human Control | Cả 3 có 4 trụ cột + đường thoát khi AI sai | `three-option-design-sheet.md` §"Bốn trụ cột" (Expectation · Agency · Evidence · Recovery) + C1/C2/C3 | ✅ đạt · có nút dừng, sửa được, quay lại được ở cả 3 |
| **Cổng 4** — Test-ready | Người ngoài tự mở link, tự làm trọn task ở cả A/B/C | `prototype-link.md` (cách mở, địa chỉ, quy tắc test) · `prototype/options/A` · `B` · `C` | ✅ **đạt về mặt build** — cả 3 chạy và đi trọn luồng, 48/48 pép kiểm tự động pass. Còn thiếu **link công khai** để người ngoài mở |
| **Cổng 5** — Learning, Not Praise | 3 Feedback Note + quy luật lặp + Next Change + Still Unproven | `prototype-feedback-note.md` (phiếu của tôi) · `group-feedback-synthesis.md` (bảng T1/T2/T3) | ⏳ **0/3 phiếu trên RAG.** Khung đã dựng, còn trống. 4 ứng viên Next Change đã ghi sẵn kèm điều kiện chọn |

**Hai điểm tôi nói thẳng, không đợi reviewer hỏi:**

1. **Cổng 4 vừa đóng được phần build, nhưng chưa đóng trọn vẹn.** Tôi đã dựng A và B và tự kiểm cả ba bằng trình duyệt thật — 48/48 phép kiểm pass. Phần còn thiếu là **link công khai**: Cổng 4 nói *"người ngoài tự mở link"*, nên nếu chỉ có file local thì chưa đạt nghĩa đầy đủ. Deploy GitHub Pages rồi điền link vào `prototype-link.md` là xong.
2. **Cổng 5 không thể đạt bằng cách viết thêm.** Nó chỉ đạt được bằng **3 phiên test thật**. Tôi đã để trống có khung thay vì điền sẵn — điền sẵn là bịa evidence, đúng loại vi phạm mà Cổng 5 cấm.

---

## 9. Cấu trúc repository

```text
Track1_Day18_2A202602407_DangVanThaiAnh/
├── README.md                      ← file này
├── three-option-design-sheet.md   ← thiết kế 3 option + Human–AI Decision Table
├── prototype-link.md              ← link mở A / B / C
├── prototype-feedback-note.md     ← phiếu ghi chép phiên do tôi điều phối
├── group-feedback-synthesis.md    ← tổng hợp 3 phiên + Next Change
└── ai-support-log.md              ← nhật ký ứng dụng AI

prototype/                         ← mã nguồn 3 micro-prototype
NHOM/                              ← tài liệu nhóm (tham chiếu, không nộp)
```

| Tệp | Nội dung | Mốc ưu tiên |
|---|---|---|
| `README.md` | Báo cáo tổng quan 6 mục | Đọc đầu tiên |
| `three-option-design-sheet.md` | Evidence · ba option · Decision Table · quy tắc chung | Cần căn cứ thiết kế |
| `prototype-link.md` | Cách mở từng option · địa chỉ deploy · quy tắc khi test | Cần mở prototype |
| `prototype-feedback-note.md` | **Phiếu của tôi** — bốn trạng thái mở đầu + bảng quan sát | **Chỉ tôi điền** |
| `group-feedback-synthesis.md` | So sánh T1/T2/T3 · pattern · Next Change · Still Unproven | Đọc sau khi đủ ba phiếu |
| `ai-support-log.md` | AI giúp gì · sai ở đâu · tôi tự sửa thế nào | Đọc để hiểu quy trình |
