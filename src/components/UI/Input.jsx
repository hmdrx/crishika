import classes from './Input.module.css';
const Input = props => {
  return <input className={classes.input} style={{marginBottom: props.mb, width: props.width}} {...props} />;
};

export default Input;
