import {legacy_createStore} from 'redux';
import reducer from './reducer';

let initial = {
    count : 0,
    data : "Ritik"
}
export const store = legacy_createStore(reducer,initial) 