import React from 'react'
import Single from '../components/SinglePapeComponent/SinglePapeComponent'
import styles from './page.module.sass'
import { ReactComponent as BusinessPlanBro } from '../vectors/business_plan_bro.svg'
import { ReactComponent as BusinessPlanBro2 } from '../vectors/business_plan_bro2.svg'
import { ReactComponent as BusinessPlanBro3 } from '../vectors/business_plan_bro3.svg'
// import { ReactComponent as BusinessPlanBro4 } from '../vectors/business_plan_bro4.svg'
import Login from '../components/Login/Login'

const Services = () => {
  return (
    <div className={styles.root}> 
      <Single 
        title={<>Data<br/>management</>}
        text={
          <>
            Мы сотрудничаем с клиентами для организации крупномасштабного<br/>управления данными<br/><br/>Наши инженеры обладают практическим опытом в создании, управлении<br/>и миграции петабайтных озер и хранилищ данных с использованием<br/>последних достижений в области технологий.<br/><br/>Таким образом, предприятия могут получить оптимальные затраты на<br/>хранение, удобство обслуживания и извлечения данных.
          </>
        }
        vector={<BusinessPlanBro />}
      />
      
      <Single 
        title={<>BI & Analytics for Robust<br/>Analytics Solutions</>}
        text={
          <>
            Практика бизнес-аналитики помогает заинтересованным сторонам<br/>
            извлекать пользу из данных. Наши группы по работе с большими<br/>
            данными.помогают создавать настраиваемые информационные панели,<br/>
            настраивать корпоративный поиск и проектировать визуализацию<br/>
            потоков данных в реальном времени.<br/><br/>
            Мы используем популярные инструменты бизнес-аналитики и создаем<br/>
            индивидуальные платформы с использованием технологий с открытым<br/>
            исходным кодом.
          </>
        }
        vector={<BusinessPlanBro2 />}
      />
      
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

export default Services
