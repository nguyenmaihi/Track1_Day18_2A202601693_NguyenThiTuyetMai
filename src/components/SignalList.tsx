import type { Learner } from '../data/learners'

export function SignalList({ learner, detailed = false }: { learner: Learner; detailed?: boolean }) {
  const signals = [
    { icon: '◷', label: detailed ? 'Thời gian trên slide' : `${learner.timeOnSlide} trên slide`, value: detailed ? learner.timeOnSlide : undefined },
    { icon: '↻', label: detailed ? 'Xem lại' : `Đã xem lại ${learner.revisited} lần`, value: detailed ? `${learner.revisited} lần` : undefined },
    { icon: '◇', label: detailed ? 'Đánh dấu' : learner.markedUnclear ? 'Đã đánh dấu “Chưa hiểu”' : 'Không đánh dấu chưa hiểu', value: detailed ? (learner.markedUnclear ? '“Chưa hiểu”' : 'Không có') : undefined },
    { icon: '⇄', label: detailed ? 'Thay đổi câu trả lời' : `${learner.answerChanges} lần đổi câu trả lời`, value: detailed ? String(learner.answerChanges) : undefined },
  ]

  return (
    <div className={detailed ? 'signal-grid' : 'signal-list'}>
      {signals.map((signal) => (
        <div className="signal" key={signal.label}>
          <span className="signal-icon" aria-hidden="true">{signal.icon}</span>
          <div><span className="signal-label">{signal.label}</span>{signal.value && <strong>{signal.value}</strong>}</div>
        </div>
      ))}
    </div>
  )
}
