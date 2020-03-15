import React, {useState} from 'react';
import cc from './Course.module.css'


const Course = (props) => {
    const [isVisible, toggleVisible] = useState(false);
    return (
        <div className={cc.courses}>
            <p className={cc.time}>{props.time}</p>
            <span className ={cc.courseName}>{props.name}</span>
            <p className={cc.description}>{props.description}</p>
            <p className={cc.estimate}>{props.estimate}</p>
            <div>
                <a 
                    className={cc.item}
                    onClick = {() => toggleVisible(!isVisible)}
                >
                    ...
                </a> 
                <div className={`${cc.actionitems} ${isVisible ? cc.actionitemsVisible : ''}`}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Course;