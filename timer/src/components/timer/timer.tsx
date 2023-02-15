import style from './timer.module.scss';

interface TimerProps{
  timerCount: string[]
}

export function Timer({timerCount}: TimerProps){

  const minutes = timerCount[0].split("");
  const seconds = timerCount[1].split("");

  return (
    <div className={style.timer}>
      <div>
        {minutes.map((digit, index) => <span key={index}>{digit}</span>)}
      </div>
      <span>:</span>
      <div className='timeContent'>
        {seconds.map((digit, index) => <span key={index}>{digit}</span>)}
      </div>
    </div>
  )

}