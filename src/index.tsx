import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom';
import { History } from 'history';
import { createBrowserHistory } from 'history';
import AppEntry from 'src/components/entry/AppEntry';

const appContainerNode = document.getElementById('root');
const browserHistory: History = createBrowserHistory();

const render = (Component: React.ComponentType<any>) => ReactDom.render(
  <Router history={browserHistory}>
    <Component />
  </Router>,
  appContainerNode,
);

render(AppEntry);