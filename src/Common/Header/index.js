import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Wrapper, Item } from './style';
import { actionCreators } from './store';
class Header extends PureComponent {
  render() {
    const { path } = this.props;
    return (
      <Wrapper>
        <Item
          className={path === 'main' ? 'active' : ''}
          onClick={() => {
            this.props.history.push('/main');
            this.props.changeUnderline('main');
          }}
        >
          <i className="iconfont">&#xe602;</i>
        </Item>
        <Item
        className={path === 'accounts' ? 'active' : ''}
          onClick={() => {
            this.props.history.push('/main/accounts');
            this.props.changeUnderline('accounts');
          }}
        >
          <i className="iconfont">&#xe676;</i>
        </Item>
        <Item
        className={path === 'budget' ? 'active' : ''}
          onClick={() => {
            this.props.history.push('/main/budget');
            this.props.changeUnderline('budget');
          }}
        >
          <i className="iconfont">&#xe655;</i>
        </Item>
        <Item
        className={path === 'gupiao' ? 'active' : ''}
          onClick={() => {
            this.props.history.push('/main/gupiao');
            this.props.changeUnderline('gupiao');
          }}
        >
          <i className="iconfont">&#xe68c;</i>
        </Item>
      </Wrapper>
    );
  }
  componentDidMount() {}
}
const mapStateToProps = state => {
  return {
    path: state.getIn(['header', 'path'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeUnderline(path) {
      console.log(path);
      dispatch(actionCreators.changeUnderline(path));
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
