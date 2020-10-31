import JobFilters from '@/components/JobFilters';
import SearchBox from '@/components/SearchBox';

const HomePageLayout = ({ children }) => (
  <main>
    <div className="rounded-lg bg-blue-primary py-10 px-4 bg-searchbox bg-center md:bg-cover">
      <SearchBox />
    </div>
    <div className="grid grid-cols-home lg:grid-cols-home-lg lg:gap-x-8">
      <JobFilters />
      {children}
    </div>
  </main>
);

export default HomePageLayout;
