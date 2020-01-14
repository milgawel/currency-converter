import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResultTable from 'components/ResultTable/ResultTable';
import DropdownList from 'components/DropdownList/DropdownList';

const Content = styled.div`
  margin: 4% auto;
  padding: 2em;
  width: 80%;
  min-height: 25%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
  border: 2px solid black;
`;

const FirstCurrency = styled.div`
  width: 60%;
  margin: 4% auto;
  display: flex;
  justify-content: space-between;
`;

class CalculatorPage extends Component {
  state = {
    amountToConvert: '',
    selected1: { value: 4.23, label: 'PLN' },
    selected2: { value: 0.85, label: 'GBP' },
    options: [],
  };

  handleAmountChange = e => {
    this.setState({
      amountToConvert: e.target.value,
    });
  };

  _onSelect1 = option => {
    this.setState({ selected1: option });
  };
  _onSelect2 = option => {
    this.setState({ selected2: option });
  };

  id = 0;

  fetchData = () => {
    fetch('http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&format=1')
      .then(response => response.json())
      .then(data => {
        const array = Object.entries(data.rates).map(([k, v]) => ({
          id: this.id++,
          value: v,
          label: k,
        }));
        this.setState({
          options: array,
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData();
    console.log('fetchdata componentdidmount');
  }

  render() {
    return (
      <Content>
        <FirstCurrency>
          <input
            type="number"
            placeholder="podaj ilość"
            value={this.state.amountToConvert}
            onChange={this.handleAmountChange}
          />
          <DropdownList
            change={this._onSelect1}
            value={this.state.selected1}
            state={this.state}
            options={this.state.options}
          />
          <DropdownList
            change={this._onSelect2}
            value={this.state.selected2}
            state={this.state}
            options={this.state.options}
          />
        </FirstCurrency>
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
