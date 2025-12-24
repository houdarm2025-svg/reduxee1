import { SET_BUDGET, ADD_EXPENSE, DELETE_EXPENSE } from './ActionTypes';

export const setBudget = (budget) => ({
  type: SET_BUDGET,
  payload: parseFloat(budget) || 0
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id
});
