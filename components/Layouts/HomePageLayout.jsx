import { useState } from 'react';
import JobFilters from '@/components/JobFilters';
import SearchBox from '@/components/SearchBox';
import JobsContext from '@/lib/context';

const HomePageLayout = ({ children }) => {
  const [description, setDescription] = useState('');
  const changeDescription = (newDescription) => {
    setDescription(newDescription);
  };

  return (
    <main>
      <JobsContext.Provider value={{ description, onChangeDescription: changeDescription }}>
        <div className="rounded-lg bg-blue-primary py-10 px-4 bg-searchbox bg-center md:bg-cover">
          <SearchBox />
        </div>
        <div className="grid grid-cols-home lg:grid-cols-home-lg lg:gap-x-8">
          <JobFilters />
          {children}
        </div>
      </JobsContext.Provider>
    </main>
  );
};

export default HomePageLayout;
