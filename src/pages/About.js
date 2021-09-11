import React from 'react'
import styles from './page.module.sass'
import AboutCom from '../components/About/About'
import Login from '../components/Login/Login'

const About = () => {
  return (
    <div className={styles.root}>

      <AboutCom/>

      <Login isDark />

    </div>
  )
}

export default About
