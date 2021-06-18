import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PageButton, PaginationWrap } from './styles';
import {
  pageListSelector, currentPageSelector, setPageList, changePage, resetPage,
} from './slice';

const Pagination = ({ total, isBottom }) => {
  const pageList = useSelector(pageListSelector);
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useDispatch();

  const handleChangePage = (page) => {
    dispatch(changePage(page));
  };

  useEffect(() => {
    if (total) {
      dispatch(setPageList(total));
    }
    return () => dispatch(resetPage());
  }, [dispatch, total]);

  const isShowPre = pageList.length > 1 && currentPage > 1;
  const isShowNext = currentPage < pageList.length;

  return (
    <PaginationWrap width={[1, 3 / 4]} p={[1, 2]} isBottom={isBottom}>
      {
        isShowPre && (
          <PageButton onClick={() => handleChangePage(currentPage - 1)}>pre</PageButton>
        )
      }
      {
        pageList.map((pageItem) => (
          <PageButton
            key={pageItem}
            onClick={
              pageItem !== currentPage ? (
                () => handleChangePage(pageItem)
              ) : (
                null
              )
            }
            active={pageItem === currentPage}
          >
            {pageItem}
          </PageButton>
        ))
      }
      {
        isShowNext && (
        <PageButton onClick={() => handleChangePage(currentPage + 1)}>next</PageButton>
        )
      }
    </PaginationWrap>
  );
};

export default Pagination;
