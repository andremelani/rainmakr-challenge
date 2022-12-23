import React from 'react'
import Separator from '../Separator'
import styles from './styles.module.scss'

interface TitleInterface{
    text: string
}

const Title = ({text}: TitleInterface) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
      <Separator type='dark' />
    </div>
  )
}

export default Title
