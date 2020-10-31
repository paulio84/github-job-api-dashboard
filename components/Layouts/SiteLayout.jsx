import { useState } from 'react';
import Header from '@/components/Header';
import JobsContext from '@/lib/context';

const SiteLayout = ({ children }) => {
  const [description, setDescription] = useState('');
  const changeDescription = (newDescription) => {
    setDescription(newDescription);
  };

  const [location, setLocation] = useState('');
  const changeLocation = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <JobsContext.Provider
      value={{
        description,
        onChangeDescription: changeDescription,
        location,
        onChangeLocation: changeLocation
      }}
    >
      <div className="container px-3 md:mx-auto">
        <Header />
        {children}
      </div>
    </JobsContext.Provider>
  );
};

export default SiteLayout;
