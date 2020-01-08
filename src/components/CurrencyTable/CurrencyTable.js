import React, { Component } from 'react';
import styled from 'styled-components';

const Table = styled.div`
  width: 100%;
  max-height: 100%;
  background-color: rgba(232, 123, 123, 0.8);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 2px solid black;
  border-radius: 10px;
  padding: 1% 2%;
  margin: 2%;
  min-width: 5%;
  background-image: linear-gradient(to bottom right, #1169e1, #87ceeb);
  align-items: center;
`;

const Name = styled.h3``;

const Value = styled.p`
  margin-top: 10%;
  font-weight: bold;
`;

class CurrencyTable extends Component {
  state = {
    base: 4.24,
    MainCurrencies: [],
  };

  updateMainCurrencies = () => {
    fetch(
      'http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=EUR,USD,CZK,AUD,CAD,MXN,GBP,UAH,NOK,SEK,CHF,JPY&format=1',
    )
      .then(response => response.json())
      .then(data => {
        this.handleData(data);
      })
      .catch(err => console.log(err));
  };

  updateBaseCurrency = () => {
    fetch(
      'http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=PLN&format=1',
    )
      .then(response => response.json())
      .then(data => {
        const array = Object.entries(data.rates).map(([k, v]) => ({ name: k, value: v }));
        this.setState({
          base: array[0].value,
        });
      })
      .catch(err => console.log(err));
  };

  positions = '';

  handleData = data => {
    const orderedArray = this.convertData(data);
    this.setState({
      MainCurrencies: orderedArray,
    });
  };

  convertData = data => {
    const object = data.rates;
    const array = Object.entries(object).map(([k, v]) => ({ id: k, name: k, value: v }));
    return array;
  };

  componentDidMount() {
    this.updateMainCurrencies();
    this.updateBaseCurrency();
  }

  renderPositions = () => {
    this.positions = this.state.MainCurrencies.map(item => (
      <ListItem key={item.name}>
        <Name>{item.name}</Name>
        <Value>{(item.value / this.state.base).toFixed(4)}</Value>
      </ListItem>
    ));
  };

  render() {
    this.renderPositions();

    return (
      <>
        <Table>{this.positions}</Table>
      </>
    );
  }
}

export default CurrencyTable;
