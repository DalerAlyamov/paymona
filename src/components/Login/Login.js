import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './Login.module.sass'
import rectangle from './rectangle.png' 
import GoogleInput from '../GoogleInput/GoogleInput'
import TextareaAutosize from 'react-textarea-autosize'

const Login = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)} id='contact'>
      
      <img src={rectangle} className={styles.rectangle} alt="" />

      <Panel />

    </div>
  )
}

const Panel = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [organization, setOrganization] = useState('')
  const [position, setPosition] = useState('')
  const [msg, setMsg] = useState('')

  const handleSend = () => {

  }

  return (
    <div className={styles.panel}>

      <span className={styles.title}>
        Свяжитесь с нами
      </span>

      <div className={styles.wrap}>
        <div className={styles.wrap__left}>
          <GoogleInput
            className={styles.input}
            placeholder='ФИО'
            setValue={setName}
            value={name}
            required
          />

          <GoogleInput
            className={styles.input}
            placeholder='E-mail'
            setValue={setEmail}
            value={email}
            required
          />

          <GoogleInput
            className={styles.input}
            placeholder='Номер телефона'
            setValue={setPhone}
            value={phone}
            required
          />
        </div>
        <div className={styles.wrap__right}>
          <GoogleInput
            className={styles.input}
            placeholder='Организация'
            setValue={setOrganization}
            value={organization}
          />

          <GoogleInput
            className={styles.input}
            placeholder='Должность'
            setValue={setPosition}
            value={position}
          />
        </div>
      </div>

      <div className={styles.input_title}>
        Чем мы можем помочь? <span className={styles.required_star}>*</span>
      </div>

      <TextareaAutosize
        className={styles.textarea}
        minRows={6}
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />

      <button className={styles.send_btn} onClick={() => handleSend()}>
        Отправить
      </button>

    </div>
  )
}

export default Login
