import { useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { ConfidenceBadge, PriorityBadge } from '../components/Badges'
import { LearnerCard } from '../components/LearnerCard'
import { PrototypeHeader } from '../components/PrototypeHeader'
import { learners, supportQueue, type Learner } from '../data/learners'

type Decision = 'dismiss' | 'contact' | null

export function OptionB({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState<Learner | null>(null)
  const [decision, setDecision] = useState<Decision>(null)
  const [dismissed, setDismissed] = useState<string[]>([])
  const queue = supportQueue.map((id) => learners.find((item) => item.id === id)!).filter((item) => !dismissed.includes(item.id))
  const reset = () => { setSelected(null); setDecision(null); setDismissed([]) }
  const dismiss = () => { if (selected) setDismissed((items) => [...items, selected.id]); setDecision('dismiss') }

  return (
    <main className="container">
      <PrototypeHeader eyebrow="OPTION B · EXPLAINABLE SUPPORT QUEUE" title="Hàng đợi hỗ trợ của AI" description="AI sử dụng các tín hiệu học tập gần đây để đề xuất những học viên có thể cần hỗ trợ. Hãy xem bằng chứng trước khi hành động." onBack={onBack} onReset={reset} />
      {!selected ? (
        <>
          <div className="section-meta"><strong>{queue.length} học viên được đề xuất</strong><span>Ưu tiên theo tín hiệu gần đây</span></div>
          <section className="learner-grid learner-grid--queue">
            {queue.map((learner, index) => (
              <LearnerCard learner={learner} key={learner.id} top={<><span className="queue-number">{index + 1}</span><PriorityBadge value={learner.priority!} /></>}>
                <div className="recommendation"><span>Khó khăn có thể gặp</span><strong>{learner.possibleDifficulty}</strong></div>
                <ConfidenceBadge value={learner.confidence!} />
                <ActionButton variant="secondary" onClick={() => setSelected(learner)}>Xem bằng chứng <span>→</span></ActionButton>
              </LearnerCard>
            ))}
          </section>
          {queue.length === 0 && <div className="empty-state"><strong>Đã xem hết hàng đợi</strong><p>Không còn đề xuất nào trong Hàng đợi hỗ trợ hiện tại.</p></div>}
        </>
      ) : decision ? (
        <section className="result-panel">
          <span className="result-icon">{decision === 'dismiss' ? '×' : '✓'}</span>
          <h2>{decision === 'dismiss' ? 'Đã bỏ qua đề xuất.' : 'Sẵn sàng liên hệ'}</h2>
          <p>{decision === 'dismiss' ? `${selected.name} đã được xóa khỏi Hàng đợi hỗ trợ hiện tại.` : selected.name}</p>
          {decision === 'contact' && <ActionButton>Mở hỗ trợ riêng tư</ActionButton>}
          <ActionButton variant="secondary" onClick={() => { setSelected(null); setDecision(null) }}>Quay lại hàng đợi</ActionButton>
        </section>
      ) : (
        <section className="detail-panel">
          <button className="text-button" onClick={() => setSelected(null)}>← Quay lại hàng đợi</button>
          <div className="detail-identity"><span className="avatar avatar--large">{selected.initials}</span><div><h2>{selected.name}</h2><p>{selected.topic}</p></div></div>
          <div className="summary-row"><div><span>Khó khăn có thể gặp</span><strong>{selected.possibleDifficulty}</strong></div><div><span>Mức ưu tiên</span><PriorityBadge value={selected.priority!} /></div><div><span>Độ tin cậy</span><strong>{selected.confidence === 'Medium' ? 'Trung bình' : 'Thấp'}</strong></div></div>
          <h3>Vì sao học viên này được đề xuất</h3>
          <Evidence learner={selected} />
          <div className="suggested-action"><span>Hành động đề xuất</span><p>Kiểm tra xem {selected.name.split(' ').at(-1)} có đang bị vướng ở phần {selected.possibleDifficulty.toLowerCase()} hay không.</p></div>
          <div className="notice notice--neutral"><span>i</span><p>Đây là đề xuất của AI dựa trên hoạt động gần đây. Hãy xem bằng chứng và sử dụng đánh giá của bạn.</p></div>
          <div className="actions"><ActionButton variant="secondary" onClick={dismiss}>Bỏ qua đề xuất</ActionButton><ActionButton onClick={() => setDecision('contact')}>Liên hệ học viên</ActionButton></div>
        </section>
      )}
    </main>
  )
}

export function Evidence({ learner, compact = false }: { learner: Learner; compact?: boolean }) {
  const evidence = [
    learner.markedUnclear ? 'Đã đánh dấu “Chưa hiểu”' : null,
    `Đã xem lại phần ${learner.topic} ${learner.revisited} lần`,
    `Dừng ở slide trong ${learner.timeOnSlide}`,
    !compact && learner.answerChanges ? `Đã đổi câu trả lời ${learner.answerChanges} lần` : null,
    learner.aiChat ? (compact ? `Trò chuyện AI về: “${learner.aiChat}”` : `Đã hỏi AI Chat: “${learner.aiChat}”`) : null,
  ].filter(Boolean)
  return <ul className="evidence-list">{evidence.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
}
