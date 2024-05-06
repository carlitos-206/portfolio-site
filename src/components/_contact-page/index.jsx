import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

import Stack from '@mui/material/Stack';
import "./index.css";

import { Tilt } from 'react-tilt';

const Options = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const reasons = [
    { value: '', label: 'Select a Reason for Contact'},
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
    const [reasonError, setReasonError] = useState(false);

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
        if (event.target.value === '') {
            setReasonError(true);
        } else {
        setReason(event.target.value);
        setReasonError(false);
        }
    };

    const handleSumit = () => {
        if (!validateName(firstName)) {
            setFirstNameError(true);
        }
        if (!validateName(lastName)) {
            setLastNameError(true);
        }
        if (!validateEmail(email)) {
            setEmailError(true);
        }
        if (reason === '') {
            setReasonError(true);
        }
        if (validateName(firstName) && validateName(lastName) && validateEmail(email) && reason !== '') {
            alert("Form submitted successfully!");
            // clear form
            setFirstName('');
            setLastName('');
            setEmail('');
            setReason(reasons[0].value);
            setFirstNameError(false);
            setLastNameError(false);
            setEmailError(false);
            setReasonError(false);

        }

    }
    return (
        <div className="contact-container">
            <Tilt className="contact-button" options={Options}>
            <div className='form-container'>
                <h1>Contact Me</h1>
                <IconButton
                    onClick={() => window.open('https://www.linkedin.com/in/carlitos206/')}
                >
                   LinkedIn <LinkedInIcon color='info'  />
                </IconButton>
                <h3>or</h3>
                {/* <p>Fill out the form below to get in touch with me.</p> */}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                autoComplete="on"
                noValidate // Disables the default HTML validation
                >
                <div className='form-fields'>
                    <TextField
                        required
                        id="first-name"
                        label="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={firstNameError}
                        helperText={firstNameError ? "Invalid first name" : ""}
                        color="info"
                        />
                    <TextField
                        required
                        id="last-name"
                        label="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={lastNameError}
                        helperText={lastNameError ? "Invalid last name" : ""}
                        color="info"

                        />
                </div>
                <div className='form-fields'>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        helperText={emailError ? "Invalid email address" : ""}
                        color="info"

                        />
                    <TextField
                        required
                        id="reason-select"
                        select
                        label="Reason for Contact"
                        value={reason}
                        onChange={handleReasonChange}
                        color="info"
                        error={reasonError}
                        >           
                        {reasons.map((option) =>{
                            if (option.value === '') {
                                return <MenuItem key={option.value} value={option.value} disabled>{option.label}</MenuItem>;
                            
                            } else {
                                return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>;
                            }
                        })}
                    </TextField>
                </div>
                <div className='form-fields'>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue=""
                        fullWidth
                        color="info"

                        />
                </div>
                <div className='form-fields'>
                    <Stack direction="row" spacing={3}>
                        <Button 
                            variant="outlined" 
                            color={'info'} 
                            startIcon={<DeleteIcon />}
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            color={'info'} 
                            endIcon={<SendIcon />}
                            onClick={handleSumit}
                        >
                            Send
                        </Button>
                    </Stack>
                </div>
            </Box>
                    
            </div>
            </Tilt>
        </div>
    );
}

export default ContactPage;
