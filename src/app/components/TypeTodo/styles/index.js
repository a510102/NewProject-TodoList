import styled from 'styled-components';
import {
  space, layout, color, flexbox,
} from 'styled-system';

const TypeTodoWrap = styled.form`
  display: flex;
  justify-content: center;
  ${space};
  ${layout};
  ${color};
  ${flexbox};
`;

const TypeInput = styled.input`
  outline: none;
  border: none;
  border-radius: 4px;
  ${space};
  ${layout};
  ${color};
  ${flexbox};
`;

const TypeButton = styled.button`
  border-radius: 4px;
  background: #3CCED8;
  color: #fff;
  border: none;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #3CCED8;
  }
  ${space};
  ${layout};
  ${color};
  ${flexbox};
`;

export {
	TypeButton,
	TypeInput,
	TypeTodoWrap
}
