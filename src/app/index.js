import { GlobaStyled, ResetStyled } from './styles/globaStyle';
import { Provider } from 'react-redux';

import {store} from './store';
import Pages from './Pages';

function App() {
  return (
    <div className="App">
      <ResetStyled />
      <GlobaStyled />
      <Provider store={store}>
        <Pages />
      </Provider>
    </div>
  );
}

export default App;
