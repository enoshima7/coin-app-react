import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link, withRouter } from 'react-router-dom';
import { Wrapper, Title, LoginBtn, Signup, InputGroup } from './style';
import loginBg from '../../statics/img/LoginBg.svg';

class Login extends Component {
  render() {
    const { handleLogin, history, pwState, handleOnBlur } = this.props;
    return (
      <Wrapper>
        <Title>
          <p>Welcome Back.</p>
          <img src={loginBg}></img>
        </Title>
        <InputGroup>
          <p>Email Address</p>
          <input
            ref={input => {
              this.account = input;
            }}
          ></input>
          <p>Password</p>
          <input
            type="password"
            ref={input => {
              this.password = input;
            }}
            onBlur={() => {
              handleOnBlur(this.password);
            }}
            className={pwState ? '' : 'pwError'}
          ></input>
          <p className={pwState ? 'error correct' : 'error'}>
            Invalid! Try again.
          </p>
        </InputGroup>
        <LoginBtn
          onClick={() => {
            handleLogin(this.account, this.password, history);
          }}
        >
          LOG IN
        </LoginBtn>
        <Signup>Forget Password?</Signup>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    pwState: state.getIn(['loginDetail', 'pwState'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleLogin(acEl, pwEl, history) {
      let flag = /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{6,12}$/.test(
        pwEl.value
      );
      if (flag) {
        history.push('/');
      } else {
        alert('密码不对');
      }
    },
    handleOnBlur(pwEl) {
      let flag = /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{6,12}$/.test(
        pwEl.value
      );
      dispatch(actionCreators.changePwState(flag));
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
