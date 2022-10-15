import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface Props {
  isRTL: boolean
}

const GlobalStyle = createGlobalStyle<Props>`
   ${reset}

   * {
       box-sizing: border-box;
   }

   body {
    direction: ${props => props.isRTL ? 'rtl' : 'ltr'};
    font-size: 14px;
    font-family: "Inter";
   }

   h2 {
    font-size: 2rem;
    font-weight: 700;
   }
`;

export default GlobalStyle;
