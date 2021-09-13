import React from 'react'
import styles from './Contact.module.sass'

const Contact = () => {
  return (
    <div className={styles.root}>

        <div className={styles.container}>
          <div className={styles.country}>
            <span className={styles.title}> 
              Г. Душанбе
            </span>
            <span className={styles.desc}>
             Мирзо Турсунзода 40
            </span>
            <span className={styles.desc}>
             Мирзо Турсунзода 40
            </span>
          </div>
        </div>

    </div>
  )
}

export default Contact
