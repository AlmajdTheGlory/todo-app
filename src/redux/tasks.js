import * as ActionTypes from './actionTypes';
import { TASKS } from "../shared/TASKS"
import uuid from "../../node_modules/uuid/dist/v4"

export const tasks = (state = TASKS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return state.concat({
                text: action.payload,
                id: uuid()
            })
        default:
            return state
    }
}