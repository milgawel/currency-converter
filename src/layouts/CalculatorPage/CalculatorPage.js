import React, { Component } from 'react';
import styled from 'styled-components';
import ResultTable from 'components/ResultTable/ResultTable';
import DropdownList from 'components/DropdownList/DropdownList';

const Content = styled.div`
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  padding: 2em 2em;
  width: 80%;
  min-height: 25%;
  background-color: rgba(17, 105, 225, 0.3);
  border-radius: 2em;
  border: 2px solid white;
  @media (max-width: 719px) {
    padding: 2em 0.5em;
  }
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10%;
  @media (max-width: 719px) {
    font-size: 1.2em;
  }
`;

const FirstCurrency = styled.div`
  width: 60%;
  margin: 4% auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 719px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  height: 3em;
  overflow-x: scroll;
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

  onSelect1 = option => {
    this.setState({ selected1: option });
  };
  onSelect2 = option => {
    this.setState({ selected2: option });
  };

  id = 0;

  compare = (a, b) => {
    let comparison = 0;
    if (a.label > b.label) {
      comparison = 1;
    } else if (a.label < b.label) {
      comparison = -1;
    }
    return comparison;
  };

  fetchData = () => {
    fetch(
      // 'http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&format=1'
      'https://api.exchangeratesapi.io/latest',
    )
      .then(response => response.json())
      .then(data => {
        const array = Object.entries(data.rates).map(([k, v]) => ({
          id: this.id++,
          value: v,
          label: k,
        }));
        array.sort(this.compare);
        this.setState({
          options: array,
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Content>
        <Title>Podaj ilość i waluty aby przeliczyć ich wartość</Title>

        <FirstCurrency>
          <Input
            type="number"
            placeholder=" Ilość"
            value={this.state.amountToConvert}
            onChange={this.handleAmountChange}
          />
          <DropdownList
            change={this.onSelect1}
            value={this.state.selected1}
            state={this.state}
            options={this.state.options}
          />
          <DropdownList
            change={this.onSelect2}
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
