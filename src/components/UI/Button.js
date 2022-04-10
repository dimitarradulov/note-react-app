import './Button.css';

const Button = (props) => {
  const classes = 'btn ' + props.classes;
  return <button className={classes}>{props.children}</button>;
};

export default Button;
