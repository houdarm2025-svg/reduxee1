import React from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <SummaryCards />
      <BudgetForm />
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;