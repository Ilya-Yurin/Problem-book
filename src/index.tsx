import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppEntry from 'components/entry/AppEntry';
import { store, history, persistor } from "redux/store";

const appContainerNode = document.getElementById('root');

const render = (Component: React.ComponentType<any>) => ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Component />
      </Router>
    </PersistGate>
  </Provider>,
  appContainerNode,
);

render(AppEntry);