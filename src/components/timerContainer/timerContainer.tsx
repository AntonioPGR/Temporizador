import { Button } from "../button/button";
import style from "./timerContainer.module.scss";
import { Timer } from "../timer/timer";
import { Time } from "../../utils/time";

interface TimerProps{
  timing: number,
  onStartTask: () => void,
}

export function TimerContainer({timing, onStartTask}: TimerProps){

  const formatedTime = Time.secondsToTime(timing);
  console.log(formatedTime);

  return(
    <div className={style.container}>
      
      <p>escolha um card e inicie o cronômetro</p>
      
      <Timer timerCount={formatedTime.split(":")} />

      <Button onClickEvent={onStartTask}>
        começar
      </Button>

    </div>
  )

}