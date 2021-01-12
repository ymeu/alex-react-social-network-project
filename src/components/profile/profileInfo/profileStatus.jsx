import React from 'react';
import classes from './profileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      <div>
        {!this.state.editMode && 
        <div>
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || 'No status'} </span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input className={classes.textarea} 
          onChange={this.onStatusChange}
          autoFocus={true} 
          onBlur={this.deactivateEditMode} 
          value={this.state.status} />
        </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;