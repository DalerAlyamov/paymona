import React from 'react'
import classNames from 'classnames'
import styles from './SinglePapeComponent.module.sass'
import rectangle from './rectangle.png'

const SinglePapeComponent = ({
  className,
  vector,
  title,
  text
}) => {
  return (
    <div className={classNames(className, styles.root)}>

      <div className={styles.container}>
      
        <img src={rectangle} className={styles.rectangle} alt="" />

        <div className={styles.headling}>

          <span className={styles.title}>
            {title}
          </span>

          <a className={styles.button} href='#contact'>
            Связаться  с нами
          </a>

        </div>

        <div className={styles.vector}>
          {vector}
        </div>

        <div className={styles.text}>
          {text}
        </div>

      </div>

    </div>
  )
}

export default SinglePapeComponent
