/* Styles */
import style from './Container.module.scss'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default Container
