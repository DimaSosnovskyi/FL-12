import React from 'react';
import nc from './NewCourse.module.css'

const NewCourse = () => {
    return (
        <div className={nc.wrapper}>
            <h3>New Course</h3>
            <div className={nc.titleinput}>
                <label for='input'>Title*</label>
                <input 
                    type='text'
                    id='input'
            />
            </div>
            <div className={nc.descriptioninput}>
                <label for='input'>desciption*</label>
                <input 
                    type='text'
                    id='input'
            />
            </div>
            <div className={nc.durationinput}>
                <label for='input'>duration*</label>
                <input 
                    type='text'
                    id='input'
            />
            </div>
            <div className={nc.date}>
                <input 
                type='date'
            />
            </div>
            <div className={nc.authorsinput}>
                <label for='input'>Authors*</label>
                <input 
                    type='text'
                    id='input'
            />
            </div>
            <div className={nc.newcoursesbutton}>
                <button>
                    Save
                </button>
                <button>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default NewCourse;