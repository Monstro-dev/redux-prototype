import { createStore } from 'redux';
import appReducer from './../reducers/app.reducer';

let appStore = createStore(appReducer);

export default appStore;
