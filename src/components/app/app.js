import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';


import LoginPage from "../../pages/login-page";
import MainPage from '../../pages/main-page';

export default class App extends Component {
    state = {
        user: null,
    }

    render() {
        return (
            <Router>

                <Route path="/login" component={() => {
                    return (<LoginPage name={this.state.user}></LoginPage>)
                }}/>
                <Route exact path="/" component={() => {
                    return (<MainPage/>)
                }}/>

            </Router>
        );
    }
}





