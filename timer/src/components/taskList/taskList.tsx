import { useEffect } from 'react';
import { Task } from '../../models/task';
import { TaskComponent } from '../taskComponent/taskComponent';
import style from './taskList.module.scss'

export interface TaskListProps {
  tasks?: Task[];
  onSelectTask: (selectedTask: Task) => void;
}

export function TaskList(props: TaskListProps){

  // Task List State
  const tasks = props.tasks || []

  /**
   * render the task list to be showed in de DOM
   * @returns the task list in JSX format
   */
  const renderTasks = () => {

    if(tasks.length === 0){
      return <p className={style.warning}>Nenhuma tarefa agendada, que tal adicionar uma?</p>
    }

    return tasks.map((task) => <TaskComponent onSelect={props.onSelectTask} key={task.getId()} task={task} />)
  }

  return (
    <aside className={style.container}>
      <h2 className={style.title} >Estudos do dia</h2>
      <ul className={style.list}>
        {renderTasks()}
      </ul>
    </aside>
  )
}
