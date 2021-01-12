import React from 'react';
import classes from './messages.module.css';
import DialogItem from './dialogItem/dialogItem';
import MessageItem from './message/messageItem';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/formsControls/formsControls';
import { required, maxLengthCreator } from '../../utilities/validators/validators';


let maxLength30 = maxLengthCreator(30);

const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messageElements = props.messagesPage.messages.map(m => <MessageItem message={m.message} key={m.id} />);
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <AddReduxMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name='newMessageBody'
                component={Textarea}
                validate={[required, maxLength30]}
                placeholder='Enter your message'
                className={classes.textarea} />
            <button className={classes.sendButton}>Send Message</button>
        </form>
    )

}

const AddReduxMessageForm = reduxForm({
form: 'addMessageForm'
})(AddMessageForm)

export default Messages;

