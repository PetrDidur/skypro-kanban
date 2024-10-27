/* eslint-disable react/prop-types */
import CardsItem from './CardsItem'

export const Cards = ({tasks}) => {

  return (
    <div className="cards">
              {tasks.map (el => {
                return (<CardsItem key={el.id} title={el.title} theme={el.theme}/>)

              })}
            </div>
  )
}