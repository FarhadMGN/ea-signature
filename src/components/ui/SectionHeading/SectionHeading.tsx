import './SectionHeading.css'

export type SectionHeadingProps = {
  eyebrow: string
  title: string
  lead?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, lead, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  )
}
