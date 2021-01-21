import { createGlobalStyle } from 'styled-components';

import Gelion from './Gelion-Regular.ttf';
import GelionBold from './Gelion-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Gelion-Regular';
        src: local('Gelion-Regular'),
        url(${Gelion}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;