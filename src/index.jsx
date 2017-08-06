import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Main from './components';

const stores = {
};

render(
  <Provider {...stores}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
