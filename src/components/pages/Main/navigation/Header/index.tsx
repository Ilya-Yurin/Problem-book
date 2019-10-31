import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "redux/modules/session/selectors";
import { makeLogout } from "redux/modules/session/actions";
import DefaultLink from 'components/common/Link';
import { HeaderHead, StyledHeader, HeaderTail, StyledLogout, StyledTitle } from './styled';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const token: string | null = useSelector(tokenSelector);
  const onLogout = useCallback(() => dispatch(makeLogout()), []);

  return (
    <StyledHeader>
      <HeaderHead>
        <DefaultLink to="/">
          Problems book
        </DefaultLink>
      </HeaderHead>
      <HeaderTail>
        {
          token
            ? (
              <>
                <StyledTitle color="blue">Admin</StyledTitle>
                <StyledLogout onClick={onLogout}>Выйти</StyledLogout>
              </>
            )
            : (<DefaultLink to="/login">Войти</DefaultLink>)
        }
      </HeaderTail>
    </StyledHeader>
  );
};

export default React.memo(Header);
