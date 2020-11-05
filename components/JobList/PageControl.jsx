import { func, string, oneOfType, number, element } from 'prop-types';

const PageControl = ({ children, onClick, additionalClassStyles }) => (
  <li
    onClick={onClick}
    className={`cursor-pointer rounded border flex items-center justify-center p-3 hover:text-blue-secondary w-10 ${
      additionalClassStyles ? additionalClassStyles : ''
    }`}
  >
    {children}
  </li>
);
PageControl.propTypes = {
  additionalClassStyles: string,
  children: oneOfType([number, element]),
  onClick: func
};

export default PageControl;
