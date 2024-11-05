/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../../public/logo.png'
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton'


export const Header = ({addCard}) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleUserPop() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.header__block}>
        <div className={`${styles.header__logo} ${styles._show} ${styles._light}`}>
          <a href="" target="_self">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={`${styles.header__logo} ${styles._dark}`}>         
           <a href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </a>
        </div>
        <nav className={styles.header__nav}>
          <CreateTaskButton onAddCard={addCard} />
          <a href="#user-set-target" className={`${styles.header__user} ${styles._hover02}`} onClick={toggleUserPop}>
            Ivan Ivanov
          </a>
          {isOpen && 
          <div className={`${styles.header__pop_user_set} ${styles.pop_user_set}`} id="user-set-target">

            {/* <a href="">x</a> */}
            <p className={styles.pop_user_set__name}>Ivan Ivanov</p>
            <p className={styles.pop_user_set__mail}>ivan.ivanov@gmail.com</p>
            <div className={styles.pop_user_set__theme}>
              <p>Темная тема</p>
              <input type="checkbox" className={styles.checkbox} name="checkbox" />
            </div>
            <button type="button" className={styles._hover03}>
              <a href="#popExit">Выйти</a>
            </button>
          </div>
          }
          
        </nav>
      </div>
    </div>
  </header>
  )
}