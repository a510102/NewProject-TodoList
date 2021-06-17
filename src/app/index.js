import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { GlobaStyled, ResetStyled } from './styles/globaStyle';
import createRootStore from './store';
import Pages from './Pages';

function App() {
  const store = createRootStore()

  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="A TodoList application" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <ResetStyled />
      <GlobaStyled />
      <Provider store={store}>
        <Pages />
      </Provider>
    </div>
  );
}

export default App;
