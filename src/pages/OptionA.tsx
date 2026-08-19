import { useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { LearnerCard } from '../components/LearnerCard'
import { PrototypeHeader } from '../components/PrototypeHeader'
import { SignalList } from '../components/SignalList'
import { learners, type Learner } from '../data/learners'

export function OptionA({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState<Learner | null>(null)
  const [decision, setDecision] = useState<'ignore' | 'compose' | 'sent' | null>(null)
  const [message, setMessage] = useState('')
  const reset = () => { setSelected(null); setDecision(null); setMessage('') }
  const openMessage = () => {
    if (!selected) return
    const firstName = selected.name.split(' ').at(-1)
    setMessage(`Chào ${firstName}, bạn đang ngồi ở phòng nào và vị trí nào? Mình sẽ đến hỗ trợ bạn nhé.`)
    setDecision('compose')
  }

  return (
    <main className="container">
      <PrototypeHeader eyebrow="OPTION A · SIGNAL DASHBOARD" title="Tín hiệu học tập" description="Các tín hiệu thể hiện hoạt động học tập gần đây. Chúng không xác định học viên có cần hỗ trợ hay không." onBack={onBack} onReset={reset} />
      {!selected ? (
        <section className="learner-grid">
          {learners.map((learner) => (
            <LearnerCard learner={learner} key={learner.id}>
              <SignalList learner={learner} />
              <ActionButton variant="secondary" onClick={() => setSelected(learner)}>Xem chi tiết <span>→</span></ActionButton>
            </LearnerCard>
          ))}
        </section>
      ) : (
        <section className="detail-panel">
          <button className="text-button" onClick={() => { setSelected(null); setDecision(null) }}>← Tất cả tín hiệu học tập</button>
          <div className="detail-identity"><span className="avatar avatar--large">{selected.initials}</span><div><h2>{selected.name}</h2><p>{selected.topic}</p></div></div>
          <h3>Hoạt động gần đây</h3>
          <SignalList learner={selected} detailed />
          <div className="chat-evidence"><span>Trò chuyện với AI</span><p>{selected.aiChat ? `“${selected.aiChat}”` : 'Không có hoạt động trò chuyện AI gần đây'}</p></div>
          <div className="notice notice--neutral"><span>i</span><p>Những hoạt động này không nhất thiết có nghĩa là học viên cần hỗ trợ.</p></div>
          {decision === 'ignore' || decision === 'sent' ? (
            <div className="confirmation" role="status"><span>✓</span><div><strong>{decision === 'sent' ? 'Đã gửi tin nhắn' : 'Tạm thời bỏ qua'}</strong><p>{decision === 'sent' ? `Tin nhắn của Lab Coach đã được gửi tới ${selected.name}.` : `${selected.name} vẫn sẽ xuất hiện trong Tín hiệu học tập.`}</p></div></div>
          ) : decision === 'compose' ? (
            <div className="message-composer">
              <label className="textarea-label" htmlFor="option-a-message">Tin nhắn của Lab Coach gửi tới {selected.name}</label>
              <textarea id="option-a-message" rows={4} value={message} onChange={(event) => setMessage(event.target.value)} />
              <div className="actions"><ActionButton variant="secondary" onClick={() => setDecision(null)}>Hủy</ActionButton><ActionButton onClick={() => setDecision('sent')} disabled={!message.trim()}>Gửi tin nhắn</ActionButton></div>
            </div>
          ) : (
            <div className="actions"><ActionButton variant="secondary" onClick={() => setDecision('ignore')}>Tạm thời bỏ qua</ActionButton><ActionButton onClick={openMessage}>Gửi câu hỏi</ActionButton></div>
          )}
        </section>
      )}
    </main>
  )
}
