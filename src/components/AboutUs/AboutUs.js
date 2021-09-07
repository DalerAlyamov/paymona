import React from 'react'
import styles  from './AboutUs.module.sass'
import rectangle from './Rectangle.png'
import aboutUsIcon from './About_us.png'
import { ReactComponent as SelectingTeam } from './Selecting_team.svg'
import { ReactComponent as Coworking } from './Coworking.svg'

const AboutUs = () => {
  return (
    <div className={styles.root}>

      <div className={styles.container}>
        <Container/>

        <div className={styles.Selecting_team}>
          <SelectingTeam />
        </div>

        <div className={styles.Coworking}>
          <Coworking />
        </div>

      </div>

      <img src={rectangle} alt="" className={styles.panel_hd} />

      <img src={aboutUsIcon} alt="" className={styles.sec_panel_hd} />

    </div>
  )

  
}
  const Container = () =>{
    return(
      <div className={styles.content}>
        <span className={styles.title}>
          Мы поможем <br /> спланировать, <br /> спроектировать и <br /> разработать ваш продукт
        </span>

        <span className={styles.text}>
          Это не просто разработка - мы поможем вам трансформировать ваш бизнес 
        </span>

        <div className={styles.about}>
          <hr />
            О нас
        </div>

        <span className={styles.text2}>
          Большинству технических руководителей, которым поручено разработать 
          цифровой продукт для развития своего бизнеса, не хватает ресурсов и 
          возможностей, чтобы сделать это самостоятельно. Наша команда UX / UI 
          дизайнеров, инженеров и менеджеров по продуктам поможет вам спланировать, 
          спроектировать и создать ваше программное обеспечение вовремя и в рамках бюджета.
        </span>

        <div className={styles.righgtTerxt}>
          <span className={styles.text3}>
            Благодаря специально разработанному цифровому продукту, который имеет элегантный дизайн,
            технически надежен и обеспечивает удобство, которое нравится пользователям, вы поможете
            большему количеству людей жить лучше, подорвите свою отрасль за счет инноваций
            и внесете свой вклад в лучший мир.
          </span>
        </div>

      </div>
    )
  
 }

export default AboutUs
