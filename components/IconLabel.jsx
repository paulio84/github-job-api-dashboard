import { string } from 'prop-types';

const IconLabel = ({ iconName, text, additionalClassStyles }) => (
  <span className={`flex items-center ${additionalClassStyles ?? ''}`}>
    <i className="mr-2 material-icons">{iconName}</i>
    <span>{text}</span>
  </span>
);
IconLabel.propTypes = {
  iconName: string.isRequired,
  text: string.isRequired,
  additionalClassStyles: string
};

export default IconLabel;
