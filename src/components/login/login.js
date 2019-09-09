import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


import Header from "../header";
import Message from "../message";
import './login.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            email: '',
            pass: ''
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({active: false});
    }

    onClick = (event) => {
        event.preventDefault();
        if(this.state.email !== '' && this.state.pass !== ''){
            this.setState({active: true, email: '', pass: ''})
        }

    };

    onChange = (name) => (ev) => {
        this.setState({[name]: ev.target.value});
    }

    render() {
        return (
            <div>
                <Header display={false}/>
                <Container component="main" maxWidth="xs">
                    <div className="paper">
                        <Avatar><i className="fa fa-user"/></Avatar>
                        <Typography component="h1" variant="h5">войти</Typography>
                        <form className="form" method="POST">
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
                                value={this.state.email}
                                onChange={this.onChange('email')}
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
                                value={this.state.pass}
                                onChange={this.onChange('pass')}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.onClick}
                            >
                                Войти
                            </Button>

                        </form>
                    </div>

                    <Message active={this.state.active} color="red"
                             text='Ошибка! Непраивльный Email либо пароль!' close={this.handleClose}/>
                </Container>


            </div>

        );
    }
}

export default Login;