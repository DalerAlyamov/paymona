import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.sass'
const Footer = () => {
  return (
    <div className={styles.root}>

      <div className={styles.container}>

        <div className={styles.services}>
          <span className={styles.title}>Услуги</span>  
          <Link to='/' className={styles.servicesItems}>Data management </Link>
          <Link to='/' className={styles.servicesItems}>BI & Analytics for Robust Analytics Solutions</Link>
          <Link to='/' className={styles.servicesItems}>Artificial Intelligence & Machine Learning</Link>
          <Link to='/' className={styles.servicesItems}>Data Science </Link>
       </div> 

        <div className={styles.AboutCompany}>
          <span className={styles.title}>О компании</span>
          <Link to='/' className={styles.servicesItems}>Политика конфиденциальности</Link>
          <Link to='/' className={styles.servicesItems}>Настройка файлов cookie</Link>
          <Link to='/' className={styles.servicesItems}>Работайте с нами</Link>
        </div>

        <div className={styles.}>
          <span className={styles.title}>О компании</span>
          <Link to='/' className={styles.servicesItems}>Политика конфиденциальности</Link>
          <Link to='/' className={styles.servicesItems}>Настройка файлов cookie</Link>
          <Link to='/' className={styles.servicesItems}>Работайте с нами</Link>
        </div>

      </div>

    </div>
  )
}

export default Footer
