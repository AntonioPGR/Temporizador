export class Time{

  static timeToSeconds(time: string){
    let [strHours = "0", strMinutes = "0", strSeconds = "0"] = time.split(':');
    let hours = Number(strHours);
    let minutes = Number(strMinutes);
    let seconds = Number(strSeconds);

    return hours * 3600 + minutes * 60 + seconds;
  }

  static secondsToTime(seconds: number){

    const minutes = Math.floor(seconds / 60); 
    let formatedMinutes = String(minutes).length == 1? `0${minutes}` : minutes;

    const secondsLeft = seconds - ( minutes * 60 );
    let formatedSeconds = String(secondsLeft).length == 1? `0${secondsLeft}` : secondsLeft;

    return `${formatedMinutes}:${formatedSeconds}`;
  }

}