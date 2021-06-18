import styled from 'styled-components';
import { space, color, layout } from 'styled-system';

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

export {
	PageButton,
	PaginationWrap
}
