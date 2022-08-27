import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { connect } from "react-redux"
import "./App.css"
import NewTask from "./components/newTask/newTask";
import TaskList from "./components/taskList/taskList";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { addTask } from './redux/actionCreators'

const MapStateToProps = state => {
    return {
        list: state
    }
}

const mapDispatchToProps = dispatch => ({
    addTask: (task) => dispatch(addTask(task)),
})


const App = (props) => {
    return (
        <div className="app">
            <NewTask addTask={props.addTask} />
            <TaskList list={props.list} />
        </div>
    )
}

export default connect(MapStateToProps, mapDispatchToProps)(App)