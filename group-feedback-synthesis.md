# Group Feedback Synthesis — AI Support Radar

Nguồn evidence: `prototype-feedback-note.md`. Ba tester là Lab Coach **Phú, Vương và Tú**; cả ba trải nghiệm A, B và C với cùng context, task và learner fixture.

> Các chi tiết về first action, evidence review và recovery được bổ sung sau phiên test theo hồi tưởng của facilitator. Lựa chọn option và lý do lựa chọn là feedback được ghi nhận trực tiếp.

| Nội dung | Phú | Vương | Tú | Pattern / Khác biệt |
|---|---|---|---|---|
| **First action** | Đọc context trước khi thao tác | Đọc context trước khi thao tác | Đọc context trước khi thao tác | Cả ba đều đọc context trước khi thực hiện task |
| **Breakdown chính** | Không ghi nhận breakdown lớn | Không ghi nhận breakdown lớn | Không ghi nhận breakdown lớn | Cả ba hiểu context và hoàn thành flow mà không cần giải thích đáng kể |
| **Evidence read/ignored** | Xem signals/evidence trước khi cân nhắc hỗ trợ | Xem evidence để hiểu vì sao learner vào Support Queue | Xem evidence của B và intervention của C trước khi đề xuất kết hợp | Cả ba quan tâm tới context/evidence trước quyết định |
| **Control / recovery** | Đánh giá cao khả năng review/edit trước khi gửi private check-in | Muốn Coach giữ quyền quyết định sau recommendation | Muốn giữ review của B và chỉ dùng intervention của C khi cần | Không tester nào đề xuất để AI tự hành động hoàn toàn |
| **Option được chọn** | **C** | **B** | **Kết hợp B + C** | Không có một option thắng tuyệt đối |
| **Trade-off** | Ưu tiên convenience và giảm manual effort | Ưu tiên human control hơn automation | Cân bằng control và convenience | Trade-off chính là **Human Control ↔ AI Convenience** |

## OBSERVED

- Cả ba tester bắt đầu bằng việc đọc context trước khi thực hiện task.
- Không ghi nhận breakdown lớn; cả ba đánh giá context và flow rõ ràng.
- Phú chọn **Option C** vì private check-in được chuẩn bị sẵn giúp Coach giảm thao tác và tiếp cận learner nhanh hơn. Phú vẫn quan tâm tới khả năng review/edit trước khi tin nhắn được gửi.
- Vương chọn **Option B** vì muốn Lab Coach giữ nhiều quyền chủ động hơn và không muốn AI đi quá xa trong việc chuẩn bị sẵn hành động hỗ trợ. Supporting evidence giúp Coach có thêm context nhưng vẫn giữ quyền quyết định.
- Tú đề xuất **kết hợp B + C**: giữ bước review recommendation/evidence của B, sau đó cung cấp private intervention của C khi Coach thực sự muốn hỗ trợ learner.
- Không tester nào chọn Option A làm phương án ưu tiên cuối cùng, nhưng cũng không có phản hồi cho thấy A khó hiểu.
- Không tester nào đề xuất để AI tự động gửi intervention mà không có bước kiểm soát của Lab Coach.

## INTERPRETED — Pattern

- Việc cả ba tester hoàn thành flow mà không gặp breakdown lớn có thể cho thấy prototype đủ rõ cho vòng comparative test hiện tại.
- Không tester nào ưu tiên A có thể gợi ý rằng chỉ tổng hợp raw signals chưa cung cấp mức hỗ trợ mà ba Lab Coach này mong muốn.
- Phản hồi của Phú gợi ý rằng AI-generated intervention có thể giảm manual effort nếu Coach vẫn được review trước khi gửi.
- Phản hồi của Vương cho thấy human control vẫn quan trọng; AI có thể phát hiện và ưu tiên nhưng Coach muốn tự quyết định hành động.
- Đề xuất của Tú gợi ý B và C không nhất thiết là hai lựa chọn loại trừ nhau.
- Trade-off nổi bật trong ba phiên test là **Human Control ↔ AI Convenience**.

Đây là initial feedback từ ba tester, không phải thống kê đại diện cho Lab Coach nói chung.

## DECIDED — NEXT CHANGE

**Thay đổi:** Kết hợp Explainable Support Queue của Option B với private intervention tùy chọn của Option C.

Flow iteration tiếp theo:

```text
Learning Signals
       ↓
AI detects & prioritizes
       ↓
Explainable Support Queue
       ↓
Coach reviews evidence
       ↓
Coach decides to support
       ↓
[Generate private check-in]
       ↓
AI generates suggested message
       ↓
Coach reviews / edits
       ↓
Coach approves
       ↓
Private check-in sent
```

**Evidence dẫn tới quyết định:**

- Phú chọn C vì private check-in thuận tiện và giảm manual effort.
- Vương chọn B vì muốn giữ nhiều quyền chủ động hơn.
- Tú trực tiếp đề xuất kết hợp B và C.

**Tại sao chọn thay đổi này:**

Thay đổi giữ bước review evidence và quyền quyết định của B, đồng thời cung cấp convenience của C như một action tùy chọn. AI chỉ tạo private check-in sau khi Coach đã review evidence và chủ động yêu cầu; AI không tự gửi intervention.

## STILL UNPROVEN

- Chưa biết behavioral signals có dự đoán difficulty đủ chính xác hay không.
- Hướng kết hợp B + C chưa được user test và chưa thể coi là tốt hơn các option ban đầu.
- Chưa biết Coach có duy trì việc kiểm tra evidence khi sử dụng dài hạn hay sẽ phụ thuộc vào AI priority.
- Chưa biết learner cảm thấy thế nào khi AI suy luận từ hành vi học tập và nội dung AI Chat.
- Chưa biết Support Radar có thực sự giảm thời gian chờ hoặc workload trong lớp thật hay không.
