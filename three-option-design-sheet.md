# Three-Option Design Sheet — Nhóm AAA, Case A (AI Tutor: Diagnostic Refresher)

> **Bản nộp chính của bài Day 18.** Dùng scenario **RAG / Hybrid Retrieval (RRF)** — khớp với prototype đã build tại `prototype/`.
> Bản tài liệu chung của nhóm nằm ở `NHOM/Chang_1_3.md` và `NHOM/Day18-chot-chung.md`. Bản `Day18-chot-chung.md` dựng trên scenario **Excel / PivotTable** — giữ làm tài liệu nhóm, **không** đưa vào bài nộp. Xem [`README.md`](README.md) §2.1.
> **Quy ước đánh số option trong bài nộp:** A = Bản đồ tự kiểm tra · B = Đối thoại đồng chẩn đoán · C = Agent theo dõi, rồi mở hội thoại. Dùng đúng quy ước này ở **mọi** tệp trong repo.

---

## Chặng 1 — Evidence Snapshot

| Practice Note | User đã thực sự làm / nói gì | Điều nhóm đang diễn giải |
|---|---|---|
| **PN1** — Thái Anh hỏi (có file nguồn + audio) | Học RAG, kẹt ở Hybrid Retrieval / RRF, mất **~1 tiếng**. Chuỗi hành vi theo đúng thứ tự kể: xem lại video → đọc lại slide → đọc documentation BM25 → search Google → xem video khác → hỏi ChatGPT → tìm một ví dụ thực tế. *"Cuối cùng điều gì đã giúp bạn hiểu?"* → **"Một ví dụ thực tế."** · *"Mất khoảng một tiếng"* — nhiều nhất là **tìm đúng cách giải thích** · *"Mình chỉ biết là mình không hiểu hybrid retrieval. Sau đó mình mới nhận ra là mình chưa hiểu rõ điểm mạnh và điểm yếu của BM25 với semantic search."* | Barrier là **khoảng cách giữa điều đã biết và việc dùng nó đúng lúc đang kẹt** — không phải thiếu kiến thức nền |
| **PN1 — episode lặp** | Tuần trước cũng kẹt ở embeddings: *"lúc đầu mình xem video và tưởng là hiểu. Nhưng khi tự implement thì mình bị kẹt."* | Mẫu **"xem hiểu → tự làm thì kẹt"** lặp ở **hai** episode |
| **PN3** — Trang hỏi (nội dung do Trang ghi, kèm timestamp) | Người học **đã biết** chuyện dữ liệu có thể bị lưu nhầm kiểu, nhưng **không nối được** điều đó với triệu chứng đang gặp *(03:27–03:54)*. Nguồn ngoài được viết cho người chưa từng gặp tình huống này trên dữ liệu thật của họ *(01:45–02:23)* | Phủ định Pain A (*"thiếu kiến thức nền"*) · phủ định luận điểm *"dùng nguồn ngoài là giải pháp"* |
| **PN2** — Trung hỏi | **⛔ Đã loại khỏi phạm vi** theo quyết định nhóm — **không** dùng làm căn cứ cho kết luận nào | Không đưa vào bài nộp |

**Lặp lại:** mẫu *"xem hiểu → tự làm thì kẹt"* lặp ở **hai episode** — nhưng của **một người** (PN1).
**Mâu thuẫn / bất ngờ:** PN1 thoát kẹt nhờ **ví dụ thực tế**, không nhờ ôn nền; Q12 của PN1 **bị dẫn dắt** nên không dùng làm evidence.
**Vẫn là suy đoán:** thiếu nền là bottleneck chính · *"copy code" là hành vi thật* · 1 tiếng là điển hình · pattern lặp ở người khác.

### Hypothesis Problem đã chốt

> **Khi** học viên tự học trực tuyến theo nhịp cá nhân — thường để áp dụng ngay vào một việc thật — **và** gặp một tình huống mà bài học khẳng định một điều, nhưng **không đưa ví dụ** để người học tự đối chiếu được, **họ gặp khó khăn trong việc xác định điểm vướng và dùng đúng những gì mình đã biết**, **vì** họ không biết mình **đã biết gì** hoặc **đang thiếu gì** có liên quan tới **đúng triệu chứng này**, và các nguồn ngoài đều được viết cho người chưa từng gặp đúng tình huống đó trong công việc thật của họ — **dẫn đến** lặp lại thao tác, dò nhiều nguồn không khớp, mất thời gian và gián đoạn luồng học; **đôi khi họ bỏ hẳn phần học tiếp theo dù vẫn hoàn thành được công việc trước mắt**.

> ⚠️ **Vế Situation đã sửa một lần — và đây là lý do.**
>
> `NHOM/Day18-chot-chung.md` §1.8 (bản chốt chung) viết Situation là *"gặp một tình huống mà **kết quả trên dữ liệu thật khác với hướng dẫn**"*. Đó là câu chữ của **scenario Excel** (PN3: PivotTable hiện Count thay vì Sum).
>
> Bài nộp này dùng **RAG**, nên tôi đổi vế đó. Không phải để cho khớp với prototype, mà vì:
> 1. **Không note nào ủng hộ.** PN1 — note duy nhất có file nguồn cho bản RAG — nói về **"không hiểu hybrid retrieval"** và **"thoát kẹt nhờ một ví dụ thực tế"**. Không note nào nói kết quả lệch hướng dẫn.
> 2. **Không khớp prototype.** Trong prototype không có dữ liệu thật, nên không có kết quả nào "khác hướng dẫn". Người học kẹt ở chỗ slide 12 khẳng định *"mỗi phương pháp có điểm mạnh riêng nên kết hợp"* mà **không kèm ví dụ**. Đó là *bài giảng thiếu ví dụ*, khác hẳn *kết quả lệch hướng dẫn*.
>
> Giữ nguyên vế cũ thì ba option A/B/C sẽ không giải đúng bài toán mà Hypothesis đặt ra → **vi phạm luật 1**. Ba thành tố còn lại (user · barrier · consequence) giữ nguyên vì vẫn đúng với cả hai note.

**Ba ẩn số chưa biết mang sang thiết kế:**

| # | Điều chưa biết | Ảnh hưởng tới thiết kế |
|---|---|---|
| 1 | Học viên có chấp nhận để AI **quan sát thao tác** của mình không? | Quyết định Option C có khả thi hay không |
| 2 | Lớp barrier nào phổ biến hơn — **thiếu ý thức** hay **thiếu cầu nối**? | Lớp 1 cần AI phát hiện trước; Lớp 2 thì dấu hiệu trên màn hình là đủ |
| 3 | Học viên chấp nhận tin AI tới mức nào? | Quyết định AI được phép nói thẳng, hay chỉ chỉ ra điều kiểm chứng được |

**Ghi chó trung thực về evidence:**

| Note | Trạng thái |
|---|---|
| **PN1** | ✅ Có file nguồn đầy đủ — mọi trích dẫn truy vết được |
| **PN3** | ⚠️ Nội dung do Trang ghi, kèm timestamp — trích dẫn theo bản ghi đó |
| **PN2** | ⛔ Đã loại khỏi phạm vi — không dùng làm căn cứ |
| **Q12 của PN1** | ⛔ **Không dùng** làm evidence — interviewer đưa sẵn hai phương án |

**Cổng 1 — Evidence Continuity:** ✅ đạt. Bám ít nhất một dữ kiện thật (PN1 Q8 *"Một ví dụ thực tế"*, PN3 03:27), nêu rõ ẩn số chưa biết, **không** tự ý đổi đề bài — nhóm đã **sửa** Pain A của chính mình sau khi đọc evidence.

---

## Chặng 2 — Ba Solution Options

**Câu hỏi sinh ra ba option:** **ai làm công việc định vị điểm vướng — người học, AI, hay cả hai?**

```text
Người học giữ phần lớn quyền  ◄──────────────────────────►  AI giữ phần lớn quyền

  A: Bản đồ tự kiểm tra     B: Đối thoại đồng         C: Agent theo dõi
     User-led                  chẩn đoán                 rồi mở hội thoại
     AI Don't Act             Human–AI co-create         AI-detects
                                                       user-decides
```

### Giữ nguyên cho cả A / B / C

| Thành phần | Quyết định chung |
|---|---|
| Target user | Học viên tự học online theo nhịp cá nhân |
| Situation | Bài Hybrid Retrieval — kẹt ở đoạn combine hai result lists (RRF) |
| Task | **Hiểu tại sao phải kết hợp BM25 với semantic search** |
| Desired outcome | Quay về đúng bài và tiếp tục được |
| Content / data fixture | Cùng một bộ: video có thanh tua · slide deck · đoạn code · dữ liệu **cứng**, không gọi model thật |
| Ràng buộc chung | Nút "Tôi vẫn chưa hiểu" ở cùng vị trí · ≤ 3 bước · không hứa *"giải thích tốt hơn"* · bỏ dở được bất cứ lúc nào |

### Được phép khác — cơ chế, không phải bề mặt

| Thành phần | **A** — Bản đồ tự kiểm tra | **B** — Đối thoại đồng chẩn đoán | **C** — Agent theo dõi, rồi mở hội thoại |
|---|---|---|---|
| **Solution mechanism** | Cây quyết định theo triệu chứng, điểm vào gắn thẳng với đúng triệu chứng đang hiện. Người học tự chọn nhánh, tự chạy từng phép kiểm tra | AI hỏi **2–3 câu thích ứng** chạm cả hai lớp barrier, nhận *"không biết"* là câu trả lời hợp lệ, **xếp hạng** các giả thuyết kèm dấu hiệu hỗ trợ / chống lại | Agent **quan sát thụ động** thao tác. Khi có **mẫu lặp kèm kết quả không đổi** trong cửa sổ 5 phút → hiện **một chỉ báo** kèm câu mở kiểm chứng được. Người học bấm thì mới mở hội thoại |
| **Người học làm gì** | Tự đi hết cây, tự ghi nhận kết quả | Trả lời 2–3 câu, chọn giả thuyết cần kiểm tra, **tự** chạy phép kiểm tra | Quan sát chỉ báo → **bấm hoặc bỏ qua** → tự kết luận |
| **AI làm gì** | Chỉ giải thích **một** bước khi được gọi. **Không** tự suy luận | Hỏi, thu hẹp, tóm tắt evidence đã dùng, **xếp hạng** giả thuyết | Đếm hành vi, ra chỉ báo, hỏi **một** câu rồi dừng |
| **AI Act / Ask / Don't Act** | **Don't Act** về chẩn đoán; Act khi được gọi | **Ask** (2–3 câu) → **Act** (tóm tắt, xếp hạng) | **Don't Act** (chỉ quan sát) → **Ask** (1 câu khi mở hội thoại) → **Don't Act** (không kết luận hộ) |
| **Thời điểm phát hiện** | Người học **tự nhận ra** mình kẹt rồi bấm | Người học **tự nhận ra** mình kẹt rồi bấm | **Không cần** tự nhận ra — AI phát hiện trước |
| **Trigger** | Nút "Tôi vẫn chưa hiểu" | Như A | **Tự động** khi đủ mẫu lặp — không cần bấm nút |
| **Trade-off chính** | Quyền kiểm soát cao nhất nhưng **tốn công nhất**, và có nguy cơ lặp lại đúng tình huống gốc | Cân bằng nhất, nhưng chất lượng **phụ thuộc hoàn toàn** vào câu trả lời — mà người học có thể không biết cách mô tả thứ mình chưa nhận ra | Effort thấp nhất, nhưng khi AI đọc sai thì người học **mất đi chính lợi thế tự kiểm** |

### Distance check — chứng minh ba option khác nhau về **bản chất**

- **A khác B vì:** ở A, AI **không tự suy luận** — người học tự đi hết. ở B, AI **hỏi thích ứng** và hai bên cùng dựng chẩn đoán.
- **B khác C vì:** ở B, người học là người **khởi động**, thông tin đến từ lời kể. ở C, **AI là người khởi động**, thông tin đến từ hành vi quan sát được.
- **A khác C vì:** A giữ **toàn bộ** quá trình ở phía người học. C đưa **việc phát hiện** sang AI trước.
- **Chiều khác biệt thứ hai — thời điểm phát hiện:** A và B cần người học tự nhận ra mình kẹt rồi bấm; C thì **không cần**.

**Bẫy đã loại vì chỉ khác ở bề mặt:** ba mức độ giải thích · ba nguồn AI · ba kiểu giao diện · ba chủ đề ôn · ba mức độ chủ động của AI. Tất cả khác *nội dung / hiệu suất* chứ không khác *cách chia việc* — loại vì phá Cổng 2.

**Cổng 2 — Meaningful Options:** ✅ đạt. Ba option giải **cùng một bài toán**, phân kỳ rõ về cơ chế **và** thời điểm phát hiện.

---

## Chặng 3 — Human–AI Decision Table

**Critical interaction:** từ lúc người học gặp kẹt (hoặc AI phát hiện) → đến lúc quay lại bài và tiếp tục được.

| Human–AI decision | **A** — Bản đồ tự kiểm tra | **B** — Đối thoại đồng chẩn đoán | **C** — Agent theo dõi |
|---|---|---|---|
| **User làm gì? AI làm gì?** | User chọn nhánh, chạy từng phép kiểm tra, tự kết luận. AI dựng cây theo triệu chứng, giải thích **một** bước khi được gọi | User trả lời 2–3 câu, đọc giả thuyết được xếp hạng, **tự** chạy phép kiểm tra. AI hỏi thích ứng, tóm tắt evidence đã dùng, **xếp hạng** | User **bấm** chỉ báo → đọc câu mở → tự tìm slide 13. AI đếm hành vi, ra chỉ báo, hỏi **một** câu rồi dừng |
| **AI Act / Ask / Don't Act?** | **Don't Act** về chẩn đoán; **Act** khi user gọi | **Ask** (2–3 câu) → **Act** (tóm tắt, xếp hạng) | **Don't Act** (chỉ quan sát) → **Ask** (1 câu) → **Don't Act** (không kết luận hộ) |
| **User hiểu capability / limit bằng gì?** | Cây hiện nguyên văn các bước — user thấy hết đường đi trước khi đi | Tóm tắt nêu rõ **AI dựa vào câu trả lời nào**; *"không biết"* được chấp nhận nên user không bị dồn vào chân tười | Chỉ báo ghi rõ **quan sát được gì, trong bao lâu** — không kèm nguyên nhân |
| **Evidence / uncertainty** | Mỗi phép kiểm tra ghi **điều kiện và kết quả mong đợi** trước khi chạy → user tự đối chiếu được | Mỗi giả thuyết gắn **dấu hiệu hỗ trợ / chống lại**; bác 2 lần → AI nói không chắc | Câu mở phải có **số đếm + mốc thời gian thật**. Nếu chưa đủ mẫu → **im**, không nói gì |
| **Kiểm soát & phục hồi** | Bỏ chọn ô, quay lại nhánh trước; mở lại bản đồ không mất phần đã đọc; thoát về bài ở mọi trạng thái | Sửa câu trả lời bất cứ lúc nào; *"Cả hai đều không đúng"* → AI dừng, hỏi 1 câu mở; thoát về bài | Nút **"Không phải, tôi không làm vậy"** ở **mọi** màn hình sau chỉ báo → AI dừng và **xoá toàn bộ suy đoán**; bỏ qua một lần → lần sau im, **nhưng** có nút tự mở lại; thoát về bài |
| **Chỗ người học tự nói ra lời mình** *(R1)* | Nút **"Đến lượt bạn kết luận"** xuất hiện ở bản đồ **sau khi đã chạy ít nhất một nhánh** → màn hình *"Viết bằng lời của bạn: vì sao phải kết hợp?"* AI **không** gợi ý trong ô này | Cùng một màn hình kết luận, cùng một câu hỏi — để so sánh công bằng | Sau khi kết luận xong, hệ thống **chỉ mời tiếp tục quan sát**, không hỏi thêm |
| **AI có được giải thích thay không?** | Nút **"Giải thích bước này giúp tôi"** ở mỗi phép kiểm tra, **chỉ dùng được một lần** cho cả phiên, giải thích **đúng một bước đang làm** chứ không phải nguyên nhân. Hết lượt → nút biến mất, không mở lại được | Không có bước nào để giải thích — vì ở B, thông tin đến từ **lời kể**, không phải từ một nhánh cụ thể | Câu mở **không** kèm lời giải thích nào — chỉ nói đã quan sát gì, trong bao lâu |
| **Nếu AI sai, user mất gì?** | Ôn nhầm phần; user **tự kiểm được** vì đã tự đi từng bước | Ôn nhầm phần; phải dựa vào dấu hiệu AI đưa để bác | Mất **lợi thế tự kiểm** — vì đã bấm chỉ báo thay vì tự tìm. Đây là rủi ro lớn nhất của C |

### Bốn trụ cột — bắt buộc cho Cổng 3

| Trụ cột | **A** — Bản đồ tự kiểm tra | **B** — Đối thoại đồng chẩn đoán | **C** — Agent theo dõi |
|---|---|---|---|
| **Expectation** — user biết trước sẽ thấy gì | Thấy **toàn bộ** cây quyết định trước khi bấm | Biết sẽ bị hỏi 2–3 câu rồi nhận xếp hạng giả thuyết | **Không biết AI sẽ nói gì** — nhưng luôn biết AI sẽ nói **về điều đã quan sát được**, không nói nguyên nhân |
| **Agency** — ai quyết | **User** giữ 100% quyết định | **Chia đôi** — user quyết giả thuyết, AI xếp hạng | **AI phát hiện**, nhưng **user quyết** có mở hội thoại hay không |
| **Evidence** — dựa vào cái gì để tin | Điều kiện + kết quả mong đợi của từng phép kiểm tra | Dấu hiệu hỗ trợ / chống lại từng giả thuyết | **Số đếm + mốc thời gian thật** trong nhật ký phiên |
| **Recovery** — AI sai thì làm gì | Tự chạy lại từ nhánh khác, không mất tiến độ | Bác giả thuyết, AI dừng và hỏi lại | Nút **"Không phải"** → xoá suy đoán · bỏ qua → im · **luôn** có nút *"Xem lại thao tác của tôi"* để tự mở lại · luôn có nút "Về bài học" |
| **R1 — ai viết kết luận** | ⬇️ **Cả ba đều để người học tự viết** ở một màn hình kết luận, cùng câu hỏi, cùng chỗ lưu (chỉ trong phiên) | ⬇️ | ⬇️ |

### Quy tắc chung áp cho cả ba option (R1–R6)

| # | Quy tắc |
|---|---|
| **R1** | Kết luận bằng **lời người học** — AI không kết luận hộ. Cả ba option đều có một màn hình kết luận, cùng câu hỏi, cùng chỗ lưu trong phiên |
| **R2** | AI **không quyết bước nào** sau khi người học bác |
| **R3** | Lối thoát "Về bài học" **luôn hiện** ở mọi trạng thái |
| **R4** | Không chắc thì **nói ra** |
| **R5** | Dấu hiệu lấy từ **trong bài**, không suy đoán năng lực người học |
| **R6** | Prototype **không thu thập, không lưu** dữ liệu tester; dữ liệu chỉ tồn tại trong phiên và người học tự xoá |

### Ba quy tắc riêng của Option C

> Thiếu ba quy tắc này thì C chỉ là một ý tưởng tệ.

| # | Quy tắc | Vì sao bắt buộc |
|---|---|---|
| **C1** | Câu mở phải là quan sát **kiểm chứng được** — có số đếm, có mốc thời gian thật. Không dùng *"tôi nghĩ"* | Không kiểm chứng được thì đừng bắt người học tin |
| **C2** | Người học nói *"không phải"* → AI **dừng và xoá toàn bộ suy đoán**, không cố giữ lập luận | Nếu AI đọc sai mà cố giữ lập luận → bằng chứng C **không đạt** |
| **C3** | Bỏ qua một lần → lần sau **im**, nhưng phải có **đường để tự mở lại** | Không có đường mở lại thì C3 biến *"từ chối"* thành *"bị khoá"* |

**Phạm vi theo dõi của C (quyết định chung, cả ba cùng chốt):** thu hẹp về **khung bài đang học** — video, slide, đoạn code — thay vì toàn màn hình. Cơ chế: `CTX.on(fn)` phát ra mọi hành động của tester (`video:seekBack`, `slide:revisit`, `code:copy`…). Agent **không đọc file, không ghi file, không đề xuất đổi dữ liệu, không tự mở hội thoại.**

**Cổng 3 — Human Control:** ✅ đạt. Cả ba option trả lời đủ bốn trụ cột **Expectation · Agency · Evidence · Recovery**, và cả ba đều có đường thoát khi AI sai.

---

## Rủi ro công khai

| # | Rủi ro | Hệ quả |
|---|---|---|
| 1 | **Cả ba option đều cần người học tự bấm** (riêng C thì không cần tự nhận ra, nhưng vẫn cần đủ mẫu lặp) | Nếu học viên ở Lớp 1 — chưa lặp lại vì chưa nhận ra mình đang kẹt — cả ba đều không được kích hoạt |
| 2 | **C dựa trên một giả định chưa có chứng cứ:** học viên chấp nhận bị AI quan sát | Nếu sai thì C sập. Cả hai note Day 17 chỉ ghi hành vi **chủ động** — chia sẻ với **đồng nghiệp** ≠ chia sẻ với **AI** |
| 3 | **Chuỗi hành vi mà C dựa vào là do nhóm tự dựng** | Đây là **điều kiện tiên quyết** để C hoạt động, và **không test được** bằng prototype |
| 4 | C **hấp dẫn hơn khi sai** | Trình bày C ngang hàng A và B mà không kèm giới hạn là để C thắng *vì được kể hay* |

**Đề xuất Next Change (chỉ là đề xuất, chưa phải quyết định):** nếu dữ liệu thật cho thấy tester ở Lớp 1 không bao giờ thấy gợi ý, cần một **đường tự mở không phụ thuộc mẫu lặp**. Nhưng làm vậy khiến C giống A và B → phá phép so sánh. **Cần đủ ba phiếu thật mới quyết.**

---

**Xem thêm:** [`README.md`](README.md) · [`prototype-link.md`](prototype-link.md) · [`group-feedback-synthesis.md`](group-feedback-synthesis.md)
