import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../actions/login'

const headerStyle = {
    position: 'relative',
    width: '250px',
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    justifyContent: 'space-between',
    padding: '20px',
    margin: '10px',
    cursor: 'pointer',
    textColor: 'green'
}


const Header = (props) => (
    
    <header >
        <h3>Task manager app</h3>
        
        <div style={headerStyle}>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Creacte task</NavLink>
        
        {props.isLoginSuccess ?
            <NavLink to="/" exact={true} activeClassName="is-active" onClick={() => props.logout()}>Logout</NavLink>
            : <NavLink to="/admin" activeClassName="is-active">Login</NavLink>}
        
        </div>
    </header>
)


const mapStateToProps = (state={}) => {
    console.log('Header')
    console.log(state.login.isLoginSuccess)
    return {
       isLoginSuccess: state.login.isLoginSuccess
}}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect (mapStateToProps, mapDispatchToProps)(Header)