import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin: auto auto;
  margin-top: 5%;
  padding: 2em;
  width: 80%;
  max-height: 70%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
  @media (max-width: 719px) {
    margin-bottom: 5%;
    font-size: 1.5em;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  text-align: center;
  line-height: 1.5em;
`;

const MainPage = () => {
  return (
    <Content>
      <Title>Witam na mojej stronie</Title>
      <Paragraph>
        Klikając w zakładkę KURSY WALUT możesz sprawdzić aktualne kursy głównych walut z aktualnymi
        danymi a klikając w KALKULATOR możesz przeliczyć wybraną ilość gotówki na wybraną przez
        siebie walutę.
      </Paragraph>
    </Content>
  );
};

export default MainPage;
