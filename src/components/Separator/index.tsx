import React from 'react'
import styles from './styles.module.scss'

interface SeparatorInterface{
  type: 'dark' | 'light' | 'darkLight'
}

const Separator = ({type}: SeparatorInterface) => {

  const background = {
    dark: "#0E181A",
    light: "#42585F",
    darkLight: "#182123"
  };
  const height = {
    dark: "0.8px",
    light: "1px",
    darkLight: "1px",
  };
  return (
    <div className={styles.container} style={{
      background: background[type],
      height: height[type],
    }}>
      
    </div>
  )
}

export default Separator
