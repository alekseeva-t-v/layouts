/**
 * Компонент отвечающий за вывод иконки выбора отображения. Родительский компонент Store
 *
 * @param {string} props.icon Название иконки, которую необходимо отобразить изначально.
 * @param {function} props.onSwitch Функция передает данные о выбранной иконке в компонент Store.
 */
const IconSwitch = (props) => {
  const { icon, onSwitch } = props;
  return (
    <i className="material-icons" onClick={() => onSwitch(icon)}>
      {icon}
    </i>
  );
};

export default IconSwitch;
