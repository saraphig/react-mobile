import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import Header from 'components/comComponent/header/Header';

class Index extends React.Component{
    constructor(props) {
        super(props)
        this.props.dispatch({
            type: loginSaga.setToken,
            payload: '3245353'
        }) 
        
    }

    componentDidMount(){
        // 挂载完成
    }
    
    componentWillReceiveProps(nextprops){
        // 接收到nextprops触发
        console.log('==',nextprops.token)
    }

    test () {
       this.props.dispatch({
            type: loginSaga.setToken,
            payload: '3245353'
        }) 
    }

    render(){
        const {
            intl: { formatMessage }
        } = this.props;
        return (
            <div>
                <button onClick={() => this.test()}>{formatMessage({id: 'login.login'})}</button>
                <p onClick={() => this.props.history.push('/login')}>首页</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.login.token,
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Index));
