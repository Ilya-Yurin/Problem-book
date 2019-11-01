import * as styledComponents from 'styled-components';
import 'antd/dist/antd.css';

const {
  default: styled,
  createGlobalStyle
} = styledComponents as styledComponents.ThemedStyledComponentsModule<any>;

export { createGlobalStyle };
export default styled;
