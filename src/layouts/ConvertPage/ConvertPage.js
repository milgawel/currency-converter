import React from 'react';
import styled from 'styled-components';
import CurrencyTable from 'components/CurrencyTable/CurrencyTable';

const Content = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin: auto auto;
  margin-top: 3.5%;
  padding: 2em;
  width: 80%;
  max-height: 75%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
`;

const CheckPage = () => {
  return (
    <Content>
      <CurrencyTable />
    </Content>
  );
};

export default CheckPage;
