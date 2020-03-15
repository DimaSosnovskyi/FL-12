import React, {useContext} from 'react';
import fc from './Form.module.css'
import {StoreContext, pages} from '../../services';

const Form = () => {
    const {goToPage} = useContext(StoreContext);
    const onAddCourseClick = (e) => {
        e.preventDefault();
        goToPage(pages.add);
    }
    return (
        <form className = {fc.form}>
            <input 
                type='text'
                placeholder = '&#128269; Search'
            />
            <button 
            className={fc.formbutton}
            type='submit'
            onClick={onAddCourseClick}
            >Add course</button>
        </form>
    )
}

export default Form;