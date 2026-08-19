# Prototype Feedback Note — AI Support Radar

> Note này lưu evidence tổng hợp từ ba phiên test. Bản tổng hợp đối chiếu giữa ba tester nằm tại `group-feedback-synthesis.md`.

## 1. Mục tiêu User Test

User test được thực hiện nhằm so sánh ba cách phân chia vai trò giữa
Lab Coach và AI trong việc phát hiện, ưu tiên và hỗ trợ learner có thể
đang gặp khó khăn.

Ba phương án được test:

- **Option A — Signal Dashboard:** AI chỉ tổng hợp learning signals,
  Lab Coach tự diễn giải và quyết định.
- **Option B — Explainable Support Queue:** AI phân tích, ưu tiên và
  giải thích evidence; Lab Coach review và quyết định.
- **Option C — AI Support Intervention:** AI phân tích, ưu tiên và
  chuẩn bị private intervention; Lab Coach review, edit và approve.

Cả ba phương án sử dụng cùng context, task và learner fixture.

---

## 2. Tester Context

Prototype được thử nghiệm với **3 Lab Coach: Phú, Vương, Tú** có context liên quan đến
việc theo dõi và hỗ trợ learner trong các buổi Lab.

Cả ba tester đều được trải nghiệm các phương án A, B và C.

Task chung:

> Trong tình huống đang hỗ trợ nhiều learner trong một buổi Lab,
> hãy xác định learner nào nên được ưu tiên hỗ trợ và quyết định
> bạn sẽ làm gì tiếp theo.

---

# 3. Tổng hợp Feedback A/B/C

| Nội dung | Phú | Vương | Tú |
|---|---|---|---|
| **Đánh giá chung** | Prototype dễ hiểu, context và flow rõ ràng | Prototype dễ hiểu, context và flow rõ ràng | Prototype dễ hiểu, context và flow rõ ràng |
| **Option / hướng ưu tiên** | **Option C** | **Option B** | **Kết hợp B + C** |
| **Lý do chính** | Cảm thấy tiện hơn khi AI có thể chuẩn bị sẵn câu hỏi riêng tư để hỗ trợ learner | Muốn Lab Coach giữ nhiều quyền chủ động hơn, không muốn AI đi quá xa trong việc chuẩn bị sẵn hành động hỗ trợ | Muốn vừa có khả năng review và kiểm soát của B, vừa có sự tiện lợi của intervention trong C |
| **Trade-off nổi bật** | Convenience > manual effort | Human control > automation | Cân bằng control và convenience |

---

# 4. Feedback theo từng Option

## Option A — Signal Dashboard

### Cơ chế

AI chỉ tổng hợp và trình bày các learning signals như:

- thời gian dừng ở slide;
- số lần xem lại;
- đánh dấu "Chưa hiểu";
- thay đổi câu trả lời;
- nội dung AI Chat.

Lab Coach tự diễn giải các signals và quyết định learner nào cần được
ưu tiên.

### Feedback

Không có tester nào chọn Option A là phương án ưu tiên cuối cùng.

Tuy nhiên, các tester có thể hiểu context và flow của phương án mà
không ghi nhận breakdown lớn trong quá trình sử dụng.

### Interpretation

Kết quả này **không đủ để kết luận Option A không hữu ích**.

Tuy nhiên, trong ba phiên test này, các tester đều nghiêng về những
phương án mà AI hỗ trợ nhiều hơn việc chỉ hiển thị raw learning
signals.

Điều này có thể gợi ý rằng việc chỉ cải thiện visibility chưa phải
mức hỗ trợ AI mà các tester ưu tiên.

---

## Option B — Explainable Support Queue

### Cơ chế

AI:

1. phân tích learning signals;
2. xác định possible difficulty;
3. ưu tiên learner;
4. trình bày supporting evidence.

Lab Coach vẫn là người quyết định cuối cùng:

- Contact;
- Dismiss;
- hoặc tiếp tục review.

### Feedback

**Vương** chọn **Option B**.

Lý do chính là tester muốn Lab Coach giữ nhiều quyền chủ động hơn trong
quá trình hỗ trợ learner.

Tester không muốn AI đi quá xa trong việc chuẩn bị sẵn toàn bộ hành
động hỗ trợ.

### Interpretation

Feedback này gợi ý rằng **human control** là một yếu tố quan trọng.

AI có thể giúp giảm workload bằng cách:

> detect → prioritize → explain

nhưng Lab Coach vẫn muốn tự quyết định:

> có hỗ trợ hay không → hỗ trợ như thế nào.

Điểm mạnh của B là AI hỗ trợ prioritization nhưng không lấy đi quyền
chủ động của Coach.

---

## Option C — AI Support Intervention

### Cơ chế

AI thực hiện:

> detect → prioritize → explain → prepare intervention

Sau đó Lab Coach có thể:

- Edit;
- Approve;
- Not now;
- Dismiss.

AI không tự gửi intervention.

### Feedback

**Phú** chọn **Option C**.

Tester cảm thấy phương án này tiện hơn vì AI có thể chuẩn bị sẵn một
câu hỏi riêng tư để Lab Coach tiếp cận learner.

Thay vì Coach phải tự xác định vấn đề rồi tự nghĩ cách bắt đầu cuộc
trao đổi, AI giúp chuẩn bị bước tiếp theo.

### Interpretation

Feedback này gợi ý rằng AI-generated intervention có thể giúp giảm
manual effort của Lab Coach.

Giá trị của C không chỉ nằm ở việc phát hiện learner mà còn ở việc
giúp Coach chuyển nhanh từ:

> "Learner này có thể cần hỗ trợ"

sang:

> "Tôi có thể tiếp cận learner này như thế nào?"

Tuy nhiên, convenience này đi kèm với việc AI có agency cao hơn.

---

# 5. Feedback đề xuất kết hợp B + C

**Tú** không ưu tiên riêng B hoặc C mà đề xuất **kết hợp hai
phương án**.

Ý tưởng chính:

> Giữ khả năng review, evidence và quyền chủ động của Option B,
> nhưng bổ sung khả năng tạo private intervention của Option C
> khi Lab Coach thực sự muốn hỗ trợ learner.

Feedback này tạo ra một hướng iteration mới thay vì phải chọn hoàn
toàn B hoặc C.

---

# 6. Patterns

## Pattern 1 — Prototype đủ rõ để tester tự sử dụng

Cả ba Lab Coach đều phản hồi rằng:

- context dễ hiểu;
- flow sử dụng rõ ràng;
- các phương án có thể được hiểu và thao tác mà không gặp breakdown lớn.

Điều này cho thấy prototype đã đủ rõ để phục vụ vòng test hiện tại.

---

## Pattern 2 — Không có một Option thắng tuyệt đối

Kết quả lựa chọn:

- **1 tester → B**
- **1 tester → C**
- **1 tester → B + C**

Do số lượng tester nhỏ, không thể kết luận một option được Lab Coach
nói chung ưu tiên.

Thay vào đó, feedback cho thấy một trade-off rõ hơn:

> **Human Control ↔ AI Convenience**

---

## Pattern 3 — Lab Coach vẫn cần giữ final authority

Feedback của tester chọn B đặc biệt nhấn mạnh nhu cầu giữ quyền chủ
động.

Ngay cả khi AI hỗ trợ:

- phát hiện;
- ưu tiên;
- giải thích;

Coach vẫn cần quyền quyết định learner nào thực sự nên được hỗ trợ.

---

## Pattern 4 — Intervention vẫn tạo giá trị

Tester chọn C cho thấy việc AI chuẩn bị sẵn private check-in có thể
giảm thêm manual effort cho Coach.

Vì vậy, intervention của C không nhất thiết phải bị loại bỏ.

Thay vào đó, nó có thể trở thành **một capability tùy chọn sau khi
Coach đã review recommendation**.

---

# 7. Key Trade-off

Ba phiên test cho thấy trade-off chính không còn nằm ở:

> "Có nên sử dụng AI hay không?"

mà nằm ở:

> **AI nên được phép đi xa đến đâu trước khi Lab Coach cần đưa ra
> quyết định?**

Option A:

> AI shows evidence  
> → Coach interprets  
> → Coach decides

Option B:

> AI interprets + prioritizes  
> → Coach reviews  
> → Coach decides

Option C:

> AI interprets + prioritizes + prepares intervention  
> → Coach reviews  
> → Coach approves

Feedback ban đầu cho thấy hướng phù hợp có thể nằm **giữa B và C**.

---

# 8. DECIDED — One Next Change

## Next Change

**Kết hợp Explainable Support Queue của Option B với private
intervention tùy chọn của Option C.**

Flow iteration tiếp theo:

```text
Learning Signals
       ↓
AI detects possible support need
       ↓
AI Support Queue
       ↓
Coach reviews supporting evidence
       ↓
Coach decides whether to support
       ↓
┌──────────────────────────────┐
│ Generate private check-in   │
└──────────────────────────────┘
       ↓
AI prepares message
       ↓
Coach reviews / edits
       ↓
Coach approves
       ↓
Private check-in sent
```

### Human–AI Role Split mới

**AI:**

* tổng hợp signals;
* phát hiện possible difficulty;
* prioritize;
* giải thích evidence;
* tạo private check-in **khi Coach yêu cầu**.

**Lab Coach:**

* review evidence;
* quyết định learner có cần hỗ trợ hay không;
* quyết định có yêu cầu AI tạo intervention hay không;
* edit/approve intervention;
* giữ final authority.

---

# 9. Evidence dẫn tới Next Change

Quyết định kết hợp B + C dựa trên ba feedback:

1. Vương chọn **B** vì muốn giữ nhiều quyền chủ động hơn.
2. Phú chọn **C** vì AI-generated private check-in thuận tiện
   và giảm thao tác.
3. Tú trực tiếp đề xuất **kết hợp B và C**.

Thay vì chọn hoàn toàn B hoặc C, iteration mới giữ:

> **Control của B + Convenience của C**

Điểm thay đổi quan trọng là intervention không được AI chủ động chuẩn
bị ngay.

AI chỉ tạo intervention **sau khi Coach đã review evidence và chủ động
yêu cầu**.

---

# 10. STILL UNPROVEN

Ba phiên test hiện tại vẫn chưa chứng minh:

### 1. Độ chính xác của learning signals

Chưa biết các signals như:

* dừng lâu;
* xem lại slide;
* thay đổi câu trả lời;
* "Chưa hiểu";
* AI Chat;

có thực sự đủ chính xác để xác định learner cần hỗ trợ hay không.

### 2. Hiệu quả của B + C

Hướng kết hợp B + C mới là một **Next Change**, chưa được user test.

Không thể kết luận đây là solution tốt hơn trước khi prototype mới
được kiểm thử.

### 3. Hành vi trust trong sử dụng thực tế

Chưa biết Lab Coach có thường xuyên kiểm tra supporting evidence hay
sẽ dần phụ thuộc vào AI priority khi sử dụng lâu dài.

### 4. Góc nhìn của learner

Các phiên test hiện tại tập trung vào Lab Coach.

Chưa biết learner cảm thấy thế nào khi:

* hệ thống phân tích learning behavior;
* AI suy luận họ có thể cần hỗ trợ;
* họ nhận private check-in được AI hỗ trợ tạo.

### 5. Tác động tới workload

Chưa chứng minh AI Support Radar thực sự:

* giảm thời gian phát hiện learner;
* giảm thời gian chờ hỗ trợ;
* giảm workload của Lab Coach;
* hoặc giúp Coach hỗ trợ nhiều learner hơn trong lớp thật.

---

# 11. Kết luận vòng Test

Ba phiên user test chưa cho thấy một phương án A/B/C thắng tuyệt đối.

Thay vào đó, feedback giúp xác định rõ hơn trade-off giữa:

> **Human Control ↔ AI Convenience**

Option B cung cấp mức kiểm soát mà một tester ưu tiên, trong khi Option
C cung cấp sự tiện lợi mà một tester khác đánh giá cao. Tester còn lại
đề xuất kết hợp hai cơ chế.

Vì vậy, iteration tiếp theo sẽ sử dụng:

> **Explainable Support Queue làm core interaction + AI-generated
> private check-in như một action tùy chọn do Lab Coach chủ động kích
> hoạt.**

Đây là hypothesis cho iteration tiếp theo, **không phải một solution
đã được validated**.

---

# 12. Observation bổ sung

> Các chi tiết về first action, evidence review và recovery được bổ sung sau phiên test theo hồi tưởng của facilitator; lựa chọn option và lý do lựa chọn là feedback được ghi nhận trực tiếp.

## OBSERVED

- Cả Phú, Vương và Tú đều đọc context trước khi bắt đầu thao tác.
- Không ghi nhận breakdown lớn; cả ba hiểu context và flow mà không cần giải thích đáng kể.
- Cả ba đều xem context/evidence trước khi đưa ra quyết định.
- Phú xem signals/evidence, chọn C và quan tâm tới khả năng review/edit trước khi gửi private check-in.
- Vương xem supporting evidence để hiểu recommendation, chọn B và muốn Coach giữ quyền quyết định hành động tiếp theo.
- Tú xem cả evidence của B và intervention của C trước khi đề xuất kết hợp hai cơ chế.
- Không tester nào đề xuất để AI tự động gửi intervention.

## INTERPRETED

- Các thao tác có thể cho thấy scenario và luồng chính đã đủ rõ cho vòng test hiện tại.
- Việc cả ba xem evidence trước quyết định gợi ý rằng explainability là một phần có giá trị, nhưng chưa chứng minh hành vi này sẽ được duy trì khi sử dụng dài hạn.
- Khác biệt giữa lựa chọn của Phú và Vương tiếp tục thể hiện trade-off giữa convenience và human control.

## DECIDED — NEXT CHANGE

Giữ Support Queue và bước review evidence của B làm core interaction. Chỉ sau khi Coach quyết định hỗ trợ, hệ thống mới cung cấp action tạo private check-in của C để Coach review, edit và approve.

## STILL UNPROVEN

Các observation bổ sung không thay đổi những giới hạn đã nêu tại Mục 10: độ chính xác của signals, hiệu quả của flow B + C, trust dài hạn, góc nhìn learner và tác động thực tế tới workload vẫn chưa được chứng minh.
