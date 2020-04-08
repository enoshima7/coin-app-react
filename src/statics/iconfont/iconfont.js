import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 1741009 */
  src: url('//at.alicdn.com/t/font_1741009_jlju92o5ju.eot');
  src: url('//at.alicdn.com/t/font_1741009_jlju92o5ju.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1741009_jlju92o5ju.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1741009_jlju92o5ju.woff') format('woff'),
  url('//at.alicdn.com/t/font_1741009_jlju92o5ju.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1741009_jlju92o5ju.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
export default GlobalStyle;
