import PageControl from './PageControl';

const PageControlContainer = ({ numPages, currentPage, updateCurrentPage }) => {
  const handleUpdateCurrentPage = (newPage) => {
    if (newPage <= 0 || newPage > numPages) return;
    updateCurrentPage(newPage);
  };

  return (
    <>
      <div className="font-roboto text-gray-dark mt-6 lg:mt-8 text-sm select-none">
        <ul className="flex justify-end space-x-3">
          <PageControl onClick={() => handleUpdateCurrentPage(currentPage - 1)}>
            <i className="material-icons">chevron_left</i>
          </PageControl>
          {/* ... More page Controls here */}
          <PageControl onClick={() => handleUpdateCurrentPage(currentPage + 1)}>
            <i className="material-icons">chevron_right</i>
          </PageControl>
        </ul>
      </div>
    </>
  );
};

export default PageControlContainer;
