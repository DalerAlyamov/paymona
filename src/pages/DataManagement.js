import React, { useEffect } from 'react'
import Single from '../components/SinglePapeComponent/SinglePapeComponent'
import styles from './page.module.sass'
import { ReactComponent as BusinessPlanBro } from '../vectors/business_plan_bro.svg'
import Login from '../components/Login/Login'

const DataManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

      <Login isDark />
    </div>
  )
}

export default DataManagement
