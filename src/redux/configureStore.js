import React from 'react';
import { legacy_createStore as createStore } from 'redux'
import { addTask } from './actionCreators';


export const ConfigureStore = () => {
    const store = createStore(addTask, ["tasl 1", "task 2", "task 3fffffffffffffffffffffffffffffffffffffffffffffffffffffffff"]);

    return store;
}