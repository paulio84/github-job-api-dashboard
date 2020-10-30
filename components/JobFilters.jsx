const JobFilters = () => (
  <div className="font-poppins text-blue-primary text-sm mt-6 lg:mt-8">
    <label className="font-medium w-fit cursor-pointer" htmlFor="full_time">
      <input id="full_time" className="mr-3 ml-1 transform scale-150" type="checkbox" />
      Full time
    </label>
    <div className="mt-8">
      <p className="text-gray-dark uppercase font-bold mb-4">Location</p>
      <div className="p-1 rounded bg-white grid grid-cols-searchbox-button md:grid-cols-searchbox-button-lg shadow max-w-3xl mx-auto mb-8">
        <i className="material-icons flex items-center justify-center text-gray-dark">public</i>
        <input
          className="w-full py-4 pr-6 text-xs placeholder-gray-dark text-gray-dark font-roboto"
          type="text"
          placeholder="City, state, zip code or country"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <label className="font-medium w-fit cursor-pointer" htmlFor="london">
          <input id="london" className="mr-3 ml-1 transform scale-150" type="checkbox" />
          London
        </label>
        <label className="font-medium w-fit cursor-pointer" htmlFor="amsterdam">
          <input id="amsterdam" className="mr-3 ml-1 transform scale-150" type="checkbox" />
          Amsterdam
        </label>
        <label className="font-medium w-fit cursor-pointer" htmlFor="newyork">
          <input id="newyork" className="mr-3 ml-1 transform scale-150" type="checkbox" />
          New York
        </label>
        <label className="font-medium w-fit cursor-pointer" htmlFor="berlin">
          <input id="berlin" className="mr-3 ml-1 transform scale-150" type="checkbox" />
          Berlin
        </label>
      </div>
    </div>
  </div>
);

export default JobFilters;
