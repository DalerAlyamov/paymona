import React from 'react'
import classNames from 'classnames'
import styles from './Services.module.sass'
import roadMap from './road-map.png'
import { ReactComponent as WorkspaceAmico } from './workspace-amico.svg'
import { ReactComponent as DesignPana } from './design-pana.svg'
import { Link } from 'react-router-dom'
import { KeyboardArrowRight } from '../../icons'
 
const Services = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)}>

      <div className={styles.container}>
        
        <img src={roadMap} className={styles.road_map_png} alt="" />

        <div className={styles.worlspace_amico}>
          <WorkspaceAmico />
        </div>

        <div className={styles.title}>
          Как мы это<br/>делаем:
        </div>

        <div className={styles.description}>
          Как консалтинговая<br/>компания по ИИ, мы можем<br/>поддержать вас на любом<br/>этапе вашего проекта.
        </div>

        <div className={styles.points}>
          <Point
            className={styles.point_1}
            title='Открытие'
            description='На этом начальном этапе цель команды - полностью понять бизнес-проблему, чтобы определить пути решения.'
          />

          <Point
            className={styles.point_2}
            title='Сбор и подготовка данных'
            description='Наши инженеры по обработке данных подготовят, очистят и преобразуют ваши данные в соответствии с целями проекта.'
          />

          <Point
            className={styles.point_3}
            title='Моделирование'
            description='Наши аналитики изучат и проанализируют данные и найдут наиболее актуальные алгоритмы для обучия моделей.'
          />

          <Point
            className={styles.point_4}
            title={<>Развертывание, мониторинг,<br/> оценка и улучшение</>}
            description='Мы продолжим отслеживать производительность системы и то, как модели взаимодействуют с новыми данными.'
          />
        </div>

        <ServicesList />

      </div>

    </div>
  )
}

const Point = ({
  className,
  title,
  description
}) => {
  return (
    <div className={classNames(className, styles.point)}>

      <span className={styles.point__title}>
        {title}
      </span>

      <span className={styles.point__description}>
        {description}
      </span>

    </div>
  )
}

const ServicesList = () => {
  return (
    <div className={styles.services_list}>

      <div className={styles.services_list__view}>
        
        <span className={styles.services_list__title}>
          НАШИ УСЛУГИ:
        </span>

        <div className={styles.services_list__vector}>
          <DesignPana />
        </div>

      </div>

      <div className={styles.services_list__list}>
        <Link className={styles.services_list__link} to='/data-management'>
          <span>
            Data management 
          </span>
          <KeyboardArrowRight size={38} />
        </Link>
        <Link className={styles.services_list__link} to='/bi'>
          <span>
            BI & Analytics for Robust Analytics Solutions 
          </span>
          <KeyboardArrowRight size={38} />
        </Link>
        <Link className={styles.services_list__link} to='/ml'>
          <span>
            Artificial Intelligence & Machine Learning
          </span>
          <KeyboardArrowRight size={38} />
        </Link>
        <Link className={styles.services_list__link} to='/data-science'>
          <span>
            Data Science 
          </span>
          <KeyboardArrowRight size={38} />
        </Link>
      </div>

    </div>
  )
}

export default Services
