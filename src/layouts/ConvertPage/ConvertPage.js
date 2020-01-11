import React from 'react';
import styled from 'styled-components';
import CurrencyTable from 'components/CurrencyTable/CurrencyTable';

const Content = styled.div`
  margin: auto auto;
  margin-top: 3.5%;
  padding: 2em;
  max-width: 75%;
  max-height: 75%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
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
