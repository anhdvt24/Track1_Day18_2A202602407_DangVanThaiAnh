# Day 18 — Chặng 1–3: Chốt chung Evidence · Ba Option · Human–AI Decisions

> **Mục đích:** một bản duy nhất để cả ba thành viên chốt trước khi build prototype.
> **Quyết định đã chốt:** giữ **một** Hypothesis Problem hợp nhất các note còn lại · prototype dựng trên **Excel PivotTable (Count thay vì Sum)** · phân công **A = Trung, B = Trang, C = Thái Anh** (theo luật 5: không ai test option mình làm).
> **Loại khỏi phạm vi:** **PN2** — quyết định của nhóm, không dùng làm evidence ở bản này.
> **Chờ bổ sung:** evidence **PN3** đang được ghi trong `NHOM/Chang_1_3.md` nhưng **file nguồn chưa được nộp vào folder** → xem §1.1.
> **Tài liệu gốc:** `NHOM/Chang_1_3.md` (Trang) · `NHOM/three-option-design-sheet.md` · `chang-1/2/3` (bản nháp cũ) · Day 17 `README.md` + `interview/note.md`
> **Nhóm AAA:** Đặng Văn Thái Anh (2A202602407) · Đàm Quang Trung · Nguyễn Thị Bảo Trang

---

# ⚠️ TRƯỚC KHI HỌP — 6 việc cần xử lý

| # | Việc | Vì sao | Ai |
|---|---|---|---|
| 1 | **Gửi file evidence PN3 vào folder** | Nội dung đã có trong `NHOM/Chang_1_3.md` nhưng **không có file note gốc** → reviewer không kiểm chứng được các trích dẫn kèm timestamp | Trang |
| 2 | **File `NHOM/Chang_1_3.md` ghi MHV 2A202602580, folder là 2A202602407** | Hai MHV khác nhau trong cùng bài nộp | Trang sửa |
| 3 | **Hai bản chốt khác nhau** — bản này dựng trên Excel, bản `three-option-design-sheet.md` dựng trên RAG | Vi phạm luật 1 nếu để cả hai trong bài nộp | Cả nhóm quyết định file nào chính |
| 4 | **PN3 ghi TODO trong `three-option-design-sheet.md` nhưng P03 đã có** | Hai thành viên tự ghi trạng thái khác nhau về cùng một note | Cập nhật |
| 5 | **Quote từ PN1 cần đối chiếu audio** | `interview/VinUniversity.m4a` có sẵn — nên mở ra kiểm lại các câu trích trước khi nộp | Thái Anh |
| 6 | **Xác nhận lại phạm vi theo dõi của Option C** (§2.2) | Nhóm đã chọn **theo dõi toàn màn hình**. Đây là lựa chọn rủi ro nhất — xem §2.2 và §X.1 mục 9 | Cả nhóm |

---

# CHẶNG 1 — Evidence

## 1.1 Trạng thái nguồn evidence

| Note | Trạng thái | Xử lý |
|---|---|---|
| **PN1** | ✅ Có đầy đủ: `interview/note.md` + `interview/VinUniversity.m4a` | Dùng làm evidence |
| **PN2** | ❌ **Đã loại khỏi phạm vi** theo quyết định của nhóm | Không dùng ở bản này — không dùng làm căn cứ cho bất kỳ kết luận nào |
| **PN3 (P03)** | ⏳ **Chờ bổ sung** — nội dung đã được Trang ghi vào `NHOM/Chang_1_3.md` kèm timestamp, nhưng **file note gốc chưa có trong folder** | Tạm dùng nội dung đã ghi, **đánh dấu là chưa kiểm chứng được**; bổ sung file rồi đối chiếu lại toàn bộ §1.1–§1.4 |

> **Cách đọc §1.1–§1.4 ở thời điểm hiện tại:** phần lấy từ **PN1** là evidence có thể truy vết ngay. Phần lấy từ **PN3** là **bản ghi của thành viên nhóm, chưa đối chiếu được với file nguồn** → mọi kết luận dựa trên PN3 đều là tạm thời.

## 1.2 Evidence Snapshot

> **Nguyên tắc:** cột giữa là **hành vi đã ghi**. Cột phải là **diễn giải của nhóm**, không phải lời người được hỏi.

| Note | Người hỏi | Người được hỏi | User đã thực sự làm / nói gì | Nhóm đang diễn giải |
|---|---|---|---|---|
| **PN1** | Thái Anh | Người học AI online | Học RAG, kẹt ở đoạn combine hai result lists. Workaround: xem lại video → đọc slide → Google → documentation → YouTube → ChatGPT → tìm ví dụ thực tế. *"Khoảng một tiếng."* | Có thể barrier là **chi phí tìm đúng cách giải thích**, không chỉ thiếu nền |
| **PN3 (P03)** ⏳ | Trang | Phan Thị Khánh Linh | Học PivotTable trên file thật, cột doanh thu hiện **Count thay vì Sum**, nút Sum bị mờ. Cộng thử dữ liệu gốc → tua lại video → tạo lại PivotTable (~10′) → tìm YouTube → gửi screenshot nhóm chat. Đồng nghiệp nhận ra cột bị hiểu là text. | Biết kiến thức nhưng **không nối được** với triệu chứng |

## 1.3 Điểm chung — có một sợi chỉ chạy qua cả hai note

Hai note khác chủ đề hoàn toàn (AI · Excel), nhưng **cơ chế thất bại giống nhau**:

```text
Học viên CÓ kiến thức hoặc từng gặp vấn đề tương tự
                ↓
Nhưng không có cách nào dùng nó đúng lúc đang kẹt
                ↓
Tìm nguồn ngoài — nguồn ngoài viết cho người chưa từng gặp
tình huống này trong dữ liệu thật của họ
                ↓
Lặp lại thao tác hoặc dò thêm nguồn
                ↓
Gián đoạn luồng học
```

**Hai note rơi vào hai lớp barrier khác nhau — và đây là lý do có thể hợp nhất:**

| Lớp | Mô tả | Note | Trích dẫn |
|---|---|---|---|
| **Lớp 1 — Thiếu ý thức** | Không biết mình đang thiếu gì | **PN1** | *"Mình chỉ biết là mình không hiểu hybrid retrieval. Sau đó mình mới nhận ra là mình chưa hiểu rõ điểm mạnh và điểm yếu của BM25 với semantic search."* |
| **Lớp 2 — Thiếu cầu nối** | Biết kiến thức nhưng không nối được với triệu chứng | **PN3** ⏳ | Đồng nghiệp phải xem screenshot mới nhận ra cột doanh thu bị hiểu là text — trong khi Linh đã biết chuyện số lưu dạng text |

> **Điểm quan trọng nhất của Chặng 1:** Barrier chung **không phải "thiếu kiến thức"**. Nó là **khoảng cách giữa điều đã biết và việc dùng nó đúng lúc đang kẹt**.
> **Hệ quả với Day 17:** Pain A của Day 17 (*"không xác định được kiến thức nền đang thiếu"*) **không còn được note nào hỗ trợ trực tiếp**. Cả hai note đều cho thấy người học **đã có** kiến thức và vẫn kẹt. Đây là lý do nhóm phải sửa hypothesis.

## 1.4 Evidence chi tiết từ PN3 (⏳ chờ file nguồn)

| Evidence quan sát được | Nguồn | Ý nghĩa có thể có — cần tiếp tục kiểm tra |
|---|---|---|
| Kết quả PivotTable chỉ có vài trăm trong khi doanh thu phải lớn hơn; Linh cộng thử dữ liệu gốc để xác nhận kết quả sai. | P03, 00:51–01:06 | Người học nhận ra triệu chứng và **chủ động kiểm chứng**, nhưng chưa biết nguyên nhân. |
| Linh nghĩ mình kéo nhầm cột hoặc thiếu bước, sau đó tua lại video và tạo lại PivotTable. | P03, 01:06–01:38 | Phỏng đoán ban đầu sai khiến người học lặp lại quy trình hiện tại. |
| Riêng bước tua lại và làm lại mất khoảng 10 phút hoặc hơn nhưng PivotTable vẫn hiện Count. | P03, 01:38–01:45 | Workaround có **effort cụ thể** và không tạo tiến triển. |
| Linh tìm video về lỗi Count thay vì Sum; video chỉ cách đổi phép tính nhưng không giải thích vì sao nút Sum bị mờ. | P03, 01:45–02:23 | Nguồn hướng dẫn chung **không bao phủ khác biệt** trong artefact thực tế. |
| Linh gửi **screenshot** vào nhóm chat; đồng nghiệp dùng dấu hiệu trong ảnh để nhận ra cột doanh thu đang được hiểu là text. | P03, 02:23–02:48 | Chẩn đoán chỉ đúng khi có **dấu hiệu nhìn thấy được**; và mức chia sẻ người học thực hiện được chỉ là **ảnh chụp màn hình** — không phải file. |
| Sau khi đổi cột sang dạng số và refresh, PivotTable hiển thị Sum đúng. | P03, 02:48–03:01 | Một phép kiểm tra cụ thể và có thể đảo ngược đã giúp xác minh nguyên nhân. |
| Báo cáo vẫn kịp, nhưng Linh bỏ phần video tiếp theo và không quay lại học sau khi làm xong báo cáo. | P03, 03:01–03:16 | Hậu quả quan sát được là **gián đoạn luồng học**, không phải trễ báo cáo. |
| Linh nói mình đã biết chuyện số lưu dạng text, nhưng không liên hệ kiến thức đó với triệu chứng hiện tại. | P03, 03:27–03:54 | Pain không nhất thiết là thiếu kiến thức nền; có thể là **thiếu cầu nối** giữa triệu chứng và kiến thức đã có. |

## 1.5 Evidence làm hypothesis Day 17 yếu đi

| Quan sát | Nguồn | Tác động |
|---|---|---|
| Người học **không thiếu** kiến thức nền: đã biết số có thể lưu dạng text | PN3 (03:27–03:54) ⏳ | **Phủ định Pain A** |
| Người học thoát kẹt nhờ **ví dụ thực tế**, không nhờ ôn nền | PN1 | Nghiêng về **Lớp 2** |
| Người học chỉ biết *"không hiểu"* chứ không biết thiếu gì, phải đến sau khi tự dò 6 nguồn mới nhận ra | PN1 | Đây là dạng **duy nhất** còn khớp Pain A — và chỉ 1 note |
| Nguồn ngoài không giải quyết được vì **không khớp artefact thực tế** — video chỉ nói cách đổi phép tính, không giải thích vì sao nút Sum bị mờ | PN3 (01:45–02:23) ⏳ | Nghiêng về **Lớp 2** |
| Người học chủ động **kiểm chứng** bằng cách cộng thử dữ liệu gốc trước khi tin vào kết quả | PN3 (00:51–01:06) ⏳ | Hành vi tích cực — **giảm thiểu rủi ro khi AI sai** |
| Chẩn đoán chỉ đúng khi có **dấu hiệu nhìn thấy được trong ảnh**, không chỉ bài học | PN3 (02:23–02:48) ⏳ | Định hình cả ba option |
| Người học **tự kiểm chứng kết quả trước khi tin** — cộng thử dữ liệu gốc, không hỏi ai | PN3 (00:51–01:06) ⏳ | **Quan trọng cho Option C**: user có sẵn thói quen tự kiểm → phản ứng với một AI *đọc sai* sẽ rất khó chịu |

## 1.6 Evidence mâu thuẫn / bất ngờ

| # | Phát hiện | Xử lý |
|---|---|---|
| 1 | **Cả hai note đều cho thấy người học ĐÃ CÓ kiến thức và vẫn kẹt** | Không được coi là "thiếu kiến thức nền" nữa |
| 2 | Người học thoát kẹt nhờ **ví dụ thực tế**, không nhờ ôn nền | PN1 |
| 3 | **Q12 của PN1 bị dẫn dắt 2 phương án** (nhóm Day 17 đã tự ghi nhận) | **Không dùng câu trả lời Q12 làm evidence** |
| 4 | Người học **tự cộng thử dữ liệu gốc** trước khi hỏi ai | PN3 ⏳ — phải đưa vào thiết kế, không được giả định user chỉ biết nhờ AI |
| 5 | Người học **đoán sai hướng** ngay từ đầu (*"nghĩ mình kéo nhầm cột hoặc thiếu bước"*) rồi mới tua video | PN3 ⏳ — Option A có nguy cơ lặp lại đúng tình huống gốc |
| 6 | ⚠️ **Không note nào cho thấy người học đồng ý bị theo dõi hành vi.** Cả hai note chỉ ghi hành vi **chủ động** (tự thử, tự cắt ảnh, tự nhắn đồng nghiệp) | Đây là căn cứ để **giới hạn scope prototype**: không có option nào được đọc hoặc ghi file của user, và Option C phải có cơ chế đồng ý rõ ràng. Xem §2.2 |

## 1.7 Vẫn là suy đoán (không dùng làm căn cứ)

| # | Suy đoán | Vì sao chưa được |
|---|---|---|
| 1 | "Thiếu kiến thức nền là bottleneck chính" | **Không note nào hỗ trợ** trong phạm vi hiện tại |
| 2 | "Đây là pattern chung của nhiều người học" | Hai note rơi vào hai tình huống rất khác; chưa ai lặp tình huống |
| 3 | "Người học không nhận ra / ngại thừa nhận mình chưa hiểu" (Pain C) | PN3 cho thấy user **nhận ra rất sớm** (cộng thử để kiểm chứng) |
| 4 | "Effort ~1 giờ là điển hình" | Chỉ PN1 có con số giờ; PN3 chỉ có effort **cục bộ** ~10 phút cho một bước. Không cùng đơn vị đo |
| 5 | "Người học sẵn sàng chia sẻ **ảnh chụp màn hình** cho AI" | **Chưa có evidence nào** — PN3 chỉ chia sẻ với *đồng nghiệp qua nhóm chat*. Chia sẻ với bạn bè **không** phải chia sẻ với AI |
| 6 | **"Người học sẵn sàng để AI theo dõi hành vi màn hình của mình"** | **Hoàn toàn chưa có evidence.** Cả hai note đều mô tả hành vi **chủ động**. Đây là giả định lớn nhất của cả tài liệu — xem §X.1 mục 9 |
| 7 | "'Copy code cho chạy' là hành vi thật" | Chỉ là câu giả định "nếu…" ở PN1 |

## 1.8 Hypothesis Problem chốt cho Day 18

> **Khi** học viên tự học trực tuyến theo nhịp cá nhân — thường để áp dụng ngay vào một việc thật — **và gặp một tình huống mà kết quả trên dữ liệu thật khác với hướng dẫn**, **họ gặp khó khăn trong việc xác định điểm vướng và dùng đúng những gì mình đã biết**, **vì** họ không biết mình **đã biết gì** hoặc **đang thiếu gì** có liên quan tới **đúng triệu chứng này**, và các nguồn ngoài đều được viết cho người chưa từng gặp tình huống đó trong dữ liệu thật của họ — **dẫn đến** lặp lại thao tác, dò nhiều nguồn không khớp, mất thời gian và gián đoạn luồng học; **đôi khi họ bỏ hẳn phần học tiếp theo dù vẫn hoàn thành được công việc trước mắt**.

*(In ra dán bảng:)*

```text
Khi [học trực tuyến theo nhịp cá nhân để áp dụng ngay vào việc thật,
và kết quả trên dữ liệu thật khác với hướng dẫn],
[học viên tự học] gặp khó khăn trong việc
[xác định điểm vướng và dùng đúng điều mình đã biết] vì
[không biết mình đã biết gì / đang thiếu gì có liên quan tới đúng triệu
chứng này; và nguồn ngoài viết cho người chưa từng gặp tình huống đó
trên dữ liệu thật của họ], dẫn đến
[lặp lại thao tác, dò nhiều nguồn không khớp, mất thời gian, gián đoạn
luồng học; đôi khi bỏ hẳn phần học tiếp theo].
```

**Ba điều chưa biết mang sang Chặng 2:**

| # | Điều chưa biết | Ảnh hưởng tới thiết kế |
|---|---|---|
| 1 | Người học có **chấp nhận để AI theo dõi hành vi màn hình** không? | Quyết định Option C có khả thi hay không |
| 2 | Hai lớp barrier — **Lớp 1 hay Lớp 2 xuất hiện nhiều hơn**? | Lớp 1 cần hỏi user trước; Lớp 2 thì dấu hiệu trên màn hình là đủ |
| 3 | Người học có **chấp nhận tin AI** tới mức nào? | Quyết định mức AI được phép nói thẳng, và có nên nói ra hành vi đã quan sát không |

## 1.9 GATE 1 — Evidence continuity

| Điều kiện | ✅ | Bằng chứng |
|---|---|---|
| User cụ thể | ✅ | Học viên tự học trực tuyến theo nhịp cá nhân, thường để áp dụng vào việc thật |
| Situation cụ thể | ✅ | Kết quả trên dữ liệu thực tế khác hướng dẫn |
| Job | ✅ | Xác định điểm vướng đủ nhanh để áp dụng đúng và tiếp tục bài |
| Barrier | ✅ | Thiếu cơ chế nối giữa điều đã biết và đúng triệu chứng này |
| Consequence | ✅ | Lặp thao tác, dò nhiều nguồn, gián đoạn; đôi khi bỏ hẳn phần học tiếp theo |
| Có observation Day 17 | ✅ | Chuỗi hành động + timestamp ở cả hai note |
| Có điều chưa biết | ✅ | 3 mục ở §1.8 |
| **Có tối thiểu hai note là hai nguồn riêng** | ⚠️ | Đủ 2/3 — nhưng **PN3 chưa có file nguồn trong folder**; PN2 đã loại khỏi phạm vi |

> ### Kết luận GATE 1: **PASS có điều kiện**
> Đủ 5 thành phần · có observation · có điều chưa biết. **Điều kiện:** (a) nhóm gửi file nguồn PN3 vào folder và đối chiếu lại §1.1–§1.6; (b) sửa MHV trong `NHOM/Chang_1_3.md`; (c) quyết định file nào là bản nộp chính.
>
> **Không tuyên bố validated.** Các note chỉ tạo input cho iteration, không chứng minh product value hay market demand (luật 7).

---

# CHẶNG 2 — Ba Solution Option

## 2.1 Câu hỏi sinh ra ba option

> **Ai làm công việc định vị điểm vướng — user, AI, hay cả hai?**

```text
User giữ phần lớn quyền  ◄───────────────────────────────►  AI giữ phần lớn quyền

  A: Bản đồ tự kiểm tra    B: Đối thoại đồng chẩn đoán    C: Agent theo dõi
     User-led, AI Don't Act    Human–AI co-create, Ask→Act     rồi mở hội thoại
```

Ba option nằm trên **cùng một trục phân bổ quyền định vị**, nên khác nhau về bản chất solution chứ không phải về bề mặt.

**Chiều khác biệt thứ hai — thời điểm phát hiện:**

| Option | Ai bắt đầu | Có cần user **tự nhận ra mình kẹt** không? | Khi nào AI biết |
|---|---|---|---|
| **A** | User | **Có** — phải bấm nút | Ngay khi user mở |
| **B** | User | **Có** — phải bấm nút | Sau 2–3 câu hỏi |
| **C** | **AI** | **Không** | Sau khi quan sát đủ lâu |

> **Đây là lý do C tồn tại, và nó không nằm ở "AI giữ nhiều quyền hơn".** C là option **duy nhất chạm được Lớp 1** (thiếu ý thức). A và B đều bắt đầu bằng việc user phải nhận ra mình đang kẹt rồi bấm nút — mà Lớp 1 tôi định nghĩa ở §1.3 **chính là** trường hợp người học không nhận ra.

## 2.2 Phạm vi theo dõi của Option C — nhóm đã chọn theo dõi toàn màn hình

Đây là quyết định của nhóm. Bảng dưới ghi rõ cái giá kèm theo, vì **đây là chỗ rủi ro nhất của cả tài liệu** và không nên giấu.

| | Ghi lại | Được nói với | Bắt buộc phải công khai |
|---|---|---|---|
| **Phạm vi ghi** | **Toàn màn hình** — mọi cửa sổ, mọi ứng dụng, trong suốt phiên học | **Chỉ nội dung bài đang học** | Phạm vi ghi rộng hơn phạm vi nói — và người học phải biết điều này |

**Vì sao đây là lựa chọn rủi ro — ba lý do cụ thể, không nói chung chung:**

1. **Evidence cho thấy màn hình người học có thể chứa việc thật.** PN3 ghi người học đang làm PivotTable cho một báo cáo có deadline — tức là lúc đó trên màn hình có thể còn dữ liệu doanh thu, khách hàng, và **việc khác không liên quan tới bài học**. Theo dõi toàn màn hình nghĩa là agent có thể thấy những thứ này.
2. **Không có evidence nào cho thấy người học đồng ý với điều đó.** Cả hai note chỉ ghi hành vi **chủ động** — tự thử, tự cắt ảnh, tự nhắn đồng nghiệp (§1.6 mục 6). Suy đoán *"người học sẵn sàng cho AI theo dõi màn hình"* **chưa có một chứng cứ nào** (§1.7 mục 6).
3. **Mở rộng phạm vi ghi không làm tăng chất lượng chẩn đoán trong tình huống này.** Mọi tín hiệu hữu ích — tua lại đoạn video, mở lại menu, thử lại — đều nằm **trong khung bài học**. Ghi thêm ngoài bài học gần như không tăng gì cho prototype này.

> **Ba hệ quả bắt buộc, do nhóm chấp nhận rủi ro đó:**
> 1. Prototype **không dùng dữ liệu thật của tester**. Nhật ký hành vi là **kịch bản dựng sẵn**. Không có yêu cầu nào cho tester cấp quyền theo dõi màn hình thật.
> 2. **Màn hình dùng để test phải là dữ liệu giả** — không có tên khách hàng, không có doanh thu thật. Nói trước với tester để họ không vô tình đưa việc thật vào.
> 3. Nếu tester **không bấm** chỉ báo → đó là một kết quả hợp lệ, phải ghi lại. Đừng diễn giải thành "AI không phát hiện được".

## 2.3 Ràng buộc scope — điều prototype được phép và không được phép làm

Bảng này áp dụng cho **cả ba** prototype.

| Hành động | **A** | **B** | **C** | Căn cứ |
|---|:---:|:---:|:---:|---|
| Đọc nội dung bài đang học | ✅ | ✅ | ✅ | nằm trong phạm vi tự học |
| Hỏi user câu hỏi | ❌ | ✅ | ✅ | A không hỏi vì thiết kế user-led |
| **Ghi nhật ký hành vi màn hình** | ❌ | ❌ | ✅ *theo kịch bản* | chỉ C cần; prototype dùng dữ liệu giả |
| **Đọc file của user** | ❌ | ❌ | ❌ | **không note nào** cho thấy người học tự học đưa file cho AI |
| **Ghi / sửa file của user** | ❌ | ❌ | ❌ | nằm ngoài phạm vi; và không có prototype nào cần để giải quyết barrier |
| **Đề xuất thay đổi lên dữ liệu** | ❌ | ❌ | ❌ | user tự làm — barrier nằm ở *nhận ra*, không ở *thực thi* |
| **Tự mở hội thoại** | ❌ | ❌ | ❌ | C chỉ hiện chỉ báo, user bấm mới mở |

**Ba hệ quả bắt buộc:**

1. **Không có prototype nào có nút "áp dụng sửa file".** Đừng thêm nút này chỉ để ba option trông giống nhau — làm vậy là phá comparison.
2. **C không bao giờ tự bắt đầu hội thoại.** Đây là ranh giới giữ "AI chủ động phát hiện" và "AI áp đặt".
3. **Kết quả test phải ghi riêng:** với C — tester có bấm chỉ báo không, mở hội thoại rồi có đóng sớm không. Không ghi thì không phân biệt được C thắng vì thiết kế hay vì tester cởi mở với AI.

## 2.4 Comparison Contract

| Thành phần phải giữ nguyên | Quyết định chung cho A / B / C |
|---|---|
| **Target user** | Học viên tự học kỹ năng trực tuyến theo nhịp cá nhân để áp dụng ngay vào công việc |
| **Situation** | Làm theo video hướng dẫn PivotTable nhưng trên **file thật**; cột doanh thu trong Values hiện **Count** thay vì **Sum**, tùy chọn Sum bị mờ |
| **Job** | Xác định nguyên nhân, thực hiện một bước kiểm tra an toàn **tự tay**, rồi quay lại tiếp tục bài |
| **Desired outcome** | Hiểu **vì sao** kết quả khác hướng dẫn, tự làm được phép kiểm tra, và tiếp tục phần học đang dang dở |
| **Data fixture** | Cùng video hướng dẫn · cùng ảnh chụp màn hình PivotTable (**cây giả lập, không phải file của tester**) · cùng hiện tượng Count/Sum · cùng dấu hiệu nút Sum bị mờ · cùng nguyên nhân thật (cột doanh thu bị hiểu là text) · cùng áp lực deadline báo cáo cuối ngày. **Thêm cho C:** một kịch bản ~8–10 hành động màn hình gồm hành vi kẹt thật (tua lại, mở lại menu, thử lại) |
| **Success signal** | Học viên **tự nêu** được dấu hiệu, chọn được phép kiểm tra phù hợp, tự thực hiện, và biết cách trở lại bài |
| **Ràng buộc kỹ thuật** | Dữ liệu cứng, **không gọi model thật** khi test — nếu không thì mỗi lần ra kết quả khác nhau, không so sánh được, và tester 2 sẽ thấy khác tester 1 |
| **Ràng buộc scope** | Theo §2.3 — không đọc / không ghi file của user; không tự mở hội thoại |
| **Điều kiện dừng** | Tester được phép bỏ dở bất cứ lúc nào; **không** ghi nhận là "fail" |

## 2.5 Ba Solution Option

| Thành phần | **A — Bản đồ tự kiểm tra** | **B — Đối thoại đồng chẩn đoán** | **C — Agent theo dõi, rồi mở hội thoại** |
|---|---|---|---|
| **Mô hình phối hợp** | User-led | Human–AI co-create | AI-detects, user-decides |
| **Solution mechanism** | Cây quyết định theo triệu chứng. User tự chọn nhánh, chạy từng phép kiểm tra. AI **chỉ giải thích khi được gọi**. | AI hỏi 2–3 câu thích ứng về triệu chứng và thao tác đã làm. User trả lời. Hai bên cùng thu hẹp nguyên nhân. | Agent **quan sát thụ động**, ghi nhật ký hành vi màn hình. Khi nhận ra mẫu lặp (tua lại cùng một đoạn, mở lại cùng một menu, thử lại không đổi kết quả) thì **hiện một chỉ báo nhỏ** kèm **một câu mở có thể kiểm chứng**. **User bấm** thì mới mở hội thoại. |
| **User làm gì** | Chọn triệu chứng, tự kiểm tra kiểu dữ liệu / thiết lập, xác nhận kết quả từng bước | Mô tả mục tiêu, trả lời câu hỏi, chọn giả thuyết cần kiểm tra, tự chạy phép kiểm tra | Không cần làm gì để bắt đầu. Quyết định **bỏ qua hay bấm** chỉ báo. Nếu bấm: xem câu mở, **sửa được nếu AI nói sai**, chọn giả thuyết, tự chạy phép kiểm tra |
| **AI làm gì** | Hiện checklist / cây quyết định, giải thích một bước khi được gọi. **Không** tự suy luận. | Đặt câu hỏi, tổng hợp evidence, xếp hạng nguyên nhân, đề xuất phép kiểm tra an toàn tiếp theo | **Quan sát và ghi lại.** Khi đủ bằng chứng thì **chỉ ra điều nó thấy** (*"đoạn 02:10 bạn xem lại 3 lần trong 4 phút"*) — **không** kết luận nguyên nhân. Hỏi **một câu** rồi dừng. **Không** đọc file, **không** ghi file, **không** đề xuất đổi dữ liệu |
| **AI Act / Ask / Don't Act** | **Don't Act** cho tới khi được gọi | **Ask** trước; **Act** (xếp hạng giả thuyết) khi đã có evidence tối thiểu | **Act** ở phần *phát hiện* (được chấp nhận sẵn khi bật). **Don't Act** ở phần *nói* — chỉ hiện chỉ báo, không tự mở hội thoại. **Ask** trước mọi điều tiếp theo |
| **Ai giữ quyền quyết định cuối** | **User** | **User** | **User.** Cả ở bước có nghe AI không, lẫn bước sau đó |
| **Effort user** | Cao nhất — tự đi hết cây | Trung bình — trả lời 2–3 câu | Thấp nhất — có thể bỏ qua hoàn toàn |
| **Rủi ro chính** | User **không biết bắt đầu từ đâu** | Phụ thuộc câu trả lời user — mà user **không biết cách mô tả** thứ mình chưa nhận ra | **AI đọc sai người học và người học không có cách nào kiểm chứng** (xem §2.6) |
| **Điều phải đúng để option này đúng** | Cây kiểm tra có **điểm vào cụ thể** từ đúng triệu chứng, không phải một cây lớn bắt user tự lọc | Câu hỏi AI hỏi phải chạm được **cả hai lớp barrier** (§1.3), và phải chấp nhận "không biết" như câu trả lời hợp lệ | Câu mở phải là **thứ user tự xác minh được** bằng trí nhớ, và phải **sai được** mà không mất gì |
| **Evidence sẽ bác bỏ option này** | Tester mở ra, đứng yên 30 giây không biết bấm gì, hoặn chạy hết cây mà vẫn không ra nguyên nhân | Tester trả lời *"không biết"* phần lớn các câu hỏi, hoặc nói *"2 cái giống nhau"* | Tester **không bấm** chỉ báo, hoặc bấm rồi đóng sớm vì thấy bị theo dõi, hoặc nói *"sai, tôi không xem lại đoạn đó"* và thấy hội thoại vẫn tiếp diễn như thể đó là sự thật |

## 2.6 Vấn đề lớn nhất của Option C — nói thẳng, không làm cho có

C là option hấp dẫn nhất khi đúng và tệ nhất khi sai. Tôi ghi rõ vì nhóm cần biết mình đang mua gì:

```text
A:  AI đưa hướng dẫn sai  →  user tự làm  →  user thấy ngay sai
                              (kiểm chứng được)

B:  AI hỏi sai hướng      →  user trả lời "không biết"  →  user thấy ngay
                              (kiểm chứng được)

C:  AI đọc sai người học  →  user không có cách nào biết mình bị đọc sai
                              (KHÔNG kiểm chứng được)
```

> **Đây là bất đối xứng cốt lõi.** Với A và B, khi AI sai thì user có đường thoát vì **user là người cung cấp thông tin**. Với C, thông tin đến từ chính hành vi của user — nên khi AI hiểu sai, user bị mất đi chính cái lợi thế đó.
> **Hệ quả nặng nhất:** nếu tester có thói quen **tự kiểm chứng kết quả trước khi tin** — đúng như PN3 ghi (*"cộng thử dữ liệu gốc để xác nhận kết quả sai"*) — thì họ sẽ **phản ứng mạnh** với một AI bảo họ *"tôi thấy bạn…"* khi thật ra chỉ là suy đoán. Họ sẽ cảm thấy bị theo dõi, không phải được giúp.

**Ba quy tắc thiết kế sinh ra từ bất đối xứng này — không có thì C là một ý tưởng tệ:**

| # | Quy tắc | Vì sao |
|---|---|---|
| **C1** | Câu mở phải là **quan sát kiểm chứng được**, không phải suy đoán. Đúng: *"đoạn 02:10 bạn tua lại 3 lần trong 4 phút"*. Sai: *"tôi nghĩ bạn đang kẹt ở đây"* | Người học phải tự biết AI có đúng không. Nếu không kiểm chứng được thì đừng bắt họ tin |
| **C2** | **Luôn để user sửa được trước khi hội thoại đi tiếp.** Nếu user nói *"sai, tôi không xem lại đoạn đó"*, AI **dừng và xoá nhật ký suy đoán** — không đi tiếp từ một tiền đề sai | Nếu sửa vẫn bị kéo theo thì "cho user quyền" chỉ là hình thức |
| **C3** | Nếu user bỏ qua chỉ báo **một lần**, lần sau phải **im**. Không hiện lại | Bị theo dõi là cảm giác xâm phạm. Người học đã nói "không" thì phải được tôn trọng ngay |

## 2.7 Distance check

- **A khác B vì:** A yêu cầu user tự đi theo cây kiểm tra và AI **không** tự suy luận; B dùng câu hỏi thích ứng để hai bên cùng xây chẩn đoán.
- **B khác C vì:** B **hỏi** và dựa vào mô tả bằng lời của user; C **quan sát trước**, không hỏi gì cho tới khi user đã bấm. Ở B, user là người khởi động; ở C, AI là người khởi động.
- **A khác C vì:** A giữ **toàn bộ** quá trình kiểm tra ở phía user và không cần đưa gì ra ngoài; C đưa **việc phát hiện** sang AI trước, nhưng vẫn để user tự chạy phép kiểm tra và tự quyết định có nghe hay không.

## 2.8 Bẫy đã loại (luật 2)

| ❌ Trông như option nhưng **không** phải | Vì sao |
|---|---|
| 3 mức độ giải thích (ngắn / vừa / dài) | Khác ở *nội dung đầu ra*, giống nhau ở *cách chia việc* |
| 3 nguồn hướng dẫn (video / blog / diễn đàn) | Khác *hiệu suất*, không khác *cách phân công* |
| 3 kiểu giao diện (khác màu / wording / layout) | Không đổi interaction nào |
| 3 chủ đề Excel khác nhau | Đây là ba *nội dung*, không phải ba *cách* |
| 3 mức độ chủ động của AI | Chỉ là ba mức của cùng một hướng |
| **AI đọc / sửa file của user** | Vượt scope người học tự học — không phải option, chỉ là hành vi không được phép |
| **C theo dõi hẹp hơn rồi mở rột dần** | Cùng cơ chế, chỉ khác ngưỡng — không phải option khác |

## 2.9 GATE 2 — Meaningful options

| Tiêu chí | ✅ |
|---|---|
| Cùng target user, situation, task, desired outcome | ✅ |
| Cùng data fixture | ✅ |
| **Cùng nằm trong phạm vi người học tự học** | ✅ — không option nào đọc/ghi file (§2.3) |
| Khác nhau về **mechanism** và **division of labor** | ✅ |
| Giải thích được khác biệt **không** nhắc màu / layout / wording | ✅ |
| Không cố tình làm một option kém | ⚠️ **Có điều kiện** — xem ghi chú dưới |

> ### Ghi chú Gate 2 — điểm nhóm cần ghi nhận
> Ba option vẫn **khác nhau về bản chất và về cách chia việc** → đạt luật 2.
>
> **Nhưng có một điểm bất lợi với C phải nói thẳng:** C hấp dẫn ở câu chuyện *AI chủ động phát hiện giúp người học*, và câu chuyện đó **dễ thuyết phục hơn A và B trong khi bằng chứng chưa đủ**. Nếu nhóm trình bày C như một option ngang hàng mà không kèm §2.6 và §X.1 mục 9, thì C sẽ thắng **vì được kể hay**, không phải vì thiết kế tốt.
>
> **Cách trình bày công bằng:** nêu rõ C là option **duy nhất chạm Lớp 1**, đồng thời nêu rõ C **không thể test được phần quan trọng nhất** của nó (§X.1 mục 3) và **dựa trên một giả định chưa có chứng cứ** (§X.1 mục 9).

---

# CHẶNG 3 — Human–AI Decision Table

## 3.1 Critical interaction

> Tại thời điểm người học đã nhiều lần thử lại một thao tác mà kết quả không đổi, nhưng **chưa biết mình đang kẹt** — hệ thống phải giúp họ **nhận ra điều đó bằng một quan sát kiểm chứng được**, mà **không tước quyền quyết định** và **không đụng vào dữ liệu của họ**.

> ⚠️ Lưu ý: ở **A và B**, "tại thời điểm này" đã giả định user đã nhận ra và bấm nút. Chỉ **C** đúng với tình huống *"chưa nhận ra"*. Đây là khác biệt bản chất, không phải khác biệt diễn đạt.

## 3.2 Ba tiêu chí — định nghĩa để tránh nói cho có

| Từ khoá | PHẢI trả lời | **KHÔNG** được tính là |
|---|---|---|
| **Hiểu** | Sau mỗi bước, user có đủ thông tin để nói *"mình đang ở đâu, và vừa xảy ra điều gì"*? | Văn bản dài. **Đọc xong không tự tóm tắt lại được thì không phải hiểu.** |
| **Kiểm soát** | Ở bước nào còn đổi hướng được? Ai bấm quyết cuối? | Có nút bấm. Nút dẫn tới thay đổi không đảo ngược được thì là **chỉ báo**, không phải kiểm soát. |
| **Phục hồi** | Quay lại được đâu, mất mấy thao tác, có mất phần đã làm không? | Nút "Quay lại" cuối trang. Phục hồi phải **giữ được** phần đã làm. |

## 3.3 Bảy quy tắc chung cho cả ba prototype

| # | Quy tắc | Vì sao |
|---|---|---|
| **R1** | Mọi kết luận viết bằng **lời của người học**, không dùng từ chuyên môn chưa giải thích | Hiểu là tiêu chí của lab; dùng từ chuyên môn sẽ chặn cả ba option cùng lúc |
| **R2** | **AI không quyết bước nào sau khi user đã bác.** Bác = dừng tại chỗ, không phải "ghi nhận để lần sau" | Nếu bác không được thì quyền của user chỉ là hình thức |
| **R3** | Ở **mọi** trạng thái có lối thoát thẳng về bài, nhìn thấy được, không cần cuộn | "Bỏ dở" phải là hành vi quan sát được, không phải bị nhốt |
| **R4** | Khi không chắc, AI **phải nói ra là không chắc** và đưa phương án khác — không kết luận rồi im lặng | Đây là chỗ "AI chịu trách nhiệm" có thật hay không |
| **R5** | Dấu hiệu lấy từ **màn hình / bài đang học**, không suy đoán về năng lực người học | Gán nhãn kiểu "bạn làm sai ở bước…" là suy đoán, không phải evidence |
| **R6** | Prototype **không thu thập, không lưu** dữ liệu thật của tester | Test về hành vi, không phải về dữ liệu người dùng |
| **R7** | **Không option nào đọc hoặc ghi file của user** | Vượt scope người học tự học trực tuyến — xem §2.3 |

## 3.4 Human–AI Decision Table

| **Human–AI decision** | **A — Bản đồ tự kiểm tra** | **B — Đối thoại đồng chẩn đoán** | **C — Agent theo dõi, rồi mở hội thoại** |
|---|---|---|---|
| **User làm gì? AI làm gì?** | User tự chọn nhánh triệu chứng, chạy phép kiểm tra, ghi nhận kết quả. AI cung cấp cấu trúc kiểm tra và giải thích khi được gọi. | User trả lời câu hỏi, chọn giả thuyết, xác nhận từng kết quả. AI hỏi thích ứng, tóm tắt evidence, xếp hạng nguyên nhân. | Agent **quan sát và ghi nhật ký**, khi đủ bằng chứng thì **hiện chỉ báo nhỏ với một câu mở kiểm chứng được**. User **bấm** thì mới mở hội thoại và trả lời **một câu**. AI **không** đọc/ghi file, **không** đề xuất đổi dữ liệu. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Don't Act** cho tới khi user yêu cầu — option này ưu tiên agency, giảm suy luận ngoài ý muốn. | **Ask** trước vì AI chưa đủ ngữ cảnh; chỉ **Act** để đề xuất phép kiểm tra khi đã có evidence tối thiểu. | **Act** ở phần *phát hiện* — đây là thứ user **đã bật**, nên không hỏi lại. **Don't Act** ở phần *nói* — chỉ hiện chỉ báo, **không tự mở hội thoại**. **Ask** trước mọi điều tiếp theo. Vì người học tự học online **không có file công việc để đưa vào**, mọi hành động lên file đều vượt scope. |
| **User hiểu capability bằng gì?** | *"Tôi sẽ hướng dẫn bạn tự kiểm tra từng khả năng; tôi không đọc file hay tự chẩn đoán."* | *"Tôi sẽ hỏi vài câu, dùng câu trả lời của bạn để đề xuất nguyên nhân cần kiểm tra."* | *"Tôi quan sát thao tác của bạn trong bài này. Khi thấy bạn thử lại nhiều lần mà không đổi, tôi sẽ hiện một gợi ý. Tôi không mở file và không sửa gì cả."* — **phải nói rõ trước khi bật** |
| **User hiểu limit bằng gì?** | Checklist có thể không bao phủ lỗi đặc thù; không xác nhận được nguyên nhân nếu user không chạy phép kiểm tra. | Đề xuất phụ thuộc độ đầy đủ của câu trả lời; có thể còn nhiều nguyên nhân khả dĩ. | *"Tôi chỉ thấy thao tác trên màn hình, không biết bạn đang nghĩ gì. Tôi có thể nhận nhầm — nếu thấy tôi nói sai, bạn sửa hoặc đóng là xong."* |
| **Evidence AI dựa vào** | Nhánh triệu chứng user chọn + kết quả từng phép kiểm tra user xác nhận. | Mục tiêu mong đợi, hiện tượng Count/Sum, trạng thái nút Sum, thao tác đã thử. | **Chuỗi thao tác quan sát được trong bài**: đoạn nào được tua lại, mở lại bao nhiêu lần, thao tác lặp với kết quả không đổi. **Không** suy đoán ý định. |
| **Evidence hiện cho user thế nào?** | Từng bước ghi rõ *"Dấu hiệu cần tìm"* và *"Nếu có / không thì nhánh tiếp theo là gì"*. | Tóm tắt evidence đã dùng; **mỗi giả thuyết gắn với dấu hiệu hỗ trợ / chống lại nó**. | Chỉ ra **đúng hành vi đã quan sát, có số đếm và mốc thời gian**: *"Bạn đã tua lại đoạn 02:10 ba lần trong bốn phút, và kết quả vẫn hiện Count."* **Không** kèm kết luận nguyên nhân. |
| **Uncertainty thể hiện thế nào?** | **Không** tuyên bố nguyên nhân trước khi user xác nhận; dùng trạng thái *"chưa kiểm tra / đã loại trừ / đã xác nhận"*. | Nhiều giả thuyết được xếp hạng, mức chắc chắn **định tính**, evidence còn thiếu. **Tránh phần trăm chính xác giả tạo.** | Câu mở phải ở dạng **quan sát có số đếm** (kiểm chứng được) chứ không phải dạng *"tôi nghĩ"*. Nếu chuỗi hành vi chưa đủ chắc thì **không hiện chỉ báo** — im còn hơn nói bậy. |
| **User kiểm soát ở đâu?** | Bỏ qua bước · quay lại nhánh trước · tự chọn nhánh khác · đóng trợ giúp · về bài học bất cứ lúc nào. | Sửa câu trả lời · yêu cầu giả thuyết khác · từ chối đề xuất · bắt đầu lại. | **Tắt theo dõi bất cứ lúc nào** (không cần giải thích) · bỏ qua chỉ báo · **sửa câu mở nếu AI nói sai** · đóng hội thoại ngay lập tức · xoá nhật ký phiên · về bài học. **Không có chức năng sửa / ghi file.** |
| **Recovery nếu AI / hướng dẫn sai** | Quay về checkpoint trước, thử nhánh khác, hoặc tạo gói thông tin để hỏi mentor / đồng nghiệp. | Undo câu trả lời / nhánh, xem lại evidence, thử giả thuyết khác, escalation kèm tóm tắt đã thử. | Bỏ qua chỉ báo và tiếp tục học. Nếu đã bấm và thấy sai → nói *"không phải"*, AI **dừng và xoá suy đoán**. Bật lại tự do, cần nhật ký cũ thì tự bấm. |
| **Ai quyết định cuối?** | User quyết định phép kiểm tra và thay đổi. | User quyết định giả thuyết nào kiểm tra và có tự làm không. | User quyết định **có nghe AI không** và có làm không. **AI không đọc và không ghi bất kỳ file nào.** |
| **Hậu quả nếu AI sai** | User mất thêm thời gian hoặc đi sai nhánh — **nhưng dữ liệu không bị tự động thay đổi**. | User kiểm tra sai nguyên nhân, mất thời gian; rủi ro giảm nhờ mỗi phép kiểm tra đều đảo ngược được. | **Cảm giác bị theo dõi** — không phải tổn thất dữ liệu, mà là tổn thất **quan hệ**. Nếu C sai một lần rồi còn tiếp tục, người học sẽ không bao giờ bật lại. Vì vậy C2 và C3 (§2.6) là bắt buộc, không phải tuỳ chọn. |

## 3.5 Chấm ba tiêu chí

| | **Hiểu** | **Kiểm soát** | **Phục hồi** |
|---|---|---|---|
| **A** | 🟡 Thấp nhất — user tự đi nên không có gì để "hiểu" ngoài checklist | 🟢 Cao nhất | 🟢 Cao — quay lại nhánh trước không mất gì |
| **B** | 🟢 Cao — buộc user nói ra suy nghĩ của mình | 🟢 Cao | 🟢 Cao — undo được từng bước |
| **C** | 🟡 **Phụ thuộc câu mở** — nếu AI nói đúng thì rất sắc; nếu nói sai thì người học mất niềm tin ngay | 🟡 **Thấp nhất về mặt hiểu biết** — user không biết AI đã thấy gì cho tới khi AI nói ra | 🟢 Cao nhất — bỏ qua chỉ báo là xong, không mất gì |

> **Đọc đúng cách:** ba cột **không đi theo một hướng**. C ở cột *kiểm soát* thấp nhất, nhưng lại ở cột *phục hồi* cao nhất — vì thao tác bỏ qua một chỉ báo gần như không tốn gì. Đây là đặc điểm riêng của option thụ động: **rủi ro nằm ở việc bị thấy, không nằm ở việc mất dữ liệu**.
> **Câu hỏi thật cho Chặng 6 không phải "C mạnh hay yếu"** mà là: **người học có chịu được việc AI nhìn thấy mình thử sai không?** — và câu hỏi đó chỉ trả lời được bằng hành vi thật của tester, không trả lời bằng lập luận.

## 3.6 Khoảng trống thiết kế — mỗi option có một chỗ dễ hỏng, phải xử lý trước khi build

| Option | Khoảng trống | Quyết định thiết kế |
|---|---|---|
| **A** | User **không biết bắt đầu từ đâu**. PN3 cho thấy user đã tự thử và **đoán sai hướng** (*"nghĩ mình kéo nhầm cột hoặc thiếu bước"*) → A có nguy cơ lặp lại đúng tình huống gốc | Cây kiểm tra phải có **điểm vào gắn với đúng triệu chứng** đang hiện trên màn hình, không phải một cây lớn bắt user tự lọc |
| **B** | Chất lượng phụ thuộc hoàn toàn vào câu trả lời user. Mà user **không biết cách mô tả** thứ mình chưa nhận ra → đây đúng là Lớp barrier Lớp 1 | AI phải hỏi chạm **cả hai lớp barrier** (§1.3), và phải chấp nhận "không biết" như một câu trả lời hợp lệ |
| **C** | **Mẫu hành vi có thể bị đọc sai.** Tua video 3 lần có thể là *đang học kỹ*, không phải *đang kẹt*. Nếu C hiện chỉ báo sai thì đánh mất lòng tin ngay lập tức | Chỉ hiện chỉ báo khi có **mẫu lặp kèm kết quả không đổi** — không chỉ dựa vào số lần thao tác. Và câu mở phải để user **sửa được ngay** |

## 3.7 Quyết định quan trọng nhất: AI nói bao nhiêu

Prototype dùng dữ liệu cứng, nên cả ba option **đều "biết"** nguyên nhân thật trước khi tester bấm nút. Vấn đề không phải "AI có biết không" mà là **AI nói bao nhiêu**:

| Mức | AI làm gì | Đo được gì | Cái giá |
|---|---|---|---|
| **Mức 1 — Nói thẳng** | *"Cột doanh thu của bạn đang được đọc là text"* | Chỉ đo được **mức tin + có hành động theo không** | Xoá sạch khả năng tự kiểm → **không phân biệt được A với B với C** |
| **Mức 2 — Chỉ ra điều kiểm chứng được** *(khuyến nghị)* | *"Đoạn 02:10 bạn xem lại 3 lần trong 4 phút, và kết quả vẫn hiện Count"* | Đo được **cả** mức tin **lẫn** khả năng tự kiểm | Phải viết câu mở cho đúng mức chi tiết — tốn thời gian build |

> **Mức 2 áp dụng đặc biệt nặng cho C.** C là option duy nhất **tự quyết định lúc nói**, nên nói quá tay thì không có ai kéo lại. Với A và B, user đang chủ động ở đó nên sẽ tự phát hiện AI nói quá; với C, **người học có thể không kịp** — nên câu mở phải vừa đủ cụ thể để hữu ích, vừa đủ mơ hồ để không lộ đáp án.
> **Hệ quả phải nói với tester:** không được hứa *"AI sẽ tìm ra nguyên nhân"*. Câu dẫn phải trung thực: **AI giúp nhận ra cần kiểm tra gì, không thay bạn kết luận.**

## 3.8 Dữ liệu nhạy cảm, riêng tư và sự đồng ý

Đây là phần nặng nhất của bản này, vì Option C thu thập nhiều hơn hai option kia — và nhóm đã chọn phạm vi rộng nhất.

| # | Quy tắc | Vì sao |
|---|---|---|
| 1 | **Không có chức năng upload / gửi file.** | Không có evidence nào cho thấy người học tự học đưa file cho AI (§1.6 mục 6) |
| 2 | **Bật theo dõi phải là một hành động chủ động, có mô tả rõ trước khi bật.** Không mở sẵn, không bật mặc định | Chưa có evidence nào cho thấy người học chấp nhận điều này (§1.7 mục 6) |
| 3 | Phải **tắt được bất cứ lúc nào, không cần giải thích, không cần đợi hết phiên** | Người học đã nói "không" thì phải có hiệu lực ngay (C3) |
| 4 | Nhật ký chỉ tồn tại trong **phiên hiện tại**; không lưu lâu dài, không dùng để huấn luyện hay ghi nhớ | R6 |
| 5 | User có thể **xoá toàn bộ nhật ký phiên** bất cứ lúc nào | Quyền thu hồi phải hiện thành nút, không phải chỉ nói miệng |
| 6 | **Chỉ nói về bài đang học.** Agent thấy màn hình khác nhưng **không bao giờ nhắc tới** | Nếu agent nhắc "tôi thấy bạn đang làm việc khác", người học sẽ hiểu là bị giám sát |
| 7 | **Prototype dùng kịch bản hành vi dựng sẵn, không ghi màn hình thật của tester** | R6 + §2.2. Đây là cách duy nhất để test được mà không cần yêu cầu quyền theo dõi thật |
| 8 | Nếu tester muốn thử với dữ liệu thật: **khuyến nghị dùng dữ liệu giả** | Theo dõi màn hình người học đang làm việc thật có deadline là phiên bản rủi ro nhất |
| 9 | **Không có preview, không có áp dụng, không có auto-apply** | R7 — đừng thêm chỉ để cho ba option trông giống nhau |
| 10 | Kết quả test phải ghi: tester có bật theo dõi không, có bấm chỉ báo không, có đóng sớm không, có phản ứng khi bị nói sai không | Không có thì kết luận về C là không đủ căn cứ |

## 3.9 Chín trạng thái lỗi — định nghĩa TRƯỚC khi build

Đây là phần dễ bị bỏ trong lúc build 80 phút, nhưng lại sinh ra nhiều evidence nhất khi test.

| # | Tình huống | **A** | **B** | **C** |
|---|---|---|---|---|
| 1 | Bấm nút rồi đóng tab | Ghi nhận **rời đi sớm**, không tính là lỗi AI | Như A | Như A |
| 2 | Không hiểu câu hỏi | Không xảy ra — không có câu hỏi nào | Cho **bỏ qua câu**, hỏi câu khác hoặc chuyển sang mô tả tự do | Chỉ có **một** câu mở. User không hiểu → bỏ qua và tiếp tục học, **không hỏi lại** |
| 3 | Trả lời **cho xong**, không đọc kỹ | Chạy hết cây nhưng không xác nhận từng bước | Phản hồi xong nhưng không đọc tóm tắt evidence | Bấm chỉ báo xong đóng ngay — **ghi nhận là bỏ qua**, không phải lỗi AI |
| 4 | Đọc xong **vẫn chưa ra nguyên nhân** | Thử nhánh khác; sau 2 nhánh phải nói "checklist chưa bao phủ trường hợp này" | Đề xuất giả thuyết khác; sau 2 vòng phải nói **không chắc** | Hội thoại phải nói **không chắc** và dừng — không tiếp tục đẩy thêm giả thuyết |
| 5 | Muốn **đổi lựa chọn cũ** | Quay lại nhánh trước | Undo câu trả lời / đổi nhánh | Xoá nhật ký phiên, bật lại tự do. **Không mất gì** vì chưa ghi gì |
| 6 | Bấm "áp dụng" nhưng **không kiểm lại** | Không áp dụng gì — user tự làm | Không áp dụng gì | **Không có nút "áp dụng"** — trạng thái này không tồn tại. Ghi nhận là điểm an toàn của C; **đừng bịa nút cho giống nhau** |
| 7 | AI lỗi / chậm | Hiện trạng thái chờ + **luôn hiện nút thoát về bài** | Như A | Như A |
| 8 | Nói **"không biết chọn cái nào"** | Là hành vi hợp lệ — chuyển sang phần giải thích từng bước | Là **phản hồi hợp lệ** — chuyển sang mô tả tự do | **"Không phải"** là phản hồi hợp lệ nhất → AI **dừng và xoá suy đoán** (C2) |
| 9 | AI nói **sai về hành vi của tôi** | Không xảy ra — AI không quan sát | Không xảy ra — AI không quan sát | ⚠️ **Trạng thái then chốt.** User nói *"sai, tôi không tua lại đoạn đó"* → AI phải **thừa nhận, xoá suy đoán, im lặng**. Nếu AI cố giữ lập luận thì đây là bằng chứng C **không đạt** — ghi thẳng vào kết luận |
| 10 | User **bỏ qua chỉ báo rồi lại kẹt tiếp** | Không xảy ra | Không xảy ra | Theo C3: lần sau phải **im**, không hiện lại. Nếu user **cố ý** muốn thì phải có cách tự mở lại — nếu không, thì "từ chối" đã biến thành "bị khoá" |

> **Nguyên tắc:** mỗi ô phải là **hành vi AI quan sát được**, không phải ý định. Nhóm sẽ đối chiếu bảng này với những gì thật sự xảy ra khi test.
> **Hai dòng 9 và 10 là dòng quan trọng nhất của Chặng 3** vì chúng đo đúng thứ không dễ đo: C có thừa nhận sai không, và C có tôn trọng lời từ chối không.

## 3.10 GATE 3 — Human control

| Tiêu chí | ✅ | Cách đáp ứng |
|---|---|---|
| Mỗi option nói rõ việc của user và AI | ✅ | Decision Table §3.4 |
| **Agency phù hợp với hậu quả nếu AI sai** | ✅ | A không tự hành động · B kiểm tra từng bước · C chỉ đọc, không ghi, không tự mở hội thoại |
| **Không vượt scope người học** | ✅ | R7 + §2.3 — không option nào đọc/ghi file, không đề xuất đổi dữ liệu |
| **Có đường thoát khi AI đọc sai user** | ✅ | C2 + trạng thái lỗi #9: thừa nhận, xoá suy đoán, im lặng |
| **Tôn trọng lời từ chối** | ✅ | C3 + trạng thái lỗi #10: bỏ qua một lần thì im, có đường tự mở lại |
| User biết AI **đang / sắp** làm gì | ✅ | Có capability + limit statement riêng cho từng option; C phải mô tả **trước khi** bật theo dõi |
| Có **evidence** và **uncertainty** signal | ✅ | A: trạng thái kiểm tra · B: giả thuyết xếp hạng định tính · C: chuỗi hành vi có số đếm + mốc thời gian |
| Có **control / recovery** path | ✅ | back / edit / reject / stop / undo / bỏ chỉ báo / tắt theo dõi / xoá nhật ký |
| Dữ liệu nhạy cảm có **consent** và **quyền thu hồi** | ✅ về mặt thiết kế | Bật chủ động + mô tả trước · tắt ngay lúc bất kỳ · xoá nhật ký trong phiên · không lưu lâu dài (§3.8) |

---

# CHẶNG 4 — Build ba micro-prototype · 80 phút

## 4.1 Nguyên tắc: 70% chung, chỉ critical interaction khác nhau

```text
        COMMON CONTEXT          CRITICAL INTERACTION        RESULT / USER DECISION
        (giống nhau 100%)        (KHÁC nhau — đây là option)   (giống cấu trúc, khác nội dung)
             ↓                          ↓                              ↓
        0–10 phút                  10–55 phút                     55–65 phút
```

| Phần | Dùng chung? | Cụ thể là gì |
|---|---|---|
| **Context screen** | ✅ 100% | Một màn hình duy nhất, cả ba mở ra đều thấy y hệt |
| **Content / data fixture** | ✅ 100% | Cùng file Excel giả lập, cùng ảnh chụp, cùng số liệu |
| **Component & visual style** | ✅ 100% | Cùng bộ component, cùng font, cùng màu, cùng nút |
| **Task & desired outcome** | ✅ 100% | Cùng một câu task, cùng một kết quả mong đợi |
| **Critical interaction** | ❌ **Khác** | Đây mới là A / B / C |

> **Nếu ba prototype trông giống nhau ở chỗ nào khác critical interaction → là build sai.** Khác màu, khác wording, khác bố cục đều là phí thời gian mà không tạo ra dữ liệu nào.

### Cách giữ C cũng dùng chung context screen — điểm cần lưu ý

C theo dõi hành vi **trước khi** người học bấm gì, nên trông như C phải có context riêng. **Không cần.** Cách giữ 100% chung:

- **Video player giả có thanh tua** là component dùng chung. A và B không cần dùng tới, nhưng C dùng chính nó làm nguồn tín hiệu.
- Tester thao tác **thật** trên màn hình chung: tua lại đoạn 02:10, mở lại menu, thử lại. Đây là hành động thật của họ, không phải diễn.
- Chỉ có **phần AI nhận ra** là canned — đúng Wizard of Oz.

> **Như vậy C không cần "diễn theo kịch bản".** Người test hành xử tự nhiên; chỉ có ngưỡng phát hiện được đặt sẵn. Phần còn chưa biết — *người học thật đang kẹt thật thì có tạo ra mẫu này không* — vẫn là giới hạn §X.1 mục 3, không phải giới hạn của prototype.

## 4.2 Common context — dựng một lần, dùng cho cả ba

### Màn hình context gồm đúng những thứ này

| Thành phần | Nội dung cụ thể | Vì sao cần |
|---|---|---|
| **Video bài học** | Đang dừng ở **02:10**. Tiêu đề: *"Tạo PivotTable từ dữ liệu doanh thu"*. Có play/pause và **thanh tua** | Nguồn tín hiệu cho C; và là "hướng dẫn" mà user đang theo |
| **Excel giả lập** | PivotTable với cột **Doanh thu** ở Values hiện **Count of Doanh thu = 248**; tùy chọn **Sum bị mờ (xám)**; ô giá trị **căn trái** và có **tam giác báo lỗi ở góc** | Đủ dấu hiệu để tester tự kiểm — nhưng **chưa** nói nguyên nhân |
| **Task** | *"PivotTable của bạn đang hiện Count, nhưng hướng dẫn nói phải là Sum. Hãy tìm ra vì sao."* | Cùng task cho cả ba — tiêu chí thứ 2 của Definition of testable |
| **Áp lực thời gian** | *"Báo cáo hết hạn 17:00 hôm nay"* | Điều kiện của user, giữ nguyên cho cả ba |
| **Nút "Về bài học"** | Cố định, luôn hiện, không cần cuộn | R3 |
| **Nút "Bắt đầu lại"** | Cố định, quay về context | Tiêu chí thứ 6 của Definition of testable |

### Data fixture — dùng chung, tuyệt đối không đổi

| Mục | Giá trị cố định |
|---|---|
| Cột | Doanh thu |
| Giá trị hiển thị | `1.234.567 ₫` · căn trái · có tam giác góc ô |
| Kết quả PivotTable | Count of Doanh thu = **248** |
| Tùy chọn Sum | **Mờ (xám)** |
| Nguyên nhân thật | Cột doanh thu bị hiểu là **text** |
| Deadline | 17:00 hôm nay |

> ⚠️ **Fixture này dùng cho cả ba, không được ai tự sửa.** Nếu Thái Anh đổi dấu hiệu trong ảnh thì phép so sánh A với B mất ý nghĩa.

### Bộ component dùng chung

`Header` · `TaskBanner` · `VideoPlayerGiả` (có tua) · `ExcelFixture` · `BtnVềBàiHọc` · `BtnBắtĐầuLại` · `ChipTrạngThái` (chưa kiểm tra / đã loại trừ / đã xác nhận) · `MộtCâuMở`

> **Khuyến nghị cách làm:** một thư mục chung, HTML/CSS/JS, mỗi option một file. Cách này nhanh nhất cho 45 phút build song song và giữ được 70% chung một cách tự nhiên. Nếu dùng Figma thì dựng một **component set** rồi clone cho ba option.

## 4.3 Ba critical interaction — phần duy nhất được khác nhau

| | **A — Bản đồ tự kiểm tra** | **B — Đối thoại đồng chẩn đoán** | **C — Agent theo dõi** |
|---|---|---|---|
| **Điểm vào** | Nút trên context screen: *"Tự kiểm tra"* | Nút trên context screen: *"Trợ giúp"* | **Không có nút.** Chỉ báo nhỏ tự hiện sau khi có mẫu lặp |
| **Số màn hình** | 3: context → cây kiểm tra → kết quả | 3: context → hội thoại → kết quả | 3: context → chỉ báo → hội thoại → kết quả |
| **AI làm gì** | Hiện checklist. **Chỉ** giải thích một bước khi được gọi. Không tự suy luận | Hỏi 2 câu. Tóm tắt evidence. Đưa 2 giả thuyết để user chọn | Nói **một câu** kiểm chứng được rồi dừng |
| **Câu AI nói** | *"Bước này hãy nhìn vào đâu?"* | *"Khi bạn kéo cột Doanh thu vào Values, Excel có báo gì không?"* | *"Đoạn 02:10 bạn tua lại 3 lần trong 4 phút, và kết quả vẫn hiện Count."* |
| **Kết quả** | Chip trạng thái từng bước + 1 câu hỏi kiểm | Tóm tắt evidence đã dùng | 1 câu hỏi kiểm tra |
| **Điểm user lấy lại control** | Sau **mỗi bước**: "Quay lại nhánh trước" + "Bỏ qua bước này" | Sau **mỗi câu trả lời**: "Sửa câu trả lời" + "Không biết" | **Ngay khi bấm chỉ báo**: "Không phải, tôi không làm vậy" (C2) + nút tắt theo dõi |

## 4.4 Definition of testable — sáu tiêu chí, dịch thành việc cụ thể

| # | Tiêu chí | Làm gì để đạt | Ai kiểm |
|---|---|---|---|
| 1 | **Tester tự mở và thao tác được** | Mỗi option là **một file HTML**, mở bằng trình duyệt là chạy. Không server, không tài khoản, không cài gì | Người build option khác |
| 2 | **Cả ba bắt đầu từ cùng context và task** | Cùng dùng `common` component và **cùng đoạn text task** — copy, không tự viết lại | Người build option khác |
| 3 | **Không cần facilitator narrate** | Không màn hình nào yêu cầu giải thích ngoài giao diện. Nếu tester phải hỏi "bấm cái nào" → build sai | Người build option khác |
| 4 | **Nội dung đủ thật để ra quyết định** | Fixture có đủ dấu hiệu để **tự kiểm** (căn trái, tam giác, Sum mờ) — nhưng **không** nói nguyên nhân | Tự đánh giá |
| 5 | **Mỗi option thể hiện được điểm lấy lại control** | Nút control ở §4.3 phải **hoạt động**, không phải vẽ cho có | Người build option khác |
| 6 | **Có đường reset về common context** | Nút "Bắt đầu lại" ở **mọi** màn hình, đưa về đúng context ban đầu | Người build option khác |

> **Tiêu chí 3 và 5 là hai chỗ hay bị trượt nhất.** Trước khi kết thúc 80 phút, mỗi người phải bằng cách tự mở option của người khác và **không được giải thích gì** — nếu cần giải thích thì đó là việc phải sửa.

## 4.5 Build order — 80 phút

| Phút | Việc | Ai | Ghi chú |
|---|---|---|---|
| **0–10** | Dựng common context, task, data fixture, bộ component | **Cả ba cùng làm** | Không tách ra build riêng — 70% chung là điều kiện để so sánh được. Xong thì **commit/push ngay** để ba người build trên cùng một nền |
| **10–55** | Mỗi người build một option, dùng shared components | **Trung→A · Trang→B · Thái Anh→C** | 45 phút. Chỉ build phần critical interaction + kết quả. **Không** sửa component chung trong lúc này — nếu cần sửa thì báo để cả ba đồng ý |
| **55–65** | Thêm control / recovery và evidence / uncertainty | Mỗi người, option của mình | Đây là phần **sinh ra nhiều evidence nhất** khi test. Không bỏ |
| **65–75** | Tự test option do **người khác** build | Mỗi người test 1 option của người khác | Theo luật 5: **không ai test option mình làm** |
| **75–80** | Chuẩn hóa A/B/C, kiểm link và reset path | Cả ba | Kiểm cả tiêu chí 6 — ba nút reset có cùng chức năng không |

**Cân bố 45 phút — dành nhiều nhất cho phần dễ hỏng nhất:**

| Option | Nên dồn thời gian vào | Không được dồn vào |
|---|---|---|
| **A** | Cây kiểm tra có **điểm vào cụ thể** từ đúng triệu chứng (khoảng trống §3.6) | Làm cây lớn, đẹp, nhiều nhánh |
| **B** | Câu hỏi chạm được **cả hai lớp barrier** + nút "Không biết" | Hỏi nhiều câu cho đủ |
| **C** | Câu mở đúng mức chi tiết + nút "Không phải" (C2) + tắt theo dõi | Thêm giao diện cho agent |

## 4.6 Được dùng / Không cần

| ✅ Được dùng | ❌ Không cần |
|---|---|
| Figma, Framer hoặc tương đương | Model hoặc API thật |
| HTML / CSS / JavaScript | Full onboarding hoặc dashboard |
| Prototype giấy có flow rõ | Responsive cho nhiều thiết bị |
| **Canned AI output** | Visual polish hoàn chỉnh |
| **Wizard of Oz** — miễn người mô phỏng AI, nhưng **không được giải thích giao diện hộ tester** | Một failure catalog đầy đủ |

> **Cách dùng Wizard of Oz cho ba option:** AI không thật. Người mô phỏng AI **không nói gì** và **không giải thích giao diện**. Nếu tester hỏi facilitator → ghi vào observation, **không trả lời giúp**. Việc đó là dữ liệu.

## 4.7 Prototype annotation — đặt NGOÀI frame, không hiện cho tester

**Chỗ đặt:** với HTML → ghi trong **khối comment đầu file** + một file `ANNOTATION.md` riêng cho từng option. Với Figma → một **frame riêng** đặt cạnh, không nằm trong flow.

**Mẫu — điền trước phần đã biết từ Chặng 1–3:**

```text
OPTION A — BẢN ĐỒ TỰ KIỂM TRA

We expect the tester to:
  tự chọn được nhánh đúng từ triệu chứng, chạy phép kiểm tra kiểu dữ liệu,
  và tự kết luận cột Doanh thu đang được hiểu là text

Watch for:
  · đứng yên ~30 giây không biết bấm gì
  · chạy hết cây mà vẫn không ra nguyên nhân
  · có tự tua lại video tìm không (không nhắc cho)
  · sau 2 nhánh chưa ra → có tự bỏ cuộc không

Do not explain:
  đây là cây tự kiểm tra — người học đi trước, AI chỉ giải thích khi được gọi
```

```text
OPTION B — ĐỐI THOẠI ĐỒNG CHẨN ĐOÁN

We expect the tester to:
  trả lời 2 câu, chọn được giả thuyết cần kiểm tra,
  rồi tự chạy phép kiểm tra

Watch for:
  · trả lời "không biết" phần lớn các câu
  · nói "2 cái giống nhau" — không phân biệt được giả thuyết
  · có tự kiểm trước khi nghe AI không (PN3 cho thấy thói quen này)
  · đọc tóm tắt evidence hay bỏ qua

Do not explain:
  các câu hỏi cố chạm cả hai lớp barrier (thiếu ý thức / thiếu cầu nối);
  "không biết" là một câu trả lời hợp lệ
```

```text
OPTION C — AGENT THEO DÕI, RỒI MỞ HỘI THOẠI

We expect the tester to:
  bấm chỉ báo khi nó xuất hiện, xác nhận hoặc phủ nhận quan sát của AI,
  rồi tự chạy phép kiểm tra

Watch for:
  · có bấm chỉ báo không, hay bỏ qua
  · bấm xong có đóng sớm không
  · phản ứng thế nào khi bị nói sai về hành vi của mình   ← quan trọng nhất
  · có nói thấy bị theo dõi không
  · bỏ qua một lần thì lần sau có tự mở lại không (C3)

Do not explain:
  agent đang quan sát thao tác; AI không đọc file, không sửa gì;
  chỉ báo do AI tự quyết khi nào hiện — không can thiệp
```

## 4.8 Những gì KHÔNG được thêm, dù thấy thiếu

| ❌ Đừng thêm | Vì sao |
|---|---|
| Nút "áp dụng sửa" ở option nào | Không option nào được ghi file (R7). Thêm để cho giống nhau là **phá comparison** |
| Bước upload / gửi file | Vượt scope người học tự học (§2.3) |
| Để C tự mở hội thoại | Ranh giới giữ "AI chủ động phát hiện" và "AI áp đặt" (§2.3) |
| Cho AI nói thẳng nguyên nhân | Sẽ xoá khả năng tự kiểm, và A với C không còn phân biệt được (§3.7) |
| Dùng dữ liệu thật của tester | R6 — và với C là rủi ro riêng tư (§3.8) |
| Sửa component chung khi đang build | Chỉ tác giả common mới được sửa; người khác báo trong group chat |
| Build đủ 9 trạng thái lỗi | Không cần (spec). Xem bên dưới |

**Ba trạng thái lỗi duy nhất nên build trong 80 phút** — chọn theo tiêu chí *sinh ra nhiều evidence nhất*, không phải theo thứ tự trong §3.9:

| Option | Trạng thái | Vì sao chọn |
|---|---|---|
| **A** | #8 — *"không biết chọn cái nào"* | Là giới hạn đã biết của A: không có điểm vào rõ |
| **B** | #8 — trả lời *"không biết"* | Chất lượng B phụ thuộc hoàn toàn vào đây |
| **C** | #9 — **AI nói sai về hành vi của tôi** | Đo đúng thứ không dễ đo: C có thừa nhận sai không. Nếu AI cố giữ lập luận → đây là bằng chứng C **không đạt** |

## 4.9 Chuẩn bị trước khi bắt đầu

| # | Việc | Ai | Chưa làm thì sao |
|---|---|---|---|
| 1 | Một thư mục chung cho ba prototype + thư mục `common` | Thái Anh | Mất 10 phút đầu để tranh luận nên đặt file ở đâu |
| 2 | **Ảnh Excel giả lập** với đủ dấu hiệu (§4.2) | Thái Anh | Không có thì ba option dùng ba fixture khác nhau → hỏng cả so sánh |
| 3 | **Đoạn text task** viết sẵn, dán vào cả ba | Trang | Mỗi người tự viết → task lệch nhau |
| 4 | Câu mở cho C, viết sẵn 2–3 phương án | Thái Anh | Đây là phần tốn thời gian nhất của C mà không thể sửa vội lúc test |
| 5 | Bộ annotation rỗng cho A và B | Trang, Thái Anh | Dễ bỏ sót, mà đây là thứ dùng để đọc kết quả test |
| 6 | Mỗi người viết **câu dẫn cho tester** (§X.2 mục 9) | Cả ba | Tester được hứa hẹn quá nhiều → phản ứng nhiễu |

---

# PHẦN CUỐI — Việc còn treo & giới hạn đã biết

## X.1 Giới hạn của prototype đã chốt (công khai trước khi test)

| # | Giới hạn | Vì sao phải nói trước |
|---|---|---|
| 1 | **Prototype Excel chỉ test được Lớp 2** (thiếu cầu nối). **Lớp 1** (thiếu ý thức) **gần như không test được** vì tình huống được diễn lại bằng kịch bản | Nếu không nói trước, kết quả sẽ bị đọc là phát hiện về cả hai lớp |
| 2 | **Chưa có evidence nào** cho việc người học sẵn sàng chia sẻ **ảnh chụp màn hình** cho AI. PN3 chỉ chia sẻ với *đồng nghiệp qua nhóm chat* | Chia sẻ với bạn bè **không** phải chia sẻ với AI |
| 3 | ⚠️ **Option C không thể test được phần quan trọng nhất của nó.** Với Excel fixture, hành vi "đang kẹt" phải do người test **diễn theo kịch bản** (tua 3 lần, mở lại menu...). Điều cần biết là *"một người học thật đang kẹt thật thì chuỗi hành vi này có xuất hiện không"* — và điều đó **không test được** bằng prototype | **C có phát biểu yếu hơn A và B sau khi test.** Phải nói rõ, không được trình bày ba option như ngang hàng |
| 4 | **C phụ thuộc tester bấm chỉ báo.** Nếu cả ba tester đều bỏ qua thì C **không được test** về phần hội thoại | Phải ghi trước khi kết luận, không được coi là "AI không phát hiện được" |
| 5 | Prototype dùng **dữ liệu cứng** → đo được phản ứng với một tình huống, không đo được độ bền của chẩn đoán AI | Không được nói "AI chẩn đoán đúng" — chỉ được nói "trong tình huống này, nguyên nhân là…" |
| 6 | **Hai note khác chủ đề**, nên "lặp lại" mới chỉ có giá trị ở cơ chế, chưa có ở tần suất | Không được viết "tình huống này xảy ra thường xuyên" |
| 7 | **Evidence PN3 chưa có file nguồn** → toàn bộ phần dẫn từ PN3 là tạm thời | Bổ sung file rồi đối chiếu lại §1.1–§1.6 trước khi nộp |
| 8 | **Hai note còn lại không giống nhau ở điểm mấu chốt:** PN1 người học **không biết** mình thiếu gì; PN3 người học **biết** nhưng không nối được | Nếu gộp chung thành một kết luận thì sẽ giấu mất chính điều thú vị nhất của dữ liệu |
| 9 | ⚠️ **Toàn bộ Option C dựa trên một giả định chưa có chứng cứ nào:** rằng người học đồng ý để AI theo dõi hành vi màn hình. Cả hai note chỉ ghi hành vi **chủ động**. Và PN3 cho thấy người học **tự kiểm chứng trước khi tin** — dấu hiệu cho thấy họ không dễ chấp nhận một AI *tự kết luận* về mình | Đây là giả định lớn nhất của cả tài liệu. Nếu tester phản ứng tiêu cực, đó **không phải** kết quả xấu của thiết kế — đó là bằng chứng giả định sai. Phải ghi kết quả đó vào tài liệu, không được xoá |
| 10 | **A và B cần user tự bấm nút; C thì không.** Nên C đang trả lời một câu hỏi mà A và B không trả lời | Đừng so C thắng/thua A, B chỉ vì C chạm Lớp 1 — hai câu hỏi khác nhau |

## X.2 Việc còn treo

| # | Việc | Ai | Khi nào |
|---|---|---|---|
| 1 | **Gửi file nguồn PN3 vào folder** rồi đối chiếu lại §1.1–§1.6 | Trang | Trước khi họp |
| 2 | Sửa MHV trong `NHOM/Chang_1_3.md` | Trang | Trước khi nộp |
| 3 | Đối chiếu quote PN1 với `interview/VinUniversity.m4a` | Thái Anh | Trước khi họp |
| 4 | Cập nhật trạng thái PN3 (đang ghi TODO) trong `three-option-design-sheet.md` | Thái Anh | Trong họp |
| 5 | Quyết định file nào là **bản nộp chính** | Cả nhóm | Trong họp |
| 6 | **Xác nhận lại phạm vi theo dõi toàn màn hình của C** (§2.2) và công khai rủi ro kèm theo | Cả nhóm | Trong họp |
| 7 | Xác nhận **C2 và C3** (§2.6) là bắt buộc, không phải tuỳ chọn | Cả nhóm | Trong họp |
| 8 | Xác nhận **§3.7 — AI chỉ ra điều kiểm chứng được, không nói nguyên nhân** | Cả nhóm | Trong họp |
| 9 | Chốt **câu dẫn cho tester** (không hứa AI tìm ra nguyên nhân) | Cả nhóm | Chặng 5 |
| 10 | Sắp tester theo luật 5: mỗi người test cả 3, **không ai test option mình làm** | Cả nhóm | Chặng 5–6 |

## X.3 Phân công (đã chốt theo luật 5)

| Option | Người thiết kế | Người **không** được test option này |
|---|---|---|
| **A — Bản đồ tự kiểm tra** | **Đàm Quang Trung** | Trung |
| **B — Đối thoại đồng chẩn đoán** | **Nguyễn Thị Bảo Trang** | Trang |
| **C — Agent theo dõi, rồi mở hội thoại** | **Đặng Văn Thái Anh** | Thái Anh |

> Mỗi thành viên test với một người khác, **không được chỉ mang option mình làm đi test**.

## X.4 Hai candidate cho vòng tiếp theo (ghi nhận, không build hôm nay)

| # | Candidate | Vì sao đáng cân nhắc |
|---|---|---|
| 1 | Dùng **lịch sử học tập** để định vị trước | Đã nằm trong Solution Parking Lot (Day 17 §8), chưa thành option |
| 2 | **AI chủ động nhưng trong khung bài học** — tắt giới hạn phạm vi ghi về khung bài đang học | Nếu test cho thấy vấn đề nằm ở **phạm vi ghi** chứ không phải ở ý tưởng thụ động, thì đây là cách sửa rẻ nhất. Giữ sẵn để dùng |

---

# Mẫu điền trong buổi họp

```text
Hypothesis Problem:  ☐ giữ nguyên bản §1.8
                     ☐ sửa: ____________________________________________________

Evidence PN3:        ☐ đã có file nguồn, đã đối chiếu lại §1.1–§1.6
                     ☐ chưa có — mọi phần dẫn từ PN3 ghi tạm thời

Phạm vi C:           ☐ giữ theo dõi toàn màn hình, chấp nhận rủi ro §2.2 (khuyến nghị
                        là thu hẹp về khung bài học — xem X.4 mục 2)
                     ☐ sửa: ____________________________________________________

C2 / C3:             ☐ giữ bắt buộc: AI thừa nhận sai + tôn trọng lời từ chối (khuyến nghị)
                     ☐ sửa: ____________________________________________________

AI nói bao nhiêu:   ☐ Mức 2 — chỉ ra điều kiểm chứng được, không nói nguyên nhân (khuyến nghị)
                     ☐ Mức 1 — nói thẳng, chấp nhận mất khả năng so sánh cả ba option

File nộp chính:     ☐ NHOM/Chang_1_3.md (sửa lại cho khớp bản này)
                     ☐ bản mới của nhóm

Ba quyết định thiết kế §3.6:  ☐ giữ nguyên cả 3
                               ☐ sửa số: ____ vì: ______________________________

Khác:
  ____________________________________________________________________________
  ____________________________________________________________________________
```

> **Nhắc lại luật 7:** sau buổi họp này, **không** được viết ở đâu là *"Pain A đã được xác nhận"*, *"học viên cần ôn kiến thức nền"* hay bất kỳ kết luận nào tương tự. Tài liệu hiện có chỉ ghi **observation** và **diễn giải của nhóm, đã đánh dấu là diễn giải**.
