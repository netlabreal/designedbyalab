import React from 'react';
import PropTypes from 'prop-types';
import Login from '../components/login';

const LoginPage = ({name}) => {

    if (!name) {
        return (
            <div style={{paddingTop: '45px'}}>
                <Login/>
            </div>
        );
    } else {
        return <div>11111</div>
    }
}
LoginPage.defaultProps = {
    name: 'Alexandr'
}
LoginPage.propTypes = {
    name: PropTypes.string
}

export default LoginPage;
