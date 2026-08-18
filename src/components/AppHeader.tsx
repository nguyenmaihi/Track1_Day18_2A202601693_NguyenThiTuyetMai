type Props = { onHome: () => void }

export function AppHeader({ onHome }: Props) {
  return (
    <header className="app-header">
      <button className="brand" onClick={onHome} aria-label="Về trang chủ prototype">
        <span className="brand-mark" aria-hidden="true">⌁</span>
        <span>AI Support Radar</span>
      </button>
      <div className="session-status"><span className="live-dot" />Phiên học đang diễn ra</div>
    </header>
  )
}
