import React, { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';
import AppRoute from '@con/app-route';

render(
  <StrictMode>
    <AppRoute />
  </StrictMode>,
  document.getElementById('root'),
);

// serviceWorker.register();
serviceWorker.unregister();
