import React from 'react'
import classNames from 'classnames'
import styles from './Login.module.sass'
import rectangle from './rectangle.png' 

const Login = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      
      <img src={rectangle} className={styles.rectangle} alt="" />

    </div>
  )
}

export default Login
