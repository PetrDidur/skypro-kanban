import styles from "./PopNewCard.module.css"

export default function PopNewCard () {
  return (
    <div className={styles["pop-new-card"]} id="popNewCard">
    <div className={styles["pop-new-card__container"]}>
      <div className={styles["pop-new-card__block"]}>
        <div className={styles["pop-new-card__content"]}>
          <h3 className={styles["pop-new-card__ttl"]}>Создание задачи</h3>
          <a href="#" className={styles["pop-new-card__close"]}>
            ✖
          </a>
          <div className={styles["pop-new-card__wrap"]}>
            <form
              className={`${styles["pop-new-card__form"]} ${styles["form-new"]}`}
              id="formNewCard"
              action="#"
            >
              <div className={styles["form-new__block"]}>
                <label htmlFor="formTitle" className={styles["subttl"]}>
                  Название задачи
                </label>
                <input
                  className={styles["form-new__input"]}
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                />
              </div>
              <div className={styles["form-new__block"]}>
                <label htmlFor="textArea" className={styles["subttl"]}>
                  Описание задачи
                </label>
                <textarea
                  className={styles["form-new__area"]}
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  defaultValue={""}
                />
              </div>
            </form>
            <div className={`${styles["pop-new-card__calendar"]} ${styles["calendar"]}`}>
              <p className={`${styles["calendar__ttl"]} ${styles["subttl"]}`}>Даты</p>
              <div className={styles["calendar__block"]}>
                <div className={styles["calendar__nav"]}>
                  <div className={styles["calendar__month"]}>Сентябрь 2023</div>
                  <div className={styles["nav__actions"]}>
                    <div className={styles["nav__action"]} data-action="prev">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                      >
                        <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                      </svg>
                    </div>
                    <div className={styles["nav__action"]} data-action="next">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                      >
                        <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles["calendar__content"]}>
                  <div className={styles["calendar__days-names"]}>
                    <div className={styles["calendar__day-name"]}>пн</div>
                    <div className={styles["calendar__day-name"]}>вт</div>
                    <div className={styles["calendar__day-name"]}>ср</div>
                    <div className={styles["calendar__day-name"]}>чт</div>
                    <div className={styles["calendar__day-name"]}>пт</div>
                    <div className={`${styles["calendar__day-name"]} ${styles["-weekend-"]}`}>сб</div>
                    <div className={`${styles["calendar__day-name"]} ${styles["-weekend-"]}`}>вс</div>
                  </div>
                  <div className={styles["calendar__cells"]}>
                    <div className={`${styles["calendar__cell"]} ${styles["_other-month"]}`}>28</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_other-month"]}`}>29</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_other-month"]}`}>30</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>31</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>1</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>2</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>3</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>4</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>5</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>6</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>7</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_current"]}`}>8</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>9</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>10</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>11</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>12</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>13</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>14</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>15</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>16</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>17</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>18</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>19</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>20</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>21</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>22</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>23</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>24</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>25</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>26</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>27</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>28</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]}`}>29</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_cell-day"]} ${styles["_weekend"]}`}>30</div>
                    <div className={`${styles["calendar__cell"]} ${styles["_other-month"]} ${styles["_weekend"]}`}>
                      1
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  id="datepick_value"
                  defaultValue="08.09.2023"
                />
                <div className={styles["calendar__period"]}>
                  <p className={`${styles["calendar__p"]} ${styles["date-end"]}`}>
                    Выберите срок исполнения <span className={styles["date-control"]} />.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["pop-new-card__categories"]} ${styles["categories"]}`}>
            <p className={`${styles["categories__p"]} ${styles["subttl"]}`}>Категория</p>
            <div className={styles["categories__themes"]}>
              <div className={`${styles["categories__theme"]} ${styles["_active-category"]} ${styles["_orange"]}`}>
                <p className={styles["_orange"]}>Web Design</p>
              </div>
              <div className={`${styles["categories__theme"]} ${styles["_green"]}`}>
                <p className={styles["_green"]}>Research</p>
              </div>
              <div className={`${styles["categories__theme"]} ${styles["_purple"]}`}>
                <p className={styles["_purple"]}>Copywriting</p>
              </div>
            </div>
          </div>
          <button className={`${styles["form-new__create"]} ${styles["_hover01"]}`} id="btnCreate">
            Создать задачу
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}