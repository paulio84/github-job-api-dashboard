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

  const [fullTime, setFullTime] = useState(false);
  const updateFullTimeFlag = (newFullTime) => {
    setFullTime(newFullTime);
  };

  return (
    <JobsContext.Provider
      value={{
        description,
        onChangeDescription: changeDescription,
        location,
        onChangeLocation: changeLocation,
        fullTime,
        onUpdateFullTimeFlag: updateFullTimeFlag
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
