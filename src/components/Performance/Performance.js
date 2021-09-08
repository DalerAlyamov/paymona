import React from 'react'
import classNames from 'classnames'
import styles from './Performance.module.sass'
import { ReactComponent as PanelHD } from './panel-hd.svg'
import { ReactComponent as PerfomanceVector } from './performance.svg'

const Performance = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)}>

      <div className={styles.container}>

        <Content />
        
        <div className={styles.panel_hd}>
          <PanelHD />
        </div>

        <div className={styles.perfomance_vector}>
          <PerfomanceVector />
        </div>

      </div>

    </div>
  )
}

const Content = () => {
  return (
    <div className={styles.content}>

      <span className={styles.title}>
        Paymona AI - аналитика<br/>на стероидах!
      </span>

      <span className={styles.description}>
        Мы сокращаем время, необходимое для создания и<br/>развертывания модели, как минимум на 50% за счет<br/>внедрения автоматизации и шаблонов.
      </span>

      <a className={styles.button} href='#contact'>
        Связаться  с нами
      </a>

    </div>
  )
}

export default Performance
