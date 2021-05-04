/* Components */
import Navbar from '../Navbar/Navbar'
/* Styles */
import style from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Navbar />
      <section className={style.center}>
        <div className={style.shapeContainer}>
          <div className={style.shape}></div>
        </div>
        <div className={style.mainHeading}>
          <h1>Every 3-character hex color in one place</h1>
        </div>
      </section>
    </header>
  )
}

export default Header
