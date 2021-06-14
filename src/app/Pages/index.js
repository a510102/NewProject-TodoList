import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundler from '../router/ErrorBroundler';

const Home = lazy(() => import('./Home'));

const Pages = () => {

  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundler>
          <Suspense fallback={<div>...loading</div>}>
            <Route exact path='/' component={Home} />
          </Suspense>
        </ErrorBoundler>
      </Switch>
    </BrowserRouter>
  )
}

export default Pages;

