import { combineReducers } from 'redux';
import toggleReducer from './Reducers';

// export default combineReducers({
//     sampleReducer
// });

let rootReducer = combineReducers({
    toggleReducer
});

export default rootReducer;