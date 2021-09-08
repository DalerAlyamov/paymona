import React, { useEffect } from 'react'
import Single from '../components/SinglePapeComponent/SinglePapeComponent'
import styles from './page.module.sass'
import { ReactComponent as BusinessPlanBro2 } from '../vectors/business_plan_bro2.svg'
import Login from '../components/Login/Login'

const BI = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.root}> 
      
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

      <Login isDark />
    </div>
  )
}

export default BI
