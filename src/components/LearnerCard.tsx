import type { ReactNode } from 'react'
import type { Learner } from '../data/learners'

type Props = { learner: Learner; children: ReactNode; top?: ReactNode }

export function LearnerCard({ learner, children, top }: Props) {
  return (
    <article className="learner-card">
      {top && <div className="card-top">{top}</div>}
      <div className="learner-identity">
        <span className="avatar">{learner.initials}</span>
        <div><h2>{learner.name}</h2><p>{learner.topic}</p></div>
      </div>
      {children}
    </article>
  )
}
