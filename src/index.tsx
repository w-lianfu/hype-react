import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';
import AppRoute from '@con/app-route';

render(
  <AppRoute />,
  document.getElementById('root'),
);

// serviceWorker.register();
serviceWorker.unregister();
