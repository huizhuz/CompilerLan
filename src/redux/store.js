import { createStore } from 'redux';
import reducers, {INITIAL_STATE} from './reducers';

const store = createStore(reducers, INITIAL_STATE)
export default store;