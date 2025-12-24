import React from 'react';
import { useSelector } from 'react-redux';

const SummaryCards = () => {
  const { budget, expenses } = useSelector(state => state);

  
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const ecart = budget - totalExpenses;
  const ecartStyle = ecart >= 0 ? { backgroundColor: '#5cf69e', border: '5px solid #29e379' }: { backgroundColor: '#ef4444', border: '5px solid #be123c' };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
      <div style={{ flex: 1, margin: '0 10px', padding: '15px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
        <p>💰 Budget total</p>
        <h2>{budget} DH</h2>
      </div>
      <div style={{ flex: 1, margin: '0 10px', padding: '15px', backgroundColor: '#f59e0b', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
        <p> � Dépenses </p>
        <h2>{totalExpenses} DH</h2>
      </div>
      <div style={{ flex: 1, margin: '0 10px', padding: '15px', color: 'white', borderRadius: '8px', textAlign: 'center', ...ecartStyle }}>
        <p> ⚖ Écart</p>
        <h2>{ecart} DH</h2>
      </div>
    </div>
  );
};

export default SummaryCards;