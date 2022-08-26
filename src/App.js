import React from "react";
import { connect } from "react-redux"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NewTask from "./components/newTask/newTask";
import TaskList from "./components/taskList/taskList";

const MapStateToProps = state => {
    return {
        list: state
    }
}
const App = (props) => {
    return (
        <div className="app">
            <NewTask />
            <TaskList list={props.list} />
        </div>
    )
}

export default connect(MapStateToProps)(App)