import { useRef } from 'react';
import JobsContext from '@/lib/context';

const SearchBox = () => {
  const searchRef = useRef();

  return (
    <JobsContext.Consumer>
      {({ description, onChangeDescription }) => {
        const handleClick = (e) => {
          onChangeDescription(searchRef.current.value);
        };

        const handleKeyUp = (e) => {
          if (e.keyCode === 13) {
            onChangeDescription(searchRef.current.value);
          }
        };

        return (
          <div className="p-1 rounded bg-white grid grid-cols-searchbox-button md:grid-cols-searchbox-button-lg shadow-lg max-w-3xl mx-auto">
            <i className="material-icons flex items-center justify-center text-gray-dark">
              work_outline
            </i>
            <input
              className="w-full py-4 pr-6 text-xs placeholder-gray-dark text-gray-dark font-roboto focus:outline-none"
              type="text"
              placeholder="Title, Companies, Expertise"
              defaultValue={description}
              ref={searchRef}
              onKeyUp={handleKeyUp}
            />
            <button
              onClick={handleClick}
              className="bg-blue-secondary text-white rounded font-roboto font-medium cursor-pointer"
            >
              Search
            </button>
          </div>
        );
      }}
    </JobsContext.Consumer>
  );
};

export default SearchBox;
