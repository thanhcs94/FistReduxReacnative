import appData from './dataReducer';
import {combineReducers} from 'redux';

const  rootReducer = combineReducers({
    appData
});
export default rootReducer;