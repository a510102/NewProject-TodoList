import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const TodoListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  ${color}
  ${space}
  ${layout}
`;

const TodoItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
  ${color}
  ${space}
  ${layout}
`;

const TodoContent = styled.p`
  ${color}
  ${space}
  ${layout}
`;

const TodoButtonDiv = styled.div`
  ${color}
  ${space}
  ${layout}
`;

const getTodoButtonStyle = ({ bg = '#3CCED8', buttonColor = '#fff', isFirst }) => `
  margin-right: ${isFirst ? '4px' : 0};
  color: ${buttonColor};
  background: ${bg};
  :hover {
    background: ${buttonColor};
    color: ${bg};
  }
`;

const TodoButton = styled.button`
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  ${getTodoButtonStyle}
  ${space}
  ${layout}
`;

export {
	TodoListWrap,
	TodoItemWrap,
	TodoContent,
	TodoButtonDiv,
	TodoButton
}
