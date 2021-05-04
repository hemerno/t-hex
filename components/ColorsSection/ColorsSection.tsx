import React, { useState } from 'react'
import { WindowScroller, AutoSizer, Grid } from 'react-virtualized'
/* Components */
import ColorBox from '../ColorBox/ColorBox'
/* Styles */
import style from './ColorsSection.module.scss'

type Props = {
  colors: string[]
}

const ColorsSection: React.FC<Props> = ({ colors }) => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.colorsColumn}>
          {colors.map((hex, index) => (
            <ColorBox hex={hex} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ColorsSection
