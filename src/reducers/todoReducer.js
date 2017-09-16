import {TODO_ADDED} from '../actions/todoActions';

export default function reducer( state = [], action){
  switch(action.type){
    case TODO_ADDED:
    return [ ...state, action.todo ];
    default:
    return state;
  }
}
