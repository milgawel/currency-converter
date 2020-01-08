import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import MainPage from 'layouts/MainPage/MainPage';
import CalculatorPage from 'layouts/CalculatorPage/CalculatorPage';
import ConvertPage from 'layouts/ConvertPage/ConvertPage';
import 'App.css';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/convert" component={CalculatorPage} />
          <Route path="/check" component={ConvertPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
