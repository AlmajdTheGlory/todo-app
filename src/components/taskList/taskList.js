import React from 'react';
import "./taskList.css"
import SingleTask from '../singleTask/singleTask';

const TaskList = (props) => {
    console.log(props)
    return (
        <div className='taskList'>
            {props.list.map((item) => (
                <SingleTask task={item} />
            ))}
        </div>
    )
}

export default TaskList