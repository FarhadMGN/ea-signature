import './SectionHeading.css'

export type SectionHeadingProps = {
  title: string
  eyebrow?: string
  lead?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, lead, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  )
}
