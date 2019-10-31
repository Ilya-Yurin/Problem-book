import * as styledComponents from 'styled-components';

const {
  default: styled,
  createGlobalStyle
} = styledComponents as styledComponents.ThemedStyledComponentsModule<any>;

export { createGlobalStyle };
export default styled;
