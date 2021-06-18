import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TypeButton, TypeInput, TypeTodoWrap } from './styles';
import { homePageManager } from '../../Pages/Todo/slice';

const TypeTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = homePageManager().actions;
  const dispatch = useDispatch();
  const getNewTodo = ({ target }) => {
    const { value } = target;
    if (value) {
      setNewTodo(value);
    } else {
      setNewTodo('');
    }
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <TypeTodoWrap width={1} p={2} onSubmit={addNewTodo}>
      <TypeInput
        p={2}
        width={[1, 1 / 2]}
        color="#4d4d4d"
        placeholder="add New todo ..."
        value={newTodo}
        onChange={getNewTodo}
      />
      <TypeButton p={2} ml={1}>ADD</TypeButton>
    </TypeTodoWrap>
  );
};

export default TypeTodo;
