import React from 'react'
import classNames from 'classnames'
import styles from './OurDignity.module.sass'
import { ReactComponent as ScnDiversity } from './scn_diversity.svg'
import { ReactComponent as ScnDiversity2 } from './scn_diversity2.svg'
import { ReactComponent as ScnDiversity3 } from './scn_diversity3.svg'
import { ReactComponent as ScnDiversity4 } from './scn_diversity4.svg'
import { ReactComponent as ScnDiversity5 } from './scn_diversity5.svg'
import { ReactComponent as ScnDiversity6 } from './scn_diversity6.svg'

const OurDignity = () => {
  return (
    <div className={styles.root}>

      <div className={styles.container}>

        <div className={styles.title}>
          Наши ценности
        </div>

        <div className={styles.blocks}>

          <Block
            className={styles.block_1}
            vector={<ScnDiversity />}
            title='Разнообразие'
            text='Мы стремимся нанимать исключительных ИТ-специалистов из всех слоев общества.'
          />

          <Block
            className={styles.block_2}
            vector={<ScnDiversity2 />}
            title='Работка в команде'
            text='Мы даем возможность талантливым людям в наших командах принимать решения.'
          />

          <Block
            className={styles.block_3}
            vector={<ScnDiversity3 />}
            title='Создание ценности '
            text='Мы ориентируемся на движущие силы бизнеса наших клиентов, чтобы приносить максимальную пользу и превосходить их ожидания.'
          />

          <Block
            className={styles.block_4}
            vector={<ScnDiversity4 />}
            title='Увлечение работой'
            text='Мы лидеры аутсорсинга потому что мы любим то, что делаем. Наша страсть и увлечение вселяют энтузиазм во все аспекты нашего бизнеса.'
          />

          <Block
            className={styles.block_5}
            vector={<ScnDiversity5 />}
            title='Эффективность'
            text='Мы постоянно оцениваем  системы и процессы, чтобы улучшить для наших клиентов.'
          />

          <Block
            className={styles.block_6}
            vector={<ScnDiversity6 />}
            title='Прозрачность'
            text='Четко понимая наши цели и мотивацию, мы укрепляем доверие с нашими клиентами и командами, что является основой отличной командной работы.'
          />

        </div>

      </div>

    </div>
  )
}

const Block = ({
  className,
  vector,
  title,
  text
}) => {
  return (
    <div className={classNames(className, styles.block)}>

      <div className={styles.vector}>
        {vector}
      </div>

      <span className={styles.block__title}>
        {title}
      </span>

      <span className={styles.block__text}>
        {text}
      </span>

    </div>
  )
}

export default OurDignity
