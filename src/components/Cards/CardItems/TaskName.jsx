import styles from "./TaskName.module.css"
// eslint-disable-next-line react/prop-types
export default function TaskName({name}) {

  return <h3 className={styles["card__title"]}> {name}</h3>
}