import style from './Main.module.scss'

type Props = {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className={style.main}>{children}</main>
}

export default Main
