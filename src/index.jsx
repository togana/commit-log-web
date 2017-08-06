import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Main from './components';
import CommitStore from './stores/commit';

const stores = {
  commit: new CommitStore(),
};

render(
  <Provider {...stores}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
