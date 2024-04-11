import './App.css';
import React from 'react';
import Header  from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './TransactionList.js';
import AddTransactions from './components/AddTransactions.js';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
      </div>
    </GlobalProvider>
  );
}

export default App;
