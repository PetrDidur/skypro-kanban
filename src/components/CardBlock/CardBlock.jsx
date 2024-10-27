/* eslint-disable react/prop-types */
import {Cards} from "../Cards/Cards.jsx"

export default function CardBlock ({title, cards}) {
  const filteredTasks = cards.filter((task) => task.status === title)

  return (
    <div className="main__column ">
            <div className="column__title">
              <p>{title}</p>
            </div>
            <Cards tasks={filteredTasks} />
          </div>
  )
}