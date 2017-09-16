import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions';

const Todo = ({dispatch}) =>
    <input onChange={(evt) => {dispatch(addTodo(evt.target.value))}} />;

export default connect()(Todo);