import React, { Component } from 'react';
import styled from 'styled-components';

const Table = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 2px solid white;
  border-radius: 10px;
  padding: 1% 2%;
  margin: 2% 2%;
  min-width: 16%;
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
      // 'http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=EUR,USD,CZK,AUD,CAD,MXN,GBP,UAH,NOK,SEK,CHF,JPY&format=1',
      'https://api.exchangeratesapi.io/latest?base=EUR',
    )
      .then(response => response.json())
      .then(data => {
        this.handleData(data);
        console.log('base update');
      })
      .catch(err => console.log(err));
  };

  updateBaseCurrency = () => {
    fetch(
      // 'http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=PLN&format=1'
      'https://api.exchangeratesapi.io/latest?base=EUR',
    )
      .then(response => response.json())
      .then(data => {
        const array = Object.entries(data.rates).map(([k, v]) => ({ name: k, value: v }));
        this.setState({
          base: array[19].value,
        });
      })
      .catch(err => console.log(err));
  };

  positions = '';

  handleData = data => {
    const orderedArray = this.convertData(data);
    orderedArray.splice(20);
    this.setState({
      MainCurrencies: orderedArray,
    });
  };

  compare = (a, b) => {
    let comparison = 0;
    if (a.name > b.name) {
      comparison = 1;
    } else if (a.name < b.name) {
      comparison = -1;
    }
    return comparison;
  };

  convertData = data => {
    const object = data.rates;
    const array = Object.entries(object).map(([k, v]) => ({ name: k, value: v, id: k }));
    array.sort(this.compare);
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
        <Value>{(item.value / this.state.base).toFixed(2)}</Value>
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
