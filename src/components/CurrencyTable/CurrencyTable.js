import React, { Component } from 'react';
import styled from 'styled-components';

const Table = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: rgba(232, 123, 123, 0.8);
`;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  border: 2px solid black;
  width: 30%;
`;

const id = 0;

class CurrencyTable extends Component {
  state = {
    base: 4.24,
    MainCurrencies: [
      { id: '1', name: 'pln', value: '1' },
      { id: '2', name: 'gbp', value: '2' },
      { id: '3', name: 'eur', value: '3' },
      { id: '4', name: 'usd', value: '4' },
    ],
  };

  updateMainCurrencies = () => {
    fetch(
      'http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=USD,AUD,CAD,PLN,MXN,GBP,UAH&format=1',
    )
      .then(response => response.json())
      .then(data => this.convertData(data))
      .catch(err => console.log(err));
  };

  convertData = data => {
    const object = data.rates;
    console.log(object);
    const array = Object.entries(object).map(([k, v]) => ({ name: k, value: v }));
    console.log(array);
  };

  // updateAllCurrencies = () => {
  //   const accessKey = 'db627f33cf55c037a2f4c566d0d3b5cc';
  //   const base = 'http://data.fixer.io/api/';

  //   fetch(`${base}latest?access_key=${accessKey}`)
  //     .then(response => console.log(response))
  //     .catch(err => console.log(err));
  // };

  positions = this.state.MainCurrencies.map(item => (
    <ListItem key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.value}</p>
    </ListItem>
  ));

  render() {
    return (
      <>
        <Table>{this.positions}</Table>
        <button onClick={this.updateMainCurrencies}>Update data</button>
      </>
    );
  }
}

export default CurrencyTable;
