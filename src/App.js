import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Users} from './components/Users'
import {Account} from './components/Account'
import {AccountTypes} from './components/AccountTypes'
import {Categories} from './components/Categories'
import {Transactions} from './components/Transactions'


function App() {
  return (
    <div>
      <Header/>
          <div>
            <Users />
            <Account />
            <AccountTypes />
            <Categories />
            <Transactions />
          </div>
    </div>
  );
}

export default App;
