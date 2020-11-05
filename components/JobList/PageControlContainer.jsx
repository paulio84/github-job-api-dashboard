import { number, func } from 'prop-types';
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
    let currentPageGroup = [];
    if (currentPage === 1) {
      for (let i = 0; i < Math.min(3, numPages); i++) {
        currentPageGroup = [
          ...currentPageGroup,
          createPageControl(currentPage + i, currentPage, handleUpdateCurrentPage)
        ];
      }
    } else if (currentPage === numPages) {
      for (let i = Math.min(3, numPages) - 1; i > 0; i--) {
        currentPageGroup = [
          ...currentPageGroup,
          createPageControl(currentPage - i, currentPage, handleUpdateCurrentPage)
        ];
      }
    } else {
      currentPageGroup = [
        createPageControl(currentPage - 1, currentPage, handleUpdateCurrentPage),
        createPageControl(currentPage, currentPage, handleUpdateCurrentPage),
        createPageControl(currentPage + 1, currentPage, handleUpdateCurrentPage)
      ];
    }

    pageControls.push(...currentPageGroup);

    // add ... when there is a break in pages
    // these ... PageControls will have no function but are needed when there is a break in page numbers
    // therefore they are part of the array and need a key prop
    // I chose to hard code the key prop rather than generating something random each time
    if (parseInt(currentPageGroup[0].key) - 1 > 1) {
      pageControls.unshift(
        <PageControl key={'abc'} isClickable={false}>
          <i className="material-icons">more_horiz</i>
        </PageControl>
      );
    }
    if (numPages - parseInt(currentPageGroup[currentPageGroup.length - 1].key) > 1) {
      pageControls.push(
        <PageControl key={'xyz'} isClickable={false}>
          <i className="material-icons">more_horiz</i>
        </PageControl>
      );
    }

    // check if page 1 and the last page numbers are part of the pageControls
    if (pageControls.findIndex((el) => el.key === '1') < 0) {
      pageControls.unshift(createPageControl(1, currentPage, handleUpdateCurrentPage));
    }
    if (pageControls.findIndex((el) => parseInt(el.key) === numPages) < 0) {
      pageControls.push(createPageControl(numPages, currentPage, handleUpdateCurrentPage));
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
PageControlContainer.propTypes = {
  numPages: number.isRequired,
  currentPage: number.isRequired,
  updateCurrentPage: func.isRequired
};

function createPageControl(value, currentPage, handleUpdateCurrentPage) {
  const classes = value === currentPage ? 'text-white bg-blue-secondary hover:text-white' : '';
  return (
    <PageControl
      key={value}
      onClick={() => handleUpdateCurrentPage(value)}
      additionalClassStyles={classes}
    >
      {value}
    </PageControl>
  );
}

export default PageControlContainer;
