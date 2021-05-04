import { ReactNode } from 'react'
/* Styles */
import style from './TextSection.module.scss'

type Props = {
  title: string
  children: ReactNode
}

const TextSection: React.FC<Props> = ({ title, children }) => {
  return (
    <section className={style.section}>
      <aside>
        <h3>{title}</h3>
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default TextSection
