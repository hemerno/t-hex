import Link from 'next/link'
import { useRouter } from 'next/router'
/* Styles */
import style from './Navbar.module.scss'

const Navbar: React.FC = () => {
  const router = useRouter()
  return (
    <nav className={style.nav}>
      <Link href="/">
        <h1>T-hex</h1>
      </Link>
      <ul className={style.rightBlock}>
        <li className={router.pathname == '/colors' ? style.active : ''}>
          <Link href="/colors">Colors</Link>
        </li>
        {/* For future updates ;) */}
        {/* <li className={router.pathname == '/selected' ? style.active : ''}>
          <Link href="/selected">Editor’s Picks</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
