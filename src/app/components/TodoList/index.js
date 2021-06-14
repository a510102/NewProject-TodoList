import styled from 'styled-components';
import { color, space, layout } from 'styled-system';
import { useSelector, useDispatch } from 'react-redux';
import { todoSelector, deleteTodo, toggleTodo } from '../../Pages/Home/slice';

const TodoListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${color}
  ${space}
  ${layout}
`;

const TodoItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  text-decoration: ${props => props.isComplate ? 'line-through' : 'none'};
  ${color}
  ${space}
  ${layout}
`;

const TodoContent = styled.p`
  ${color}
  ${space}
  ${layout}
`;

const TodoButtons = styled.div`
  ${color}
  ${space}
  ${layout}
`;

const getTodoButtonStyle = ({bg='#3CCED8', color='#fff', isFirst}) => `
  margin-right: ${isFirst ? '4px': 0};
  color: ${color};
  background: ${bg};
  :hover {
    background: ${color};
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

const TodoList = () => {
  const todoList = useSelector(todoSelector);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }
  
  return (
    <TodoListWrap width={1} color='#4d4d4d' pt={2}>
      {
        !!(todoList?.length > 0) && (
          todoList.map(todoItem => (
            <TodoItemWrap width={[1, 1/2]} px={3} py={2} key={todoItem.id} isComplate={todoItem.isComplate}>
              <TodoContent>{todoItem.content}</TodoContent>
              <TodoButtons>
                <TodoButton isFirst onClick={() => handleToggleTodo(todoItem.id)}>
                  {todoItem.isComplate ? 'UnComplate' : 'Complate'}
                </TodoButton>
                <TodoButton bg='#F32E51' onClick={() => handleDeleteTodo(todoItem.id)}>Delete</TodoButton>
              </TodoButtons>
            </TodoItemWrap>
          ))
        )
      }
    </TodoListWrap>
  );
};

export default TodoList;