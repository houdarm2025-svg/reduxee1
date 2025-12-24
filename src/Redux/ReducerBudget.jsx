import { SET_BUDGET, ADD_EXPENSE, DELETE_EXPENSE } from './ActionTypes';

const initialState = {
  budget: 0,
  expenses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUDGET:
      return { ...state, budget: action.payload };
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, { id: Date.now(), ...action.payload }] };
    case DELETE_EXPENSE:
      return { ...state, expenses: state.expenses.filter(exp => exp.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;