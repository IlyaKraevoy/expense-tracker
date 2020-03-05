import React from 'react';
import './App.css';
import { Card,} from 'react-bootstrap';
import {Header} from './components/Header'
import {Users} from './components/Users'
import {Account} from './components/Account'
import {AccountTypes} from './components/AccountTypes'
import {Categories} from './components/Categories'
import {Transactions} from './components/Transactions'
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <Card>
      <Card.Body >
      <div className='main-container'>
        <Header />
        <Users />
        <Account />
        <AccountTypes />
        <Categories />
        <Transactions />
        <AddTransaction />
      </div>
    </Card.Body>
    </Card>
  );
}

export default App;
