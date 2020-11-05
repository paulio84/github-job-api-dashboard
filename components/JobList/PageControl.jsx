import { bool, func, string, oneOfType, number, element } from 'prop-types';

const PageControl = ({ children, onClick, additionalClassStyles, isClickable }) => {
  const clickableClasses = 'cursor-pointer border hover:text-blue-secondary';
  return (
    <li
      onClick={onClick}
      className={`rounded flex items-center justify-center p-3 w-10 ${
        additionalClassStyles ? additionalClassStyles : ''
      } ${isClickable && clickableClasses}`}
    >
      {children}
    </li>
  );
};
PageControl.propTypes = {
  additionalClassStyles: string,
  children: oneOfType([number, element]),
  onClick: func,
  isClickable: bool
};
PageControl.defaultProps = {
  isClickable: true
};

export default PageControl;
