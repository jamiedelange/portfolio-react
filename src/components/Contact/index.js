import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="form-box">
            <h2 className="contact-header">E-mail me at <a className="email-link" href="mailto:jamie.de.lange@mac.com">jamie.de.lange@mac.com</a></h2>
            <h3 className="contact-header">... or leave a note:</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field-div">
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"></input>
                </div>
                <div className="contact-field-div">
                    <label htmlFor="email">E-mail address: </label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email"></input>
                </div>
                <div className="contact-field-div">
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;