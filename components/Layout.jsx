import Header from './Header';

const Layout = ({ children }) => (
  <div className="container px-3 md:mx-auto">
    <Header />
    {children}
  </div>
);

export default Layout;
