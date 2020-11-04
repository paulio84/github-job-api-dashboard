const PageControl = ({ children, onClick, additionalClassStyles }) => (
  <li
    onClick={onClick}
    className={`cursor-pointer rounded border flex items-center justify-center p-3 hover:text-blue-secondary w-10 ${additionalClassStyles}`}
  >
    {children}
  </li>
);

export default PageControl;
