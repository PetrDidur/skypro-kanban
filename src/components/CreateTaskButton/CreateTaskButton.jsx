/* eslint-disable react/prop-types */
export default function CreateTaskButton ({onAddCard}) {
  
  return (
    <button className="header__btn-main-new _hover01" 
    id="btnMainNew"
    onClick={onAddCard}
    >
            <a href="#popNewCard">Создать новую задачу</a>
          </button>
  )
}