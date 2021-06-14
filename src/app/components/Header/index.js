import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { layout, space, flexbox, color } from 'styled-system';

const HeaderWrap = styled.div(
  {
    boxShadow: '0 0 4px 0 rgba(0,0,0,.8)',
  },
  layout,
  color,
  flexbox,
  space,
);

const Header = ({}) => {

  return (
    <HeaderWrap width='1' p={['2', '3']} bg='#fff'>
      <Link>Home</Link>
      <Link>Other</Link>
    </HeaderWrap>
  )
}

export default Header;