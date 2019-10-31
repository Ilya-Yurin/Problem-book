import React, { useCallback } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector } from "react-redux";
import { tokenSelector } from "redux/modules/session/selectors";
import { PrivateRouteProps, RedirectionRouteState } from './types';
import isNil from 'ramda/es/isNil';
import isEmpty from 'ramda/es/isEmpty';
import not from 'ramda/es/not';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...restRouteProps }) => {
  const token: string | null = useSelector(tokenSelector);

  const renderComponent = useCallback((props: RouteComponentProps) => {
    const state: RedirectionRouteState = {
      from: props.location
    };

    return not(isNil(token)) && not(isEmpty(token))
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/login', state }} />);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component, token]);

  return (<Route {...restRouteProps} render={renderComponent} />);
};

export default React.memo(PrivateRoute);
