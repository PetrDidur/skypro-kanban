/* eslint-disable react/prop-types */
import  CardBlock  from "../CardBlock/CardBlock"
import { statusList } from "../../../statusList"
import styles from "./Main.module.css"

export const Main = ({cards}) => {
  return (
    <main className={styles["main"]}>
    <div className={styles["container"]}>
      <div className={styles["main__block"]}>
        <div className={styles["main__content"]}>
          {statusList.map((status) => (
            <CardBlock 
            key={status}
            title={status}
            cards={cards}
            />
          ))}
        </div>
       </div> 
    </div>
  </main>
  )
}