import React, { useEffect } from "react";

// Components Import
import { Form } from "../components/form/form";
import { TaskList } from "../components/taskList/taskList";
import { TimerContainer } from "../components/timerContainer/timerContainer";
import { Task } from "../models/task";
import style from './app.module.scss';

// Returns the app Component
export function App() {

  // Task List State
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = React.useState<Task | undefined>()
  const [seconds, setSeconds] = React.useState<number>(0);

  // Timer
  const [isRunningLoop, setIsRunningLoop] = React.useState<boolean>(false);
  const [loop, setLoop] = React.useState<NodeJS.Timer>();
  
  // ------------------------------------------------------------
  // ADICIONAR TASK

  /**
   * add a new task to the task list
   * @param newTask the new task to be added to the list
   */
  const onAddTaskSubmit = (newTask:Task) => {
    setTasks([...tasks, newTask]);
  }

  // ---------------------------------------------------------------
  // SELECIONAR DE TASK

  /**
   * update the task list changing the selected state of the task and unselecting the others
   * @param newSelectedTask the task to be selected
   */
  const onSelectTask = (newSelectedTask:Task) => {

    // mapeia o array, selecionando a tarefa clicada e desselecionando as demais
    setTasks(tasks.map(task => {

      setIsRunningLoop(false)

      const prevSelectTaskId = selectedTask?.getId()
      const newSelectTaskId = newSelectedTask.getId();
      const taskId = task.getId();
      const taskState = task.getSelected();

      // desmarca a task caso o id seja diferente da nova task selecionada
      if(taskState === true && taskId !== newSelectTaskId){
        task.unselect()
      }

      // caso o clique seja em cima de uma task já selecionada, desseleciona ela 
      if(prevSelectTaskId === newSelectTaskId){
        task.unselect()
        setSelectedTask(undefined)
      }
      // seleciona a task caso não esteja selecionada ainda
      else if(taskId === newSelectTaskId){

        task.select()
        setSelectedTask(task)

      }

      return task;
    }))

  }

  // ---------------------------------------------------------------
  // REDUÇÃO DO TEMPO DO CRONOMETRO

  /**
   * muda o status do looping de running para false e vice-versa
   */
  const onStartTask = () => {
    setIsRunningLoop(!isRunningLoop);
  }

  // caso seja alterado isRunningLoop, o cronometro é iniciado ou parado
  useEffect(
    () => {
      // caso o cronometro esteja parado, ele é iniciado
      if(isRunningLoop && selectedTask){
        setLoop(setInterval(() => {

          // reduz o tempo da task e altera a quantidade de segundos
          if(selectedTask){
            selectedTask.decreaseTime();
            setSeconds(selectedTask.getSeconds());
          }

          // se o tempo for = a 0, completa a task e para o cronometro
          if(selectedTask.getSeconds() === 0){
            setIsRunningLoop(false);
            setSelectedTask(undefined);
          }

        }, 1000));
      }
      // caso o cronometro esteja rodando, ele é parado
      else if(!isRunningLoop && loop){
        clearInterval(loop);
        setLoop(undefined);
      }
    }, 
    [isRunningLoop]
  );
  
  // quando a task selecionada é alterada, os segundos são alterados perante a nova task
  useEffect(
  ()=>{
    if(selectedTask){
      setSeconds(selectedTask?.getSeconds() )
      console.log(seconds)
    }
  }, 
  [selectedTask]
  );

  return (
    <main className={style.appContainer}>

      <Form onSubmit={onAddTaskSubmit}/>
      <TimerContainer timing={seconds} onStartTask={onStartTask} />
      <TaskList tasks={tasks} onSelectTask={onSelectTask} />

    </main>
  );
}