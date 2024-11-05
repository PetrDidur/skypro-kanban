/* eslint-disable react/prop-types */
import {Cards} from "../Cards/Cards.jsx"
import styles from "./CardBlock.module.css"

export default function CardBlock ({title, cards}) {
  const filteredTasks = cards.filter((task) => task.status === title)

  return (
    <div className={`${styles["main__column"]}`}>
            <div className={styles["column__title"]}>
              <p>{title}</p>
            </div>
            <Cards tasks={filteredTasks} />
          </div>
  )
}