import React from 'react'
import styles from './Contact.module.sass'

const Contact = () => {
  return (
    <div className={styles.root}>

        <div className={styles.container}>
          <div className={styles.country}>
            <span className={styles.title}> 
              г. Душанбе
            </span>
            <span className={styles.desc}>
             Мирзо Турсунзода 40
            </span>
            <span className={styles.desc}>
             Телефон: 88-444-73-75
            </span>
          </div>
          <div className={styles.country}>
            <span className={styles.title}> 
              
            </span>
            <span className={styles.desc}>
            Office@paymona.com
            </span>
            <span className={styles.desc}>
             Телефон: 88-444-73-75
            </span>
          </div>
        </div>

    </div>
  )
}

export default Contact
