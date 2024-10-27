/* eslint-disable react/prop-types */
import  CardBlock  from "../CardBlock/CardBlock"
import { statusList } from "./statusList"

export const Main = ({cards}) => {
  return (
    <main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">
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