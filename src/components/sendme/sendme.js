import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './sendme.css';
import Message from "../message";
import MService from '../../servicies/m-service';

class SendMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                text: '',
                open: false,
                color: 'green'
            },
            form_name: '',
            form_email: '',
            form_tema: '',
            form_message: '',
            form_valid: true,
            send_button: false
        }

    }


    handleUserInput = (e) => {
        const name = 'form_' + e.target.name;
        const value = e.target.value;
        // this.setState({...this.state, form:{[name]: value}});
        //
        this.setState({[name]: value});
    }

    onSendMessage = (event) => {
        event.preventDefault();
        this.setState(() => ({send_button: true}));
        let message = {};
        if (this.validateFieldEmail(this.state.form_email)) {
            message = {
                text: 'Ваше сообщение успешно отправлено!',
                color: 'green',
                open: true
            };
            let m = new MService();
            m.sendEmail({name:this.state.form_name, email: this.state.form_email, tema:this.state.form_tema, message:this.state.form_message})
                .then(response => response.json())
                .then(data => {
                    message.text = data.value;
                    message.color = data.type === 'error' ? 'red' : message.color;
                    this.setState(() => ({message: message, send_button: false}));
                })
                .catch(err => {
                    message.text = err
                });

            this.setState(() => ({message: message, form_name: '', form_email: '', form_tema: '', form_message: ''}));
        } else {
            message = {
                text: 'Указанный Вами Email некорректен!',
                color: 'red',
                open: true
            }
            this.setState(() => ({message: message}));
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        let d = this.state.message;
        d.open = false;
        this.setState(() => ({message: d}));
    }

    validateFieldEmail(value) {
        let validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return validEmail ? true : false;
    }

    render() {
        let style_button = this.state.send_button ? {cursor: 'not-allowed', pointerEvents: 'none', background: 'lightgrey'} : null;
        return (
            <section className="sendme" id="contact">
                <div className="container ">
                    <div className="row ">
                        <div className="col-sm-12" style={{paddingBottom: '40px'}}>
                            <h2 className="main">Связаться со мной</h2>
                        </div>
                        <div className="col-lg-12">


                            <form onSubmit={this.onSendMessage}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <TextField type="text" name='name' label='Ваше имя'
                                                       style={{width: '100%', fontFamily: 'txt'}}
                                                       value={this.state.form_name || ''}
                                                       required
                                                       onChange={this.handleUserInput}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <TextField name='email' label='Ваш Email'
                                                       style={{width: '100%', fontFamily: 'txt'}}
                                                       value={this.state.form_email}
                                                       required
                                                       onChange={this.handleUserInput}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <TextField name='tema' label='Тема сообщения'
                                                       style={{width: '100%', fontFamily: 'txt'}}
                                                       value={this.state.form_tema}
                                                       onChange={this.handleUserInput}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <TextField name='message' style={{width: '100%', fontFamily: 'txt'}}
                                                       required
                                                       value={this.state.form_message}
                                                       label="Ваше сообщение"
                                                       multiline
                                                       rows="6"
                                                       type="text"
                                                       onChange={this.handleUserInput}
                                            ></TextField>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: '10px'}}>
                                    <div className="col-lg-12 text-right">
                                        <Button variant="contained" color="primary" type="submit" style={style_button}> Отправить
                                            сообщение</Button>
                                    </div>
                                </div>
                            </form>

                            <Message active={this.state.message.open} color={this.state.message.color}
                                     text={this.state.message.text} close={this.handleClose}/>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SendMe;