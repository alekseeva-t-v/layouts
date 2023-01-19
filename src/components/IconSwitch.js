const IconSwitch = (props) => {
  const { icon } = props;
  return (
    <i className="material-icons" onClick={() => props.onSwitch(icon)}>
      {icon}
    </i>
  );
};

export default IconSwitch;
