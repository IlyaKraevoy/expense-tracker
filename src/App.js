import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Accounts} from './components/Accounts'
import {IncomeExpense} from './components/IncomeExpense'
import {Categories} from './components/Categories'
import { Transactions } from './components/Transactions';

function App() {
  return (
    <div>
      <Header />
      <Accounts />
      <IncomeExpense />
      <Categories />
      <Transactions />
    </div>
  );
}

export default App;
