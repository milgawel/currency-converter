import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin: auto auto;
  margin-top: 3.5%;
  padding: 2em;
  width: 80%;
  height: 75%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
`;

const CalculatorPage = () => {
  return (
    <Content>
      <h1>kalkulator</h1>
    </Content>
  );
};

export default CalculatorPage;
