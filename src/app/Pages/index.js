import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundler from '../router/ErrorBroundler';
import WrapContainer from '../styles/WrapContainer';
import Header from '../components/Header';
import Home from './Home/Loadable';
import Todo from './Todo/Loadable';

const Pages = () => (
  <BrowserRouter>
    <WrapContainer bg="#e0e0e0">
      <Header />
      <Switch>
        <ErrorBoundler>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} /> 
        </ErrorBoundler>
      </Switch>
    </WrapContainer>
  </BrowserRouter>
);

export default Pages;
