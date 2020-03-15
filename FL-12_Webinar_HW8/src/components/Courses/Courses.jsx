import React from 'react';
import csc from './Courses.module.css';
import {courseService} from '../../services';
import Course from './Course/Course';


const Courses = () => {
    const courses = courseService.getCourses();
    return (
       <div className = {csc.courses} >
           {courses.map((course) => {
               return (
                    <Course
                        key={course.id}
                        time={course.time}
                        name={course.name}
                        description={course.description}
                        estimate={course.estimate}/>
               )
           })}
       </div>
    )
}

export default Courses;