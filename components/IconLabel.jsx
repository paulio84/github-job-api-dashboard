const IconLabel = ({ iconName, text }) => (
  <span className="flex items-center">
    <i className="mr-2 material-icons">{iconName}</i>
    <span>{text}</span>
  </span>
);

export default IconLabel;
