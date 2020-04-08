import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 1741009 */
  src: url('//at.alicdn.com/t/font_1741009_sng027j8bf.eot');
  src: url('//at.alicdn.com/t/font_1741009_sng027j8bf.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1741009_sng027j8bf.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1741009_sng027j8bf.woff') format('woff'),
  url('//at.alicdn.com/t/font_1741009_sng027j8bf.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1741009_sng027j8bf.svg#iconfont') format('svg');
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
