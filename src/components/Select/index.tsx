import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

interface SelectInterface {
    label:string,
    children: ReactNode
}

const Select = ({label, children}: SelectInterface) => {
  return (
    <div className={styles.container}>
        <label>{label}</label>
        <select>{children}</select>
    </div>
  )
}

export default Select
