export default function Button({text , onClick , classes}) { 
  const handleClick = () => {
    onClick();
  }

  const classname = "btn btn-outline-dark rounded-pill " + classes;

  return (
    <button className={classname} onClick={handleClick}>{text}</button>
  )
}
