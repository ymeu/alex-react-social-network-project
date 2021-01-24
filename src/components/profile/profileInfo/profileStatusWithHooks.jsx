import React, { useState } from 'react';
import classes from './profileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  }

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }
    return (
      <div>
        { !editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || 'No status'} </span>
        </div>
        }
        {editMode &&
        <div>
          <input className={classes.textarea} 
          onChange={onStatusChange}
          autoFocus={true} 
          onBlur={deactivateEditMode} 
          value={status} 
          />
        </div>
        }
      </div>
    );
  }


export default ProfileStatusWithHooks;