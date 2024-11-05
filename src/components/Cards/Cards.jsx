/* eslint-disable react/prop-types */
import CardsItem from './CardsItem'
import styles from './Cards.module.css'

export const Cards = ({tasks}) => {

  return (
    <div className={styles["cards"]}>
              {tasks.map (el => {
                return (<CardsItem key={el.id} title={el.title} theme={el.theme}/>)

              })}
            </div>
  )
}