import React from 'react';


export const addTask = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return state.concat([action.text])
        default:
            return state
    }
}