import WrapContainer from '../../styles/WrapContainer';
import Header from '../../components/Header';
import TypeTodo from '../../components/TypeTodo';
import TodoList from '../../components/TodoList';

const Home = () => (
  <WrapContainer bg="#e0e0e0">
    <Header />
    <TypeTodo />
    <TodoList />
  </WrapContainer>
);

export default Home;
