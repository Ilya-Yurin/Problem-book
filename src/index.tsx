import React from 'react';
import ReactDom from 'react-dom';
import AppEntry from 'src/components/entry/AppEntry';

const appContainerNode = document.getElementById('root');

const render = (Component: React.ComponentType<any>) => ReactDom.render(
  <Component />,
  appContainerNode,
);

render(AppEntry);