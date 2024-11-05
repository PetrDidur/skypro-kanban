import { StyledButton } from "./CreateTaskButton.styled"
/* eslint-disable react/prop-types */

export default function CreateTaskButton ({onAddCard}) {
  
  return (
    <StyledButton 
    id="btnMainNew"
    onClick={onAddCard}
    >
            <a href="#popNewCard">Создать новую задачу</a>
          </StyledButton>
  )
}