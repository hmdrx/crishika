import classes from './Button.module.css';
const Button = ({ children, onClick, style }) => {
  return (
    <button className={classes.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
