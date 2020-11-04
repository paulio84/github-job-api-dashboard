import useCheckMobileDevice from '@/hooks/useCheckMobileDevice';
import PageControl from './PageControl';

const PageControlContainer = ({ numPages, currentPage, updateCurrentPage }) => {
  const handleUpdateCurrentPage = (newPage) => {
    if (newPage <= 0 || newPage > numPages) return;
    updateCurrentPage(newPage);
  };

  const pageControls = [];
  const isMobileDevice = useCheckMobileDevice(768);
  if (!isMobileDevice) {
    for (let i = 1; i <= numPages; i++) {
      const classes = i === currentPage ? 'text-white bg-blue-secondary hover:text-white' : '';
      pageControls.push(
        <PageControl
          key={i}
          onClick={() => handleUpdateCurrentPage(i)}
          additionalClassStyles={classes}
        >
          {i}
        </PageControl>
      );
    }
  }

  return (
    <>
      <div className="font-roboto text-gray-dark mt-6 lg:mt-8 text-sm select-none">
        <ul className="flex justify-end space-x-3">
          <PageControl onClick={() => handleUpdateCurrentPage(currentPage - 1)}>
            <i className="material-icons">chevron_left</i>
          </PageControl>
          {pageControls}
          <PageControl onClick={() => handleUpdateCurrentPage(currentPage + 1)}>
            <i className="material-icons">chevron_right</i>
          </PageControl>
        </ul>
      </div>
    </>
  );
};

export default PageControlContainer;
