import React from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


import Header from "../header";

import './login.css';

const Login = () => {
    return (
        <div>
            <Header display={false}/>
            <Container component="main" maxWidth="xs">
                <div className="paper">
                    <Avatar><i className="fa fa-user"/></Avatar>
                    <Typography component="h1" variant="h5">войти</Typography>
                    <form className="form">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            type="password"
                            label="Password"
                            name="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Войти
                        </Button>

                    </form>
                </div>
            </Container>


        </div>

    );
}

export default Login;