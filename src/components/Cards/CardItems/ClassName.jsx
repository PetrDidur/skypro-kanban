import styles from "./ClassName.module.css"
/* eslint-disable react/prop-types */
export default function toggleClasses(name) {
  if (name === 'Copywriting') {
    return styles['_purple']
  } else if (name === 'Research') {
    return styles['_green']
  } else {
    return styles['_orange']
  }
}


export const Tag = ({name}) => {
 

  console.log("Значение name:", name); 
  return <p className={toggleClasses(name)}>{name}</p>
}