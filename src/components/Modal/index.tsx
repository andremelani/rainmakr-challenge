import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Children{
    children: ReactNode

}


const Modal = ({children}: Children) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
