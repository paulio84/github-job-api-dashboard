import Header from '@/components/Header';

const SiteLayout = ({ children }) => (
  <div className="container px-3 md:mx-auto">
    <Header />
    {children}
  </div>
);

export default SiteLayout;
