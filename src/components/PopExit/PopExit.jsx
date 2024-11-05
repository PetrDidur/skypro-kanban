import styles from './PopExit.module.css'

export default function PopExit () {
  return (
    <div className={styles["pop-exit"]} id="popExit">
    <div className={styles["pop-exit__container"]}>
      <div className={styles["pop-exit__block"]}>
        <div className={styles["pop-exit__ttl"]}>
          <h2>Выйти из аккаунта?</h2>
        </div>
        <form className={styles["pop-exit__form"]} id="formExit" action="#">
          <div className={styles["pop-exit__form-group"]}>
            <button className={`${styles["pop-exit__exit-yes"]} ${styles["_hover01"]}`} id="exitYes">
              <a href="modal/signin.html">Да, выйти</a>{" "}
            </button>
            <button className={`${styles["pop-exit__exit-no"]} ${styles["_hover03"]}`} id="exitNo">
              <a href="main.html">Нет, остаться</a>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}