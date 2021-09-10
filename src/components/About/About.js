import React from 'react'
import styles from './About.module.sass'
import Diractor from './Director.jpg'
import Diractor2 from './re.jpg'
import girl from './girl.jpg'
import girl3 from './girl3.jpg'
import girl2 from './girl2.jpg'
import man from './man.jpg'
import man2 from './man2.jpg'
import girl4 from './girl4.jpg'

const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        TEAM
      </div>

      <div className={styles.container}>
        <div className={styles.gridBlocks}>
          <Block 
            isType
            title='Co-founders'  
          />
          <Block
            img={Diractor} 
            position='Генеральный директор ' 
            name='Парвиз Усмонзода'
          />
          <Block
            img={Diractor2} 
            position='Директор по информационным технологиям ' 
            name='Манучехр Гаффорзода'
          />
          <Block
            isType
            title='Management'
          />
          <Block
            img={girl}
            position='Офис менеджер'
            name='Каюмова Сарвиноз'
          />
            <Block
              isType
              title='Data Science'
            />
          <Block
            img={girl2}
            position='Инженер машинного обучения '
            name='Парвиз Исаев'
          />
          <Block
            img={man}
            position='Младший инженер машинного обучения '
            name='Тавхид Ибодуллоев'
          />
          <Block
            isType
            title='Frontend'
            />
          <Block
            img={girl3}
            position='Старший разработчик'
            name='Далер Алямов'
          />
          <Block
            img={man2}
            position='Младший разработчик '
            name='Амин Мирзоев'
          />
          <Block
            isType
            title='Backend'
          /> 
          <Block
            img={girl4}
            position='Старший разработчик'
            name='Комрон Иброхимов '
          />
          <Block
            img={girl2}
            position='Младший разработчик '
            name='Икбол Исматзода'
          />
          <Block
            img={girl2}
            position='Младший разработчик'
            name='Амир Арифджанов'
          />
          <Block
            isType
            title='DevOps'
          /> 
          <Block
            img={girl2}
            position='Старший инженер'
            name='Яъкуб Ахмедов'
          />
          <Block
            isType
            title='Design'
          />
          <Block
            img={girl2}
            position='Петух'
            name='Солор Ибодуллоев'
          />
          <Block
            img={girl2}
            position='Старший дизайнер'
            name='Парвиз Курбонов'
          />
          <Block
            img={girl2}
            position='Младший дизайнер'
            name='Азим Арифджанов'
          /> 
    
        </div>
      </div>

    </div>
  )
}

const Block = ({
  isType=false,
  img,
  title,
  position,
  name
}) => {
  return (
    <div className={styles.block}>
      <div className={styles.item}>
        {isType === true &&
          <>
            <span className={styles.bookTitle}>
              {title}
            </span>
          </>
        }
         {isType === false &&
          <>
           <div className={styles.wrap}>
              <img src={img} className={styles.img} alt="" />
              <div className={styles.hoverBlock}>
                <span className={styles.name}>
                  {name}
                </span>
                <span className={styles.position}>
                  {position}
                </span>
              </div>
           </div>
          </>
        }
      </div>  
    </div>  
  )
}

export default About
