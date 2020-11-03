const PageControl = ({ children, onClick }) => (
  <li
    onClick={onClick}
    className="cursor-pointer rounded border flex items-center justify-center p-3 hover:text-blue-secondary"
  >
    {children}
  </li>
);

export default PageControl;
