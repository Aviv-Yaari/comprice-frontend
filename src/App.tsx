import React from 'react';
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
  return (
    <MainContainer>
      <GlobalStyle />
      <Navbar />
      <MainContent>
        <ProductList />
      </MainContent>
    </MainContainer>
  );
};

export default App;
