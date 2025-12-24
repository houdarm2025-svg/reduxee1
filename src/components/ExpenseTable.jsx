import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../Redux/ActionCreators';

const ExpenseTable = () => {
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f0f9ff' }}>
      <thead>
        <tr style={{ backgroundColor: '#bfdbfe', textAlign: 'left' }}>
          <th style={{ padding: '10px' }}>Titre</th>
          <th style={{ padding: '10px' }}>Montant</th>
          <th style={{ padding: '10px' }}>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(exp => (
          <tr key={exp.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>{exp.title}</td>
            <td style={{ padding: '10px' }}>{exp.amount} DH</td>
            <td style={{ padding: '10px' }}>
              <button 
                onClick={() => dispatch(deleteExpense(exp.id))}
                style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
              >×
                  </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;