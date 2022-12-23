/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <span>CREATE YOUR OWN RAINLINK</span>
      <img src='/images/logoNavbar.png' alt='logo' />
    </div>
  )
}

export default Footer
