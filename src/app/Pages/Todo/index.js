import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { todoListLengthSelector } from './slice/selector';
import TypeTodo from '../../components/TypeTodo';
import TodoList from '../../components/TodoList';
import Pagination from '../../components/Pagination';

const Home = () => {
  const todoListTotal = useSelector(todoListLengthSelector);
  return (
  <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <TypeTodo />
    <TodoList />
    <Pagination total={todoListTotal} isBottom />
  </>
)};

export default Home;
