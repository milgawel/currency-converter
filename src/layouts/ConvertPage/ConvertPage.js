import React from 'react';
import styled from 'styled-components';
import CurrencyTable from 'components/CurrencyTable/CurrencyTable';

const Content = styled.div`
  margin: auto auto;
  margin-top: 5%;
  padding: 2em;
  max-width: 80%;
  max-height: 95%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
  @media (max-width: 719px) {
    padding-top: 0.1em;
    padding-bottom: 1em;
    font-size: 0.9em;
  }
`;

const Paragraph = styled.p`
  margin: 1em auto;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  color: black;
`;

const CheckPage = () => {
  return (
    <Content>
      <Paragraph>Przykładowe kursy walut dla polskiego złotego</Paragraph>
      <CurrencyTable />
    </Content>
  );
};

export default CheckPage;
