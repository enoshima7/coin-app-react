import { createGlobalStyle } from 'styled-components';
import DMSerifDisplay from './DMSerifDisplay-Regular.ttf';
import BrandonBold from './Brandon_bld.otf';
import BrandonMed from './Brandon_med.otf';
export default createGlobalStyle`
@font-face {
	font-family: DMSerifDisplay;
	src: url(${DMSerifDisplay});
}
@font-face {
	font-family: BrandonBold;
	src: url(${BrandonBold});
}
@font-face {
	font-family: BrandonMed;
	src: url(${BrandonMed});
}
`;
