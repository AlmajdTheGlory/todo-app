import React from 'react';
import { legacy_createStore as createStore } from 'redux'
import { tasks } from './tasks';


export const ConfigureStore = () => {
    const store = createStore(tasks, []);

    return store;
}