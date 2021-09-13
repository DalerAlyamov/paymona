import React from 'react'
import styles from './Contact.module.sass'

const Contact = () => {
  return (
    <div className={styles.root}>

        <div className={styles.container}>
          <div className={styles.country}>
            <span className={styles.title}> 
                Страна
                <span>
                Г. Душанбе
                </span>
            </span>
          </div>
        </div>

    </div>
  )
}

export default Contact
