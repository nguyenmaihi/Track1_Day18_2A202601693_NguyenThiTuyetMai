import { PrototypeHeader } from '../components/PrototypeHeader'

type Page = 'a' | 'b' | 'c'

const options: { id: Page; code: string; title: string; subtitle: string; description: string }[] = [
  { id: 'a', code: 'A', title: 'Signal Dashboard', subtitle: 'Xem hoạt động học tập', description: 'Khám phá các tín hiệu gần đây và tự quyết định học viên nào cần được hỗ trợ.' },
  { id: 'b', code: 'B', title: 'Explainable Support Queue', subtitle: 'Xem đề xuất của AI', description: 'Kiểm tra thứ tự ưu tiên và bằng chứng đứng sau từng đề xuất.' },
  { id: 'c', code: 'C', title: 'AI Support Intervention', subtitle: 'Xem lời hỏi thăm đã chuẩn bị', description: 'Xem, sửa, hoãn, từ chối hoặc phê duyệt lời hỏi thăm riêng tư.' },
]

export function PrototypeHome({ onSelect }: { onSelect: (page: Page) => void }) {
  return (
    <main className="container home">
      <PrototypeHeader eyebrow="MICRO-PROTOTYPE" title="Chọn một phương án" description="Bạn là Trợ giảng đang hỗ trợ 50 học viên trong một buổi thực hành. Hãy dùng từng phương án để xác định ai nên được ưu tiên hỗ trợ và quyết định hành động tiếp theo." />
      <section className="context-card" aria-label="Bối cảnh phiên học">
        <div><span>Vai trò</span><strong>Trợ giảng</strong></div>
        <div><span>Lớp học</span><strong>Thiết lập môi trường Python</strong></div>
        <div><span>Học viên</span><strong>50</strong></div>
        <div><span>Trạng thái</span><strong className="live-text"><span className="live-dot" />Đang học</strong></div>
      </section>
      <section className="option-grid" aria-label="Các phương án prototype">
        {options.map((option) => (
          <button className="option-card" key={option.id} onClick={() => onSelect(option.id)}>
            <span className="option-code">Option {option.code}</span>
            <span className="option-arrow">→</span>
            <strong>{option.title}</strong>
            <span className="option-subtitle">{option.subtitle}</span>
            <span className="option-description">{option.description}</span>
          </button>
        ))}
      </section>
      <p className="home-hint">Hãy thử độc lập cả ba phương án. Lựa chọn trong một phương án không ảnh hưởng đến các phương án còn lại.</p>
    </main>
  )
}
