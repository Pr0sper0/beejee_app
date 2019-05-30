import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/login'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onUserNameChange  = (e) => {
        const username = e.target.value
        this.setState (() => ({
            username
        }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState (() => ({
            password
        }))
    }


    onSubmit = (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        console.log('onsubmit')
        console.log(this.props.isLoginSuccess)
        this.props.login(username, password);
        setTimeout(() => {
        if (this.props.isLoginSuccess)
        this.props.history.push('/') }, 300)
        
        this.setState({
            username: '',
            password: ''
        });
      }
    

    render () {
        let {username, password} = this.state
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
     
    return (
    <div>
        <h1>Login</h1>
            <form name="loginForm" onSubmit={this.onSubmit}>
            { isLoginSuccess && <div>Success.</div> }
            { loginError && <div>{loginError.message}</div> }
                <input type="text" placeholder="Username" value={username} onChange = {this.onUserNameChange}  autoFocus />
                <br /><br />
                <input type="password" placeholder="Password" value={password} onChange = {this.onPasswordChange}/>
                <br /><br />
                <input type="submit" value="Login" />


            </form>
        </div>
    );}
}

const mapStateToProps = (state={}) => {
    console.log('mapStateToProps')
    console.log(state)
    return {
        isLoginPending: state.login.isLoginPending,
        isLoginSuccess: state.login.isLoginSuccess,
        loginError: state.login.loginError,
        }
}

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);