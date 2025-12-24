import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBudget } from '../Redux/ActionCreators';

const BudgetForm = () => {
  const [budget, setBudgetValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBudget(budget));
    setBudgetValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudgetValue(e.target.value)}
        placeholder="Donner votre budget"
        style={{ padding: '10px', width: 'calc(100% - 120px)', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}>
        Ajouter Budget
      </button>
    </form>
  );
};

export default BudgetForm;
