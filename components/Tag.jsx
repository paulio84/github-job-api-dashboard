import { string } from 'prop-types';

const Label = ({ text, additionalClassStyles }) => (
  <span
    className={`font-bold text-xs inline-block border text-blue-primary p-2 rounded self-start leading-none min-w-fit ${
      additionalClassStyles ?? ''
    }`}
  >
    {text}
  </span>
);
Label.propTypes = {
  text: string.isRequired,
  additionalClassStyles: string
};

export default Label;
