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

  @media (max-width: 719px) {
    width: 100%;
    font-size: 0.9em;
    padding: 0;
    margin: 0;
  }
`;

const Object1 = styled.p`
  height: 3em;
  display: block;
  padding: 0.8em 0.4em;
  font-size: 1.5em;
  color: white;
  text-align: center;
  @media (max-width: 719px) {
    font-size: 1.1em;
    height: 2em;
    padding: 0.6em 0.2em;
  }
`;

const ObjectValue = styled(Object1)`
  @media (max-width: 719px) {
    overflow-x: scroll;
  }
`;

const ResultTable = props => {
  const { amountToConvert, selected1, selected2 } = props.data;

  let result = ((amountToConvert / selected1.value) * selected2.value).toFixed(2);

  return (
    <ResultDiv>
      <ObjectValue>{amountToConvert}</ObjectValue>
      <Object1>{selected1.label}</Object1>
      <Object1>
        <i className="fas fa-arrow-right"></i>
      </Object1>
      <ObjectValue>{result}</ObjectValue>
      <Object1>{selected2.label}</Object1>
    </ResultDiv>
  );
};

export default ResultTable;
