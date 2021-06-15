import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  ${color}
  ${space}
  ${layout}
`;

export default WrapContainer;