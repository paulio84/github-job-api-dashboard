const SearchBox = () => (
  <div className="p-1 rounded bg-white grid grid-cols-searchbox-button md:grid-cols-searchbox-button-lg shadow-lg max-w-3xl mx-auto">
    <i className="material-icons flex items-center justify-center text-gray-dark">work_outline</i>
    <input
      className="w-full py-4 pr-6 text-xs placeholder-gray-dark text-gray-dark font-roboto"
      type="text"
      placeholder="Title, Companies, Expertise"
    />
    <button className="bg-blue-secondary text-white rounded font-roboto font-medium cursor-pointer">
      Search
    </button>
  </div>
);

export default SearchBox;
