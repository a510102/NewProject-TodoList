import { useSelector, useDispatch } from 'react-redux';

import { TodoButton, TodoButtonDiv, TodoContent, TodoItemWrap, TodoListWrap } from './styles';
import { homePageManager } from '../../Pages/Todo/slice';
import { todoListSelector } from '../../Pages/Todo/slice/selector';
import { pageIndexSelector } from '../Pagination/slice';


const TodoList = () => {
  const todoList = useSelector(todoListSelector);
  const { deleteTodo, toggleTodo } = homePageManager().actions;
  const { start, end } = useSelector(pageIndexSelector);

  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const filterTodoList = todoList.filter((todoItem, index) => index >= start && index <= end);

  return (
    <TodoListWrap width={1} color="#4d4d4d" pt={2}>
      {
        filterTodoList.length > 0 && (
          filterTodoList.map((todoItem) => (
            <TodoItemWrap
              width={[1, 1 / 2]}
              px={3}
              py={2}
              key={todoItem.id}
              isComplete={todoItem.isComplete}
            >
              <TodoContent>{todoItem.content}</TodoContent>
              <TodoButtonDiv>
                <TodoButton isFirst onClick={() => handleToggleTodo(todoItem.id)}>
                  {todoItem.isComplete ? 'UnComplate' : 'Complate'}
                </TodoButton>
                <TodoButton bg="#F32E51" onClick={() => handleDeleteTodo(todoItem.id)}>Delete</TodoButton>
              </TodoButtonDiv>
            </TodoItemWrap>
          ))
        )
      }
    </TodoListWrap>
  );
};

export default TodoList;
