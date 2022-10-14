import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}

   * {
       box-sizing: border-box;
   }

   body {
    /* direction: rtl; */
    font-size: 14px;
    font-family: "Inter";
   }

   h2 {
    font-size: 2rem;
    font-weight: 700;
   }
`;

export default GlobalStyle;
