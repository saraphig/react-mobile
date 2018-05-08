import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

class LoginComp extends React.Component{
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <p>登录</p>
            </div>
        )
    }
}

export default injectIntl(LoginComp);