export function PriorityBadge({ value }: { value: 'High' | 'Medium' }) {
  return <span className={`badge badge--${value.toLowerCase()}`}>Ưu tiên {value === 'High' ? 'cao' : 'trung bình'}</span>
}

export function ConfidenceBadge({ value }: { value: 'Medium' | 'Low' }) {
  return <span className="confidence">Độ tin cậy: <strong>{value === 'Medium' ? 'Trung bình' : 'Thấp'}</strong></span>
}
