import { createStore } from 'redux';
import reducer from './ReducerBudget';

const store = createStore(reducer);

export default store;