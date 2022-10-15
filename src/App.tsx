import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/GlobalStyle.styled';
import styled from 'styled-components';
import ProductList from './pages/ProductList';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100vh;
`;

const MainContent = styled.main`
  padding: 1em;
`;

const App: React.FC = () => {
  const [isRTL, setIsRTL] = useState(false);

  const toggleRTL: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsRTL(isRTL => !isRTL);
  };

  return (
    <MainContainer>
      <GlobalStyle isRTL={isRTL} />
      <Navbar toggleRTL={toggleRTL} />
      <MainContent>
        <ProductList />
      </MainContent>
    </MainContainer>
  );
};

export default App;
