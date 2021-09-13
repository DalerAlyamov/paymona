import React from 'react'
import styles from './About.module.sass'
import Daler from '../../images/Daler.jpg'
import Aki_parviz from '../../images/Aki_parviz.jpg'
import Amin from '../../images/Amin.jpg'
import amir from '../../images/amir.jpg'
import Azim from '../../images/Azim.jpg'
import ikbol from '../../images/ikdol.jpg'
import sara from '../../images/sara.jpg'
import kama from '../../images/kama.jpg'
import jacob from '../../images/jacob.jpg'
import parviz from '../../images/parviz.jpg'
import parviz_designer from '../../images/parviz_designer.jpg'
import tavhid from '../../images/tavhid.jpg'
import sol from '../../images/sol.jpg'
import manucgekhr from '../../images/manucgekhr.jpg'

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
            img={Aki_parviz} 
            position='Генеральный директор ' 
            name='Парвиз Усмонзода'
          />
          <Block
            img={manucgekhr} 
            position='Директор по информационным технологиям ' 
            name='Манучехр Гаффорзода'
          />
          <Block
            isType
            title='Management'
          />
          <Block
            img={sara}
            position='Офис менеджер'
            name='Каюмова Сарвиноз'
          />
            <Block
              isType
              title='Data Science'
            />
          <Block
            img={parviz}
            position='Инженер машинного обучения '
            name='Парвиз Исаев'
          />
          <Block
            img={tavhid}
            position='Младший инженер машинного обучения '
            name='Тавхид Ибодуллоев'
          />
          <Block
            isType
            title='Front-end'
            />
          <Block
            img={Daler}
            position='Старший разработчик'
            name='Далер Алямов'
          />
          <Block
            img={Amin}
            position='Младший разработчик '
            name='Амин Мирзоев'
          />
          <Block
            isType
            title='Back-end'
          /> 
          <Block
            img={kama}
            position='Старший разработчик'
            name='Комрон Иброхимов '
          />
          <Block
            img={ikbol}
            position='Младший разработчик '
            name='Икбол Исматзода'
          />
          <Block
            img={amir}
            position='Младший разработчик'
            name='Амир Арифджанов'
          />
          <Block
            isType
            title='DevOps'
          /> 
          <Block
            img={jacob}
            position='Старший инженер'
            name='Яъкуб Ахмедов'
          />
          <Block
            isType
            title='Design'
          />
          <Block
            img={sol}
            position='Петух'
            name='Солор Ибодуллоев'
          />
          <Block
            img={parviz_designer}
            position='Старший дизайнер'
            name='Парвиз Курбонов'
          />
          <Block
            img={Azim}
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
