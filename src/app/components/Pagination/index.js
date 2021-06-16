import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { space, color, layout } from 'styled-system';
import {
  pageListSelector, currentPageSelector, setPageList, changePage, resetPage,
} from './slice';

const PaginationWrap = styled.div`
  margin-top: ${(props) => (props.isBottom ? 'auto' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${color}
  ${layout}
  ${space}
`;

const getPageButtonStyle = ({ active }) => `
  color: ${active ? '#3CCED8' : '#333'};
  cursor: ${active ? 'auto' : 'pointer'};
  border: 1px solid;
  border-color: ${active ? '#3CCED8' : '#333'}
  :hover {
    color: ${active ? 'auto' : '#fff'}
    backgroung: ${active ? 'auto' : '#3CCED8'}
  }
`;

const PageButton = styled.div`
  ${getPageButtonStyle}
  padding: 4px 8px;
  border-radius: 100px;
  margin-right: 8px;
  ${color}
  ${layout}
  ${space}
`;

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
