import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundler from '../router/ErrorBroundler';
import WrapContainer from '../styles/WrapContainer';
import Header from '../components/Header';
import Home from './Home/Loadable';
import Todo from './Todo/Loadable';
import COVID from './COVID/Loadable';

const Pages = () => (
  <BrowserRouter>
    <WrapContainer bg="#e0e0e0">
      <Header />
      <Switch>
        <ErrorBoundler>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path='/covid' component={COVID} />
        </ErrorBoundler>
      </Switch>
    </WrapContainer>
  </BrowserRouter>
);

export default Pages;
