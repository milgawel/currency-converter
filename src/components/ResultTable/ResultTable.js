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
  const { amountToConvert, selected1, selected2 } = props.data;

  let result = ((amountToConvert / selected1.value) * selected2.value).toFixed(2);

  return (
    <ResultDiv>
      <Object>{amountToConvert}</Object>
      <Object>{selected1.label}</Object>
      <Object>
        <i className="fas fa-arrow-right"></i>
      </Object>
      <Object>{result}</Object>
      <Object>{selected2.label}</Object>
    </ResultDiv>
  );
};

export default ResultTable;
