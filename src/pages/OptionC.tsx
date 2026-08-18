import { useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { LearnerCard } from '../components/LearnerCard'
import { PrototypeHeader } from '../components/PrototypeHeader'
import { defaultMessage, interventionSuggestions, learners, type Learner } from '../data/learners'
import { Evidence } from './OptionB'

type Stage = 'list' | 'review' | 'edit' | 'ready' | 'sent' | 'dismissed' | 'later'

export function OptionC({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState<Learner | null>(null)
  const [stage, setStage] = useState<Stage>('list')
  const [messages, setMessages] = useState<Record<string, string>>({})
  const suggestions = interventionSuggestions.map((id) => learners.find((item) => item.id === id)!)
  const reset = () => { setSelected(null); setStage('list'); setMessages({}) }
  const choose = (learner: Learner) => { setSelected(learner); setStage('review') }
  const message = selected ? (messages[selected.id] ?? defaultMessage(selected)) : ''

  return (
    <main className="container">
      <PrototypeHeader eyebrow="OPTION C · AI SUPPORT INTERVENTION" title="Đề xuất hỗ trợ của AI" description="AI đã chuẩn bị lời hỏi thăm riêng tư cho những học viên có thể cần hỗ trợ. Không nội dung nào được gửi khi chưa có sự phê duyệt của bạn." onBack={onBack} onReset={reset} />
      {stage === 'list' && (
        <>
          <div className="privacy-banner"><span>⌾</span><p><strong>Bạn là người kiểm soát</strong>Mọi lời hỏi thăm đều phải được bạn xem và phê duyệt trước khi gửi riêng tư.</p></div>
          <section className="learner-grid learner-grid--suggestions">
            {suggestions.map((learner) => (
              <LearnerCard learner={learner} key={learner.id}>
                <div className="recommendation"><span>Khó khăn có thể gặp</span><strong>{learner.possibleDifficulty}</strong></div>
                <div className="ready-label"><span>✓</span> Đã chuẩn bị lời hỏi thăm</div>
                <ActionButton variant="secondary" onClick={() => choose(learner)}>Xem lại <span>→</span></ActionButton>
              </LearnerCard>
            ))}
          </section>
        </>
      )}
      {selected && stage === 'review' && (
        <section className="detail-panel">
          <button className="text-button" onClick={() => setStage('list')}>← Quay lại danh sách đề xuất</button>
          <div className="detail-identity"><span className="avatar avatar--large">{selected.initials}</span><div><h2>{selected.name}</h2><p>Khó khăn có thể gặp · {selected.possibleDifficulty}</p></div><span className="confidence-pill">Độ tin cậy: {selected.confidence === 'Medium' ? 'Trung bình' : 'Thấp'}</span></div>
          <h3>Dựa trên</h3><Evidence learner={selected} compact />
          <h3>Lời hỏi thăm riêng tư được đề xuất</h3>
          <div className="message-preview"><span className="private-label">Tin nhắn riêng tư</span><p>{message}</p></div>
          <button className="edit-button" onClick={() => setStage('edit')}>✎ Sửa tin nhắn</button>
          <div className="notice notice--privacy"><span>⌾</span><p>Không nội dung nào được gửi khi chưa có sự phê duyệt của bạn.</p></div>
          <div className="actions actions--spread"><div><ActionButton variant="danger" onClick={() => setStage('dismissed')}>Bỏ qua đề xuất</ActionButton><ActionButton variant="secondary" onClick={() => setStage('later')}>Để sau</ActionButton></div><ActionButton onClick={() => setStage('sent')}>Phê duyệt &amp; Gửi</ActionButton></div>
        </section>
      )}
      {selected && stage === 'edit' && <EditMessage learner={selected} value={message} onCancel={() => setStage('review')} onSave={(value) => { setMessages((current) => ({ ...current, [selected.id]: value })); setStage('ready') }} />}
      {selected && stage === 'ready' && (
        <section className="detail-panel compact-panel"><button className="text-button" onClick={() => setStage('edit')}>← Quay lại chỉnh sửa</button><span className="result-icon">✓</span><h2>Sẵn sàng gửi</h2><p>Tin nhắn sẽ được gửi riêng tư tới <strong>{selected.name}</strong>.</p><div className="message-preview"><span className="private-label">Tin nhắn riêng tư</span><p>{message}</p></div><div className="actions"><ActionButton variant="secondary" onClick={() => setStage('review')}>Quay lại</ActionButton><ActionButton onClick={() => setStage('sent')}>Phê duyệt &amp; Gửi</ActionButton></div></section>
      )}
      {selected && ['sent', 'dismissed', 'later'].includes(stage) && (
        <section className="result-panel"><span className="result-icon">{stage === 'dismissed' ? '×' : stage === 'later' ? '◷' : '✓'}</span><h2>{stage === 'sent' ? 'Đã gửi lời hỏi thăm riêng tư.' : stage === 'dismissed' ? 'Đã bỏ qua đề xuất.' : 'Đã lưu để xem sau.'}</h2><p>{stage === 'sent' ? `Tin nhắn mô phỏng đã được gửi riêng tư tới ${selected.name}.` : `Không có tin nhắn nào được gửi tới ${selected.name}.`}</p><ActionButton variant="secondary" onClick={() => setStage('list')}>Quay lại danh sách đề xuất</ActionButton></section>
      )}
    </main>
  )
}

function EditMessage({ learner, value, onCancel, onSave }: { learner: Learner; value: string; onCancel: () => void; onSave: (value: string) => void }) {
  const [draft, setDraft] = useState(value)
  return <section className="detail-panel"><button className="text-button" onClick={onCancel}>← Quay lại xem xét</button><div className="detail-identity"><span className="avatar avatar--large">{learner.initials}</span><div><h2>Sửa lời hỏi thăm riêng tư</h2><p>Gửi tới {learner.name}</p></div></div><label className="textarea-label" htmlFor="check-in">Tin nhắn</label><textarea id="check-in" rows={7} value={draft} onChange={(event) => setDraft(event.target.value)} /><p className="field-hint">Tin nhắn này vẫn ở chế độ riêng tư và sẽ không được gửi cho đến khi bạn phê duyệt.</p><div className="actions"><ActionButton variant="secondary" onClick={onCancel}>Hủy</ActionButton><ActionButton onClick={() => onSave(draft)} disabled={!draft.trim()}>Lưu &amp; Xem lại</ActionButton></div></section>
}
