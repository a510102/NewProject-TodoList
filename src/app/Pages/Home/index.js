import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { todoSelector } from './slice';
import WrapContainer from '../../styles/WrapContainer';
import Header from '../../components/Header';
import TypeTodo from '../../components/TypeTodo';
import TodoList from '../../components/TodoList';
import Pagination from '../../components/Pagination';

const Home = () => {
  const todoListTotal = useSelector(todoSelector).length;
  
  return (
  <WrapContainer bg="#e0e0e0">
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <Header />
    <TypeTodo />
    <TodoList />
    <Pagination total={todoListTotal} isBottom />
  </WrapContainer>
)};

export default Home;
