import { useState } from 'react'
/* Styles */
import style from './ColorBox.module.scss'

type ColorBoxProps = {
  hex: string
}

const ColorBox: React.FC<ColorBoxProps> = ({ hex }) => {
  const [buffer, setBuffer] = useState('')

  /* Handle copy on click */
  const copyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setBuffer('Copied!')
        setTimeout(() => {
          setBuffer('')
        }, 1200)
      },
      () => {
        setBuffer('Failed to copy!')
        setTimeout(() => {
          setBuffer('')
        }, 1200)
      }
    )
  }

  return (
    <article
      key={hex}
      className={style.colorWrapper}
      onClick={() => copyToClipboard('#'.concat(hex))}
    >
      <div
        className={style.colorSquare}
        style={{ background: '#'.concat(hex) }}
      ></div>
      <div className={style.colorHex}>{'#'.concat(hex)}</div>
      {buffer && <div className={style.clipboardState}>{buffer}</div>}
    </article>
  )
}

export default ColorBox
