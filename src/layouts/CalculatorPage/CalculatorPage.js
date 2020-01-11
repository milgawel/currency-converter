import React, { Component } from 'react';
import styled from 'styled-components';
// import Calculator from '../../components/Calculator/Calculator';
import ResultTable from 'components/ResultTable/ResultTable';
import PropTypes from 'prop-types';

const Content = styled.div`
  margin: auto auto;
  margin-top: 3.5%;
  padding: 2em;
  width: 80%;
  height: 75%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
`;

class CalculatorPage extends Component {
  state = {
    baseValue: 1,
    baseName: 'eur',
    firstValue: 4.13,
    firstName: 'pln',
    secondValue: 5.12,
    secondName: 'gbp',
  };

  render() {
    return (
      <Content>
        {/* <Calculator /> */}
        <ResultTable data={this.state} />
      </Content>
    );
  }
}

export default CalculatorPage;

ResultTable.propTypes = {
  baseValue: PropTypes.number,
  baseName: PropTypes.string,
  firstValue: PropTypes.number,
  firstName: PropTypes.string,
  secondValue: PropTypes.number,
  secondName: PropTypes.string,
};
