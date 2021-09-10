import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './Header.module.sass'
import { Logo } from '../../icons'
import { Link, useHistory } from 'react-router-dom'

const Header = ({
  className
}) => {
  
  const [activeLink, setActiveLink] = useState()

  const history = useHistory()

  useEffect(() => {
    setActiveLink(history.location.pathname)
    history.listen(location => setActiveLink(location.pathname))
  }, [history])

  return (
    <div className={classNames(className, styles.root)}>

      <div className={styles.container}>
      
        <Link className={styles.logo} to='/'>
          <Logo size={168} />
        </Link>

        <Nav activeLink={activeLink} />

      </div>

    </div>
  )
}

const Nav = ({
  activeLink
}) => {
  return (
    <div className={styles.nav}>
      <Link className={classNames(styles.link, activeLink === '/' && styles['link--active'])} to='/'>
        Главная
      </Link>
      <Link className={classNames(styles.link, activeLink === '/services' && styles['link--active'])} to='/services'>
        Услуги
      </Link>
      <Link className={classNames(styles.link, activeLink === '/about-us' && styles['link--active'])} to='/about-us'>
        О нас
      </Link>
      <Link className={classNames(styles.link, activeLink === '/contacts' && styles['link--active'])} to='/contacts'>
        Контакты
      </Link>
    </div>
  )
}

export default Header
