import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './login.scss'

class LoginComp extends React.Component{
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
    }

    render(){
        return (
            <div className="login">
                <p>登录</p>
            </div>
        )
    }
}

export default injectIntl(LoginComp);