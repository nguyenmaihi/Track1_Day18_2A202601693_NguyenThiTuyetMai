# Chặng 1 — Evidence Snapshot & Hypothesis Problem

## 1. Evidence Snapshot

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
|---|---|---|
| Lê Thị Linh — Learner | Khi gặp phần khó hiểu, chủ yếu hỏi ChatGPT vì không có người để hỏi ngay. Ngại giơ tay vì câu hỏi và câu trả lời diễn ra công khai. Mong muốn có tin nhắn riêng hoặc nút SOS để Lab Coach chủ động hỗ trợ. | Learner có thể cần hỗ trợ nhưng không chủ động thể hiện công khai. Privacy có thể là một barrier khiến Lab Coach khó nhận biết nhu cầu hỗ trợ. |
| Nguyễn Thị Tuyết Mai — Lab Coach | Hằng ngày gặp learner khó khăn. Hiện phát hiện qua việc learner giơ tay hoặc Lab Coach đi quanh quan sát màn hình. Nhiều learner ngồi im. Lab Coach không đủ thời gian hỗ trợ tất cả và đôi khi ngại chủ động hỏi vì learner có thể không thoải mái. | Có cả visibility problem và capacity problem. Chỉ phát hiện thêm learner chưa chắc giải quyết được vấn đề nếu Lab Coach không thể ưu tiên người cần hỗ trợ nhất. |
| Nguyễn Thị Tuyết Mai — Learner | Khi gặp lỗi cài môi trường phải giơ tay và chờ Lab Coach phát hiện, sau đó phải mô tả lại vấn đề. Lab Coach đôi khi chủ động hỏi nhưng thường không đúng lúc cần giúp. Khi được hỗ trợ thì hỗ trợ hiệu quả và chi tiết. | Vấn đề có thể nằm ở timing, discovery và việc thiếu context trước khi Lab Coach hỗ trợ, thay vì chất lượng hỗ trợ của Lab Coach. |

## 2. Patterns

- Learner cần hỗ trợ không đồng nghĩa learner sẽ chủ động yêu cầu hỗ trợ.
- Cơ chế hiện tại phụ thuộc nhiều vào việc giơ tay và quan sát thủ công.
- Learner có thể phải chờ hoặc không được phát hiện đúng thời điểm.
- Vấn đề không chỉ là phát hiện mà còn là khả năng ưu tiên do Lab Coach có thời gian hạn chế.
- Privacy và sự thoải mái của learner ảnh hưởng đến hành vi yêu cầu hỗ trợ.

## 3. Hypothesis Problem

Khi theo dõi nhiều learner trong buổi Lab, Lab Coach gặp khó khăn trong
việc phát hiện và ưu tiên learner đang cần hỗ trợ vì việc nhận biết hiện
phụ thuộc chủ yếu vào learner chủ động giơ tay hoặc Lab Coach quan sát thủ
công, trong khi một số learner ngại yêu cầu hỗ trợ công khai và Lab Coach
có thời gian hỗ trợ hạn chế, dẫn đến learner có thể phải chờ lâu, bị
bỏ sót hoặc nhận hỗ trợ không đúng thời điểm.

## 4. Evidence ban đầu hỗ trợ giả thuyết

Các cuộc phỏng vấn Day 17 bước đầu cho thấy Lab Coach hiện chủ yếu phát
hiện learner cần hỗ trợ thông qua việc learner giơ tay hoặc quan sát
thủ công. Tuy nhiên, một learner cho biết ngại yêu cầu hỗ trợ công khai
và thường chuyển sang hỏi ChatGPT, trong khi Lab Coach cũng quan sát
thấy nhiều learner gặp khó nhưng vẫn ngồi im.

Một learner khác phải chờ Lab Coach phát hiện sau khi giơ tay và đôi khi
được Lab Coach chủ động hỏi không đúng thời điểm cần hỗ trợ.

Đồng thời, Lab Coach cho biết không đủ thời gian để hỗ trợ tất cả
learner, cho thấy vấn đề không chỉ nằm ở phát hiện mà còn ở khả năng
ưu tiên người cần hỗ trợ.

## 5. Still Unproven

- Chưa chứng minh các tín hiệu như dừng lâu, xem lại slide, highlight,
  thay đổi câu trả lời hoặc AI Chat đủ chính xác để xác định learner
  đang gặp khó khăn.
- Chưa biết Lab Coach muốn AI chỉ tổng hợp tín hiệu, tự ưu tiên learner
  hay chủ động đề xuất hành động hỗ trợ.
- Chưa chứng minh việc phát hiện sớm hơn sẽ giải quyết Capacity Problem
  khi Lab Coach vẫn có thời gian hỗ trợ hạn chế.
- Chưa biết learner cảm thấy thế nào khi hệ thống phân tích hành vi học
  tập để suy đoán rằng họ đang cần hỗ trợ.

# Chặng 2 — Three Solution Options

## Comparison Contract

| Thành phần | Quyết định chung |
|---|---|
| Target user | Lab Coach |
| Situation | Trong/sau một buổi Lab có nhiều learner |
| Task | Xác định và ưu tiên learner cần hỗ trợ, sau đó quyết định hành động |
| Desired outcome | Phát hiện đúng người cần hỗ trợ, hiểu lý do và ưu tiên được người cần hỗ trợ trước |
| Content/data fixture | Cùng một lớp, learner và tập learning signals |
| Final decision | Lab Coach |

## Option A — Signal Dashboard

AI chỉ thu thập và tổ chức các learning signals như thời gian dừng,
số lần xem lại, "Chưa hiểu", thay đổi câu trả lời và AI Chat.

AI không kết luận learner đang gặp khó khăn.

Lab Coach tự đọc evidence, diễn giải, ưu tiên và quyết định có hỗ trợ
learner hay không.

**Trade-off:** Lab Coach có mức kiểm soát cao nhưng vẫn phải dành thời gian
để phân tích các signals.

## Option B — Explainable Support Queue

AI phân tích learning signals để xác định learner có thể đang gặp khó
khăn, ưu tiên họ trong Support Queue và giải thích các evidence dẫn đến
recommendation.

Lab Coach review evidence và quyết định Contact hoặc Dismiss.

**Trade-off:** Giảm workload và hỗ trợ prioritization nhưng tạo nguy cơ
false positive hoặc Lab Coach quá phụ thuộc vào AI recommendation.

## Option C — AI Support Intervention

AI phát hiện và ưu tiên learner tương tự Option B, nhưng tiến thêm một
bước bằng cách chuẩn bị một private intervention phù hợp với context.

Lab Coach review, edit và quyết định có gửi intervention hay không.

**Trade-off:** Giảm workload và thời gian phản ứng mạnh nhất nhưng AI có
agency cao hơn, làm tăng rủi ro false positive và privacy concern.

## Distance Check

**A khác B vì:** A chỉ tổng hợp learning signals và để Lab Coach tự diễn
giải, trong khi B cho phép AI suy luận learner nào có thể cần hỗ trợ và
chủ động ưu tiên họ.

**B khác C vì:** B dừng ở recommendation, trong khi C chuẩn bị một
intervention cụ thể để Lab Coach review và phê duyệt.

**A khác C vì:** A giữ gần như toàn bộ quyền suy luận và hành động ở
Lab Coach, trong khi C giao cho AI việc phát hiện, ưu tiên và chuẩn bị hành
động hỗ trợ.

## Experiment Question

Mức độ suy luận và quyền tự chủ của AI nên ở mức nào khi hỗ trợ Lab Coach xác định, phân loại ưu tiên và hỗ trợ học viên gặp khó khăn?

Thang đo:

A — AI đưa ra bằng chứng → Lab Coach diễn giải và quyết định

B — AI diễn giải và ưu tiên → Lab Coach xem xét và quyết định

C — AI diễn giải, ưu tiên và chuẩn bị phương án can thiệp → Lab Coach phê duyệt

# Chặng 3 — Human–AI Design Pass

## 1. Critical Interaction

Cả ba phương án cùng giải quyết một critical interaction:

> Hệ thống có các learning signals của learner → Lab Coach cần xác định learner có cần được ưu tiên hỗ trợ hay không → quyết định hành động tiếp theo.

Điểm khác biệt giữa ba phương án nằm ở mức độ suy luận và chủ động của AI:

- **Option A — Signal Dashboard:** AI tổng hợp → Lab Coach diễn giải → Lab Coach hành động.
- **Option B — Explainable Support Queue:** AI phân tích và ưu tiên → Lab Coach review → Lab Coach hành động.
- **Option C — AI Support Intervention:** AI phân tích và ưu tiên → AI chuẩn bị intervention → Lab Coach review và phê duyệt.

---

## 2. Human–AI Decision Table

| Human–AI Decision | Option A — Signal Dashboard | Option B — Explainable Support Queue | Option C — AI Support Intervention |
|---|---|---|---|
| **User làm gì?** | Đọc learning signals, tự đánh giá, ưu tiên và quyết định learner nào cần hỗ trợ | Review AI recommendation và evidence, sau đó quyết định Contact hoặc Dismiss | Review evidence và intervention do AI đề xuất, sau đó Edit, Approve hoặc Reject |
| **AI làm gì?** | Thu thập, nhóm và trình bày learning signals | Tổng hợp signals, suy luận possible difficulty, ưu tiên learner và giải thích recommendation | Phân tích, ưu tiên learner và chuẩn bị một intervention phù hợp với context |
| **AI Act / Ask / Don't Act?** | **Don't Act** — AI không kết luận learner đang gặp khó | **Ask** — AI đưa recommendation nhưng Lab Coach quyết định | **Act internally → Ask before external action** — AI chuẩn bị intervention nhưng không tự gửi |
| **Vì sao?** | Option A giữ quyền suy luận ở Lab Coach để giảm nguy cơ AI gắn nhãn sai | AI giúp giảm workload nhưng false positive vẫn cần Lab Coach kiểm tra | Intervention tác động trực tiếp đến learner nên cần Lab Coach phê duyệt |
| **User hiểu capability/limit bằng gì?** | Thông báo rõ hệ thống chỉ tổng hợp signals, không xác định learner có thực sự cần hỗ trợ | Thông báo AI recommendation có thể sai và Lab Coach nên review evidence | Thông báo AI chỉ chuẩn bị intervention và sẽ không gửi nếu Lab Coach chưa phê duyệt |
| **Evidence được thể hiện thế nào?** | Hiển thị trực tiếp raw learning signals | Hiển thị recommendation cùng các signals dẫn đến recommendation | Hiển thị possible difficulty, supporting signals và intervention được đề xuất |
| **Uncertainty được thể hiện thế nào?** | Không đưa ra kết luận về learner | Dùng ngôn ngữ như "Possible difficulty" và mức confidence | Dùng "Possible difficulty", confidence và evidence trước khi Lab Coach approve |
| **User kiểm soát thế nào?** | View Details / Contact / Ignore | Review Evidence / Contact / Dismiss | Edit / Approve & Send / Not Now / Dismiss |
| **Recovery khi AI sai** | Lab Coach bỏ qua signals | Lab Coach dismiss recommendation | Lab Coach sửa, hoãn hoặc hủy intervention trước khi gửi |
| **Final authority** | Lab Coach | Lab Coach | Lab Coach |

---

## 3. Expectation & Limits

### Option A — Signal Dashboard

Hệ thống cần làm rõ rằng các learning signals chỉ phản ánh hành vi học tập và **không chứng minh learner đang gặp khó khăn**.

AI có thể:

- Thu thập learning signals.
- Nhóm signals theo learner và nội dung.
- Giúp Lab Coach quan sát activity dễ hơn.

AI không:

- Kết luận learner đang gặp khó.
- Xác định nguyên nhân khó khăn.
- Tự quyết định learner nào cần được hỗ trợ trước.

**Expectation message:**

> Learning signals show recent learning activity. They do not determine whether a learner needs help.

---

### Option B — Explainable Support Queue

AI được phép phân tích các signals và đề xuất learner có thể cần hỗ trợ, nhưng recommendation không được trình bày như một kết luận chắc chắn.

AI có thể:

- Phân tích learning signals.
- Xác định possible difficulty.
- Ưu tiên learner trong Support Queue.
- Giải thích tại sao learner được flag.
- Đề xuất hành động tiếp theo.

AI không:

- Tự liên hệ learner.
- Tự quyết định learner chắc chắn đang gặp khó khăn.

**Expectation message:**

> AI uses recent learning signals to suggest learners who may need support. Review the evidence before taking action.

---

### Option C — AI Support Intervention

AI được phép chuẩn bị một hành động hỗ trợ cụ thể, nhưng không được thực hiện hành động bên ngoài nếu chưa có sự phê duyệt của Lab Coach.

AI có thể:

- Phát hiện possible difficulty.
- Ưu tiên learner.
- Tổng hợp context.
- Chuẩn bị private support intervention.

AI không:

- Tự gửi intervention cho learner.
- Tự quyết định thay Lab Coach rằng learner cần được hỗ trợ.

**Expectation message:**

> AI can prepare a private check-in based on recent learning signals. Nothing will be sent without your approval.

---

## 4. Evidence & Uncertainty

Các learning signals không được coi là bằng chứng chắc chắn rằng learner đang gặp khó khăn.

Những signals prototype có thể sử dụng gồm:

- Thời gian dừng ở một slide.
- Số lần xem lại nội dung.
- Highlight và ghi chú.
- Đánh dấu "Chưa hiểu".
- Thay đổi câu trả lời.
- Nội dung trao đổi với AI Chat.

### Option A

Hiển thị trực tiếp signals mà không thêm AI conclusion.

Ví dụ:

> **Nguyễn Văn An — Environment Setup**
>
> - Stayed on slide: 8m20s
> - Revisited: 3 times
> - Marked "Chưa hiểu": 1
> - Changed answer: 2 times
> - AI Chat: "Tại sao pip install của mình bị lỗi?"

### Option B

AI có thể đưa ra suy luận nhưng phải đi kèm evidence:

> **Possible difficulty:** Environment Setup  
> **Priority:** High  
> **Confidence:** Medium
>
> **Why this learner was flagged:**
> - Marked "Chưa hiểu"
> - Revisited setup slide 3 times
> - Stayed on slide for 8m20s
> - Asked AI about pip installation

### Option C

Ngoài evidence và uncertainty, AI chuẩn bị intervention:

> **Possible difficulty:** Environment Setup  
> **Confidence:** Medium
>
> **Suggested private check-in:**
>
> "Chào An, mình thấy bạn có thể đang gặp khó khăn ở phần Environment Setup. Bạn có muốn Lab Coach hỗ trợ không?"

`Confidence: Medium` trong micro-prototype là **canned AI output phục vụ user test**, không phải confidence được tính từ một model thực tế.

---

## 5. Control & Recovery

Mức độ kiểm soát của Lab Coach tăng theo mức độ agency của AI.

### Option A

AI chưa thực hiện suy luận hoặc hành động nên recovery đơn giản:

- `View Details`
- `Contact`
- `Ignore`

Nếu signals không hữu ích, Lab Coach có thể bỏ qua.

### Option B

Lab Coach phải có khả năng kiểm tra và từ chối AI recommendation:

- `Review Evidence`
- `Contact Learner`
- `Dismiss`

Nếu AI flag sai learner, Lab Coach có thể dismiss recommendation mà không có hành động nào được thực hiện với learner.

### Option C

Do AI đã chuẩn bị một intervention trực tiếp tới learner, Lab Coach cần nhiều quyền kiểm soát hơn:

- `Edit Message`
- `Approve & Send`
- `Not Now`
- `Dismiss Suggestion`

Intervention **không được auto-send**. Lab Coach luôn có cơ hội review, chỉnh sửa hoặc hủy trước khi learner nhận được thông tin.

---

## 6. Data & Privacy Check

AI Support Radar sử dụng dữ liệu hành vi học tập, do đó cần đặc biệt chú ý đến privacy và cách AI diễn giải learner.

Các dữ liệu có thể được sử dụng trong prototype:

- Slide navigation.
- Time spent.
- Revisit.
- Highlight/note.
- "Chưa hiểu".
- Answer changes.
- AI Chat context.

Nguyên tắc thiết kế:

1. Chỉ sử dụng các signals cần thiết để hỗ trợ Lab Coach hiểu context.
2. Không trình bày AI inference như một sự thật về learner.
3. Lab Coach phải nhìn được evidence đứng sau recommendation.
4. AI không tự liên hệ learner khi chưa có sự phê duyệt của Lab Coach.
5. Prototype không giả định feedback như `Dismiss` được sử dụng để train hoặc personalize AI trong tương lai.

Thay vì:

> **An is struggling with Environment Setup.**

Hệ thống nên sử dụng:

> **An may need support with Environment Setup.**

hoặc:

> **Possible difficulty: Environment Setup.**

---

## 7. Prototype Annotations

### Option A — Signal Dashboard

**We expect the tester to:**  
Inspect learning signals and independently decide which learner should be prioritized for support.

**Watch for:**  
Whether the Lab Coach can identify priority learners without AI interpretation and how much effort this requires.

**Do not explain:**  
What individual signals mean or which learner should be prioritized.

---

### Option B — Explainable Support Queue

**We expect the tester to:**  
Review AI recommendations and supporting evidence before deciding whether to contact or dismiss a learner.

**Watch for:**  
Whether the Lab Coach checks the evidence or trusts AI ranking immediately; whether priority and uncertainty are understood.

**Do not explain:**  
Why the AI assigned a particular learner or priority.

---

### Option C — AI Support Intervention

**We expect the tester to:**  
Review the AI-generated intervention and decide whether to edit, approve, postpone or reject it.

**Watch for:**  
Hesitation around privacy, AI inference and how much control the Lab Coach wants before contacting a learner.

**Do not explain:**  
Whether approving the AI suggestion is the correct action.

---

## 8. Human-Control Principle

Mức AI agency tăng dần từ A đến C:

**Option A**

AI tổng hợp evidence  
→ Lab Coach diễn giải  
→ Lab Coach quyết định

**Option B**

AI phân tích + ưu tiên  
→ Lab Coach review evidence  
→ Lab Coach quyết định

**Option C**

AI phân tích + ưu tiên + chuẩn bị intervention  
→ Lab Coach review/edit  
→ Lab Coach phê duyệt

Khi consequence của AI error tăng, mức human control cũng phải tăng tương ứng.

Trong cả ba phương án, **Lab Coach luôn giữ quyền quyết định cuối cùng**.