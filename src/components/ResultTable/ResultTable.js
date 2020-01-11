import React from 'react';
import styled from 'styled-components';

const ResultDiv = styled.div`
  margin: 0 auto;
  display: flex;
  width: 60%;
  min-height: 3em;
  border: 2px solid white;
  border-radius: 1em;
  background-image: linear-gradient(to bottom right, #1169e1, #87ceeb);
  justify-content: center;
`;

const Object = styled.p`
  height: 3em;
  display: block;
  padding: 0.8em 0.4em;
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

const ResultTable = props => {
  const { baseValue, firstValue, firstName, secondValue, secondName } = props.data;

  let result = ((firstValue / baseValue) * (baseValue / secondValue)).toFixed(2);
  return (
    <ResultDiv>
      <Object>{firstValue}</Object>
      <Object>{firstName}</Object>
      <Object>
        <i class="fas fa-arrow-right"></i>
      </Object>

      <Object>{result}</Object>
      <Object>{secondName}</Object>
    </ResultDiv>
  );
};

export default ResultTable;
