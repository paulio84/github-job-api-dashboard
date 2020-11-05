import { string } from 'prop-types';

const Tag = ({ text, additionalClassStyles }) => (
  <span
    className={`font-bold text-xs inline-block border text-blue-primary p-2 rounded self-start leading-none min-w-fit ${
      additionalClassStyles ?? ''
    }`}
  >
    {text}
  </span>
);
Tag.propTypes = {
  text: string.isRequired,
  additionalClassStyles: string
};

export default Tag;
