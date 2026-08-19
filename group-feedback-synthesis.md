# Group Feedback Synthesis — AI Support Radar

Nguồn evidence: `prototype-feedback-note.md`. Ba tester là Lab Coach Phú, Vương và Tú; cả ba trải nghiệm A, B và C với cùng context, task và learner fixture.

| Nội dung | Phú | Vương | Tú | Pattern / Khác biệt |
|---|---|---|---|---|
| First action | [TODO: note nguồn chưa ghi] | [TODO: note nguồn chưa ghi] | [TODO: note nguồn chưa ghi] | Chưa đủ evidence để tổng hợp |
| Breakdown chính | Không ghi nhận breakdown lớn; context và flow được đánh giá rõ | Không ghi nhận breakdown lớn; context và flow được đánh giá rõ | Không ghi nhận breakdown lớn; context và flow được đánh giá rõ | Cả ba phản hồi prototype dễ hiểu, nhưng note chưa ghi thao tác cụ thể |
| Evidence read/ignored | [TODO: note nguồn chưa ghi] | [TODO: note nguồn chưa ghi] | [TODO: note nguồn chưa ghi] | Chưa biết tester có kiểm tra supporting evidence trước khi quyết định hay không |
| Control / recovery | Muốn Coach giữ nhiều quyền chủ động hơn | Đánh giá cao việc AI chuẩn bị sẵn private check-in | Muốn control của B kết hợp convenience của C | Nhu cầu control và convenience khác nhau giữa các tester |
| Option được chọn | B | C | Kết hợp B + C | Không có một option thắng tuyệt đối |
| Trade-off | Human control hơn automation | Convenience hơn manual effort | Cân bằng control và convenience | Trade-off chính là Human Control ↔ AI Convenience |

## OBSERVED

- Phú chọn Option B và nêu mong muốn Lab Coach giữ nhiều quyền chủ động hơn, không muốn AI đi quá xa trong việc chuẩn bị sẵn hành động hỗ trợ.
- Vương chọn Option C vì việc AI chuẩn bị câu hỏi riêng tư được đánh giá là tiện hơn và giảm thao tác cho Coach.
- Tú đề xuất kết hợp khả năng review và kiểm soát của B với private intervention của C.
- Cả ba phản hồi context và flow rõ ràng; note nguồn không ghi nhận breakdown lớn.
- Không tester nào chọn Option A làm phương án ưu tiên cuối cùng.
- [TODO: bổ sung first action, hesitation, evidence read/ignored và thao tác recovery thực tế của từng tester nếu có ghi chép gốc]

## INTERPRETED — Pattern

- Behavior lặp lại: trong ba phiên test, các tester đều nghiêng về phương án có nhiều AI assistance hơn việc chỉ hiển thị raw signals ở A.
- Behavior chỉ xuất hiện ở một tester: đề xuất trực tiếp kết hợp B + C chỉ xuất hiện ở Tú.
- Feedback khác biệt: Phú ưu tiên human control của B, trong khi Vương ưu tiên convenience của C.
- Feedback có thể gợi ý rằng private intervention vẫn có giá trị nếu nó chỉ được tạo sau khi Coach đã review evidence và chủ động yêu cầu.

Đây là initial feedback từ ba tester, không phải thống kê đại diện cho Lab Coach nói chung.

## DECIDED — Next Change

**Thay đổi:** Kết hợp Explainable Support Queue của Option B với private intervention tùy chọn của Option C.

Flow mới: Coach xem AI Support Queue và supporting evidence trước. Chỉ khi Coach quyết định hỗ trợ và chủ động chọn tạo lời hỏi thăm, AI mới chuẩn bị private check-in để Coach tiếp tục sửa hoặc phê duyệt.

**Evidence dẫn tới quyết định:**

- Phú chọn B vì muốn giữ nhiều quyền chủ động hơn.
- Vương chọn C vì private check-in chuẩn bị sẵn thuận tiện và giảm manual effort.
- Tú trực tiếp đề xuất kết hợp B và C.

**Tại sao chọn thay đổi này:**

Thay đổi giữ bước review evidence và quyền quyết định của B, đồng thời cung cấp convenience của C như một action tùy chọn. AI không chủ động chuẩn bị hoặc gửi intervention trước khi Coach yêu cầu.

## STILL UNPROVEN

- Chưa biết behavioral signals có dự đoán difficulty đủ chính xác hay không.
- Hướng kết hợp B + C chưa được user test và chưa thể coi là tốt hơn các option ban đầu.
- Chưa biết Coach có duy trì việc kiểm tra evidence khi sử dụng dài hạn hay sẽ phụ thuộc vào AI priority.
- Chưa biết learner cảm thấy thế nào khi AI suy luận từ hành vi học tập và nội dung AI Chat.
- Chưa biết Support Radar có thực sự giảm thời gian chờ hoặc workload trong lớp thật hay không.
