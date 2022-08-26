import React from 'react';
import "./singleTask.css"

const SingleTask = (props) => {
    return (
        <div className='task-and-buttons'>
            <button className='button btn btn-danger delete'>ss</button>
            <div className='task'><p>{props.task}</p></div>
            <button className='button btn btn-success done'>ss</button>
        </div>
    )
}

export default SingleTask;