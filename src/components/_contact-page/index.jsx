import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./index.css";

const reasons = [
    { value: 'select', label: 'Select a reason', disabled: true},
    { value: 'general', label: 'General Inquiry' },
    { value: 'project', label: 'Project Inquiry' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'job', label: 'Job Inquiry' },
    { value: 'other', label: 'Other' },
];

const ContactPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState(reasons[0].value);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const validateName = (name) => {
        // Checks if the name contains only letters and spaces and is not empty
        return /^[A-Za-z\s]+$/.test(name) && name.trim().length > 0;
    };

    const validateEmail = (email) => {
        // Basic email validation pattern
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
        setFirstNameError(!validateName(value));
    };

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
        setLastNameError(!validateName(value));
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError(!validateEmail(value));
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    return (
        <div className="contact-container">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                autoComplete="on"
                noValidate // Disables the default HTML validation
            >
                <div>
                    <TextField
                        required
                        id="first-name"
                        label="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={firstNameError}
                        helperText={firstNameError ? "Invalid first name" : ""}
                    />
                    <TextField
                        required
                        id="last-name"
                        label="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={lastNameError}
                        helperText={lastNameError ? "Invalid last name" : ""}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        helperText={emailError ? "Invalid email address" : ""}
                    />
                    <TextField
                        id="reason-select"
                        select
                        label="Reason for Contact"
                        value={reason}
                        onChange={handleReasonChange}
                        helperText="Please select your reason for contact"
                    >           
                        {reasons.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                </div>
            </Box>
        </div>
    );
}

export default ContactPage;
