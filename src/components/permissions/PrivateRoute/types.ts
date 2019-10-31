/* eslint-disable semi-style */
/* eslint-disable operator-linebreak */
import { RouteProps } from 'react-router-dom';
import { Location } from 'history';

export type RedirectionRouteState = {
  from: Location;
};

export type PrivateRouteProps = {
  component: React.ComponentType<any>;
} & RouteProps;
