import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {Link} from 'react-router-dom'
import { LoginWrapper, Title, LoginImg, LoginBtn, Signup } from './style';
import loginImg from '../../statics/img/LoginImg.svg';
class Login extends Component {
  render() {
    const { LoginImgUrl } = this.props;
    return (
      <LoginWrapper>
        <Title>coin</Title>
        <LoginImg>
          <img src={loginImg} />
        </LoginImg>
        <Link to='/login' className='loginA'>
          <LoginBtn>LOG IN</LoginBtn>
        </Link>
        <Signup>Signup</Signup>
      </LoginWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    LoginImgUrl: state.getIn(['login', 'LoginImgUrl'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
