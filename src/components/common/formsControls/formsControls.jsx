import React from 'react';
import classes from './formsControls.module.css';

export const Textarea = (props) => {
    let hasError = props.meta.error && props.meta.touched;
    return (
        <div className={hasError && classes.error}>
            <textarea {...props} {...props.input}></textarea>
            <div>
            {hasError && <span>{props.meta.error}</span>}    
            </div>
        </div>
    )
}
export const Input = (props) => {
    let hasError = props.meta.error && props.meta.touched;
    return (
        <div className={hasError && classes.error}>
            <input {...props} {...props.input} />
            <div>
            {hasError && <span>{props.meta.error}</span>}    
            </div>
        </div>
    )
}

