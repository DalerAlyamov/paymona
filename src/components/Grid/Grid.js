import React from 'react'
import styles from './Grid.module.sass'
import { ReactComponent as Diversity } from './Diversity.svg'
import classNames from 'classnames'

const Grid = () => {
  return (
    <div className={styles.root}>

      <div className={styles.container}>
    
        <div className={styles.diversity}>
          <Diversity/>
        </div> 

        <div className={styles.cont}>
          <Container
          className={styles.mainTitle}
            title='НАШИ ЦЕННОСТИ'
          />
         <Container
         className={styles.point1}
          text='Мы стремимся нанимать исключительных ИТ-специалистов из всех слоев общества.'
         />   

        </div>


      </div>
    </div>
  )
}

 const Container = ({
   className,
   title,
   text
 }) =>{
   return(
     <div className={classNames(className, styles.content)}>
        <span className={styles.title}>
          {title}
        </span>

        <span className={styles.text}>
          {text}       
        </span>

     </div>
   )
 }

export default Grid
