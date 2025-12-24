import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../Redux/ActionCreators';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      dispatch(addExpense({ title, amount: parseFloat(amount) }));
      setTitle('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre de dépense"
        style={{ padding: '10px', width: 'calc(50% - 10px)', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        style={{ padding: '10px', width: 'calc(30% - 10px)', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}>
        Ajouter dépense
      </button>
    </form>
  );
};

export default ExpenseForm;