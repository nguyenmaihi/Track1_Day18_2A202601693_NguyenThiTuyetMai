type Props = {
  eyebrow?: string
  title: string
  description: string
  onBack?: () => void
  onReset?: () => void
}

export function PrototypeHeader({ eyebrow, title, description, onBack, onReset }: Props) {
  return (
    <>
      {(onBack || onReset) && (
        <nav className="prototype-nav" aria-label="Điều hướng prototype">
          {onBack && <button className="text-button" onClick={onBack}>← Về trang chủ Prototype</button>}
          {onReset && <button className="text-button reset-button" onClick={onReset}>↻ Đặt lại phương án</button>}
        </nav>
      )}
      <div className="page-heading">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}
