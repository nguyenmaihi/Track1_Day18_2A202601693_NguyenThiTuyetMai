# Track 1 Day 18 — AI Support Radar

## 1. Thông tin cá nhân và nhóm

- MHV: 2A202601693
- Họ tên: Nguyễn Thị Tuyết Mai
- Nhóm: Flaiiin
- Thành viên: Lê Thị Linh
- Case: AI Support Radar

## 2. Hypothesis Problem

Khi theo dõi nhiều learner trong buổi Lab, Lab Coach gặp khó khăn trong việc phát hiện và ưu tiên learner đang cần hỗ trợ vì việc nhận biết hiện phụ thuộc chủ yếu vào learner chủ động giơ tay hoặc Coach quan sát thủ công, trong khi một số learner ngại yêu cầu hỗ trợ công khai và Coach có thời gian hỗ trợ hạn chế, dẫn đến learner có thể phải chờ lâu, bị bỏ sót hoặc nhận hỗ trợ không đúng thời điểm.

## 3. Evidence từ Day 17

Evidence ban đầu trong design sheet gợi ý rằng:

- Learner có thể ngại yêu cầu hỗ trợ công khai và chuyển sang hỏi công cụ khác.
- Coach hiện phụ thuộc nhiều vào việc learner giơ tay và quan sát thủ công.
- Coach có capacity hạn chế, vì vậy phát hiện và ưu tiên đều là vấn đề cần xem xét.

Đây là evidence ban đầu cho hypothesis, không phải bằng chứng rằng giải pháp đã được kiểm chứng.

## 4. Three Solution Options

### A — Signal Dashboard

AI chỉ thu thập, nhóm và hiển thị learning signals. Coach tự diễn giải, tự ưu tiên và quyết định hành động (`AI Don't Act`).

### B — Explainable Support Queue

AI phân tích signals, đề xuất mức ưu tiên và giải thích evidence. Coach kiểm tra rồi quyết định liên hệ hoặc bỏ qua (`AI Ask`).

### C — AI Support Intervention

AI chuẩn bị một lời hỏi thăm riêng tư dựa trên signals. Coach có thể sửa, hoãn, bỏ qua hoặc phê duyệt; hệ thống không tự gửi (`AI prepares action → Ask before external action`).

- [Three-option Design Sheet](three-option-design-sheet.md)
- [Prototype](prototype-link.md)

## 5. Đóng góp của tôi trong nhóm

- Xây dựng micro-prototype A/B với common context và learner fixture dùng chung.
- Thể hiện các quyết định Human–AI trong prototype: Coach giữ final authority, Option A không suy luận, Option B giải thích recommendation.
- Phỏng vấn Lab Coach, ghi lại evidences.
- Facilitate user test với Lab Coach, ghi lại lựa chọn, trade-off và observation để tham gia tổng hợp feedback.

## 6. Prototype Feedback

Ba Lab Coach Phú, Vương và Tú đã trải nghiệm cả ba phương án. Phú chọn C vì private check-in chuẩn bị sẵn thuận tiện hơn; Vương chọn B để giữ nhiều quyền chủ động hơn; Tú đề xuất kết hợp B + C. Initial feedback cho thấy trade-off chính là **Human Control ↔ AI Convenience**, không có một option thắng tuyệt đối.

Next Change là dùng Explainable Support Queue của B làm core interaction và chỉ tạo private intervention của C khi Coach đã review evidence rồi chủ động yêu cầu. Hướng kết hợp này chưa được user test; độ chính xác của signals, trust dài hạn, góc nhìn learner và tác động thực tế tới workload vẫn chưa được chứng minh.

- [My Prototype Feedback Note](prototype-feedback-note.md)
- [Group Feedback Synthesis](group-feedback-synthesis.md)

## 7. AI Support Log

AI đã hỗ trợ triển khai code và cấu trúc artifact. Mock data, priority và confidence trong prototype chỉ là canned output cho user test, không phải kết quả từ model thật.

- [AI Support Log](ai-support-log.md)

## 8. Repository Structure

```text
.
├── README.md
├── three-option-design-sheet.md
├── prototype-link.md
├── prototype-feedback-note.md
├── group-feedback-synthesis.md
├── ai-support-log.md
├── prototype-notes.md
├── test/
│   └── test-guide.md
└── src/
    ├── components/
    ├── data/learners.ts
    ├── pages/
    ├── App.tsx
    └── main.tsx
```
