import { Task } from '../../models/task';
import style from './task.module.scss';

interface TaskProps {
  task: Task,
  onSelect: (selectedTask:Task) => void;
}

export function TaskComponent({task, onSelect}: TaskProps) {

  const isSelected = task.getSelected();
  let styleClass = isSelected ? style.selected : style.unselected;
  styleClass = task.getCompleted() ? style.completed : styleClass;

  /**
   * Calls the onSelect event when the task is clicked
   */
  const handleClick = () => {
    if(!task.getCompleted()){
      onSelect(task);
    }
  }

  return (
    <li onClick={handleClick} className={`${style.container} ${styleClass}`}>
      <h3 className={style.title}> {task.getSubject()} </h3>
      <span className={style.time}> {task.getFormatedTime()} </span>
    </li>
  )

}