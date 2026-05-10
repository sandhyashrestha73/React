import React from 'react'
import styles from './Button.module.css'
const Button = () => {
  return (
    <div className={styles.parent}>
    <div className={styles.button}>This is button</div>
     <div className={styles.login}>Login</div>
    </div>
  )
}

export default Button