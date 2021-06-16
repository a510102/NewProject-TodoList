import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  layout, space, flexbox, color,
} from 'styled-system';

const HeaderWrap = styled.div(
  {
    boxShadow: '0 0 4px 0 rgba(0,0,0,.8)',
  },
  layout,
  color,
  flexbox,
  space,
);

const HeaderButton = styled(Link)`
  color: #fff;
  border: none;
  background: #95CAD8;
  border-radius: 12px;
  width: fit-content;
  display: inline-block;
  padding: 8px;
  text-decoration: none;
  margin-left: ${props => props.$isFirst ? '0' : '8px'};
  :hover {
    background: #89DBFB;
  }
`;

const Header = () => (
  <HeaderWrap width="1" p={['2', '3']} bg="#fff">
    <HeaderButton $isFirst to='/'>Home</HeaderButton>
    <HeaderButton to='/'>Other</HeaderButton>
  </HeaderWrap>
);

export default Header;
