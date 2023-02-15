import { Button } from "../button/button";
import style from './form.module.scss';
import { Task } from "../../models/task";

interface FormProps {
  onSubmit: (task:Task) => void;
}

export function Form({onSubmit}: FormProps) {

  // inputs state
  const subjectInput = () : HTMLInputElement => document.querySelector("#study-subject-input") as HTMLInputElement;
  const timeInput = () : HTMLInputElement => document.querySelector("#study-time-input") as HTMLInputElement;

  /**
   * checks if the inputs are valid
   * @returns true or false if the inputs are valid
   */
  const checkInputs = () => {
    if (subjectInput().value.length > 0 && timeInput().value.length > 0) {
      return true;
    }
    return false;
  }

  /**
   * pass the inputs information to the onSubmit function
   * @returns the task object created on the inputs
   */
  const passUpTheInfo = () => {
    const subject = subjectInput().value;
    const time = timeInput().value;

    if(!subject && !time) {
      return alert("Please, fill the form correctly");
    }

    const newTask = new Task(subject, time);

    onSubmit(newTask);
  }


  /**
   * cleans the inputs
   */
  const cleanEvent = () => {
    const subject_input = subjectInput()
    subject_input.value = "";
    subject_input.focus();
    timeInput().value = "";
  }

  /**
   * event handler for the form submit
   */
  const handleSubmitEvent = () => {

    if(checkInputs()){
      passUpTheInfo();
      cleanEvent();
      return
      
    } else {
      alert("Please, fill the form correctly");
    }

  }

  return(
    <form className={style.container}>
      <div className={style.inputsContainer}>
        <div className={style.formSection} id="study-subject-input-content">
          <label className={style.question} htmlFor="study-subject-input">
            Adicionar um novo estudo
          </label>
          <input
            className={style.formInput}
            type="text"
            name="study-subject"
            id="study-subject-input"
            placeholder="O que deseja estudar?"
            required
          />
        </div>
        <div className={style.formSection} id="study-time-input-content">
          <label className={style.question} htmlFor="study-time-input">Tempo de estudo</label>
          <input
            className={style.formInput}
            type="time"
            step="1"
            min="00:00:00"
            max="02:00:00"
            name="study-time"
            id="study-time-input"
            required
          />
        </div>
      </div>

      <div className={style.button}> 
        <Button onClickEvent={() => handleSubmitEvent()} >
          Adicionar
        </ Button>
      </div>

    </form>
  )
}