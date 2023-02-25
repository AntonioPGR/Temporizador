import style from './button.module.scss';

interface ButtonProps {
  children: string,
  onClickEvent: () => void;
}

export function Button({children, onClickEvent}: ButtonProps) : JSX.Element {

  /**
   * calls the onClickEvent function
   * @param ev the event created on click on the button
   */
  const handleClick = (ev:any) => {
    ev.preventDefault();
    onClickEvent();
  }

  return (
    <button onClick={(e) => handleClick(e)} className={style.button}>
      <span> {children} </span>
    </button> 
  )

}