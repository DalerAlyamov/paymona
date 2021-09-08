import React, { useEffect } from 'react'
import Single from '../components/SinglePapeComponent/SinglePapeComponent'
import styles from './page.module.sass'
import { ReactComponent as BusinessPlanBro3 } from '../vectors/business_plan_bro3.svg'
import Login from '../components/Login/Login'

const ML = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.root}> 
      
      <Single 
        title={<>Artificial Intelligence<br/>& Machine Learning</>}
        text={
          <>
            Машинное обучение — это один из подразделов науки, посвященной<br/>
            разработке и изучению ИИ.<br/><br/>
            Мы помогаем предприятиям создавать персонализированные<br/>
            ИИ-решения для извлечения практических идей или автоматизации<br/>
            принятия решений.<br/><br/>
            Организации сотрудничают с нами для создания моделей глубокого<br/>
            обучения, моделирования НЛП и автоматизации процессов.
          </>
        }
        vector={<BusinessPlanBro3 />}
      />

      <Login isDark />
    </div>
  )
}

export default ML
