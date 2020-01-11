import React, { Component } from 'react';
import styled from 'styled-components';
import ReactScrollableList from 'react-scrollable-list';

const Calc = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledList = styled(ReactScrollableList)`
  height: 300px;
  width: 400px;
  overflow-y: scroll;
  border: #ddd solid 1px;
  background-color: red;
`;

let listItems = [];
for (let i = 0; i < 10000; i++) {
  listItems.push({ id: i, content: i });
}

class Calculator extends Component {
  state = {
    arrayOfCurrencies: [{ id: 'eur', name: 'eur', value: '4' }],
  };

  UpdateConverterArray = () => {
    fetch('http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&format=1')
      .then(response => response.json())
      .then(data => {
        this.handleData(data);
      })
      .catch(err => console.log(err));
  };

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

  renderPositions = () => {
    // this.positions = this.state.MainCurrencies.map(item => (
    //   <ListItem key={item.name}>
    //     <Name>{item.name}</Name>
    //     <Value>{(item.value / this.state.base).toFixed(4)}</Value>
    //   </ListItem>
    // ));
    console.log('pozycje');
  };

  componentDidMount() {
    this.UpdateConverterArray();
  }

  render() {
    this.renderPositions();

    return (
      <Calc>
        hello world
        <StyledList listItems={listItems} heightOfItem={30} maxItemsToRender={listItems.length} />
        {/* <ReactScrollableList
          listItems={listItems}
          heightOfItem={30}
          maxItemsToRender={listItems.length}
        /> */}
      </Calc>
    );
  }
}

export default Calculator;
