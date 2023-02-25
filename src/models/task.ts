import { v4 as uuidv4} from 'uuid';
import { Time } from '../utils/time';

export class Task{

  private id: string
  private selected: boolean
  private completed: boolean
  private time: number

  constructor(
    private subject: string,
    formatedTime: string,
  ){
    this.id = uuidv4();
    this.selected = false;
    this.time = Time.timeToSeconds(formatedTime);
    this.completed = this.time === 0? true:false;
  }

  public select(){
    this.selected = true;
  }
  public unselect(){
    this.selected = false
  }
  public complete(){
    this.completed = true
  }
  public decreaseTime(){
    this.time--
    if(this.time === 0){
      this.complete()
    }
  }


  /* GETTERS */
  getSeconds(){
    return this.time
  }
  getFormatedTime(){
    return Time.secondsToTime(this.time);
  }
  getSubject(){
    return this.subject
  }
  getId(){
    return this.id
  }
  getSelected(){
    return this.selected
  }
  getCompleted(){
    return this.completed
  }

  /* SETTERS */
  setSubject(subject: string){
    this.subject = subject
  }

}