import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  space, layout, color, flexbox,
} from 'styled-system';

import { addTodo } from '../../Pages/Home/slice';

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

const TypeTodo = () => {
  const [newTodo, setNewTodo] = useState('');
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
