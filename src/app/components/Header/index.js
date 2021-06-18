import { useLocation } from 'react-router-dom';

import { HeaderButton, HeaderWrap } from './styles';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrap width="1" p={['2', '3']} bg="#fff">
      <HeaderButton $isActive={location.pathname === '/'} $isFirst to='/'>Home</HeaderButton>
      <HeaderButton $isActive={location.pathname === '/todo'} to='/todo'>todo</HeaderButton>
    </HeaderWrap>
)};

export default Header;
