import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, Title, Item } from './style';
import accountsBg from '../../statics/img/accountsBg.svg';
import Chequing from './Components/Chequing';
import { actionCreators } from './store';
class Accounts extends PureComponent {
  render() {
    const { showChequing, chequeingFlag } = this.props;
    return (
      <HomeWrapper>
        <Title>Accounts</Title>
        <Item onClick={showChequing}>
          <span className="name">Chequing</span>
          <span className="money">$50.42</span>
        </Item>
        <Item>
          <span className="name">Saving</span>
          <span className="money">$5082.89</span>
        </Item>
        <Item>
          <span className="name">VISA</span>
          <span className="money">$286.45</span>
        </Item>
        <img src={accountsBg} />
        <Chequing show={chequeingFlag}></Chequing>
      </HomeWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    chequeingFlag: state.getIn(['accounts', 'chequeingFlag'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showChequing() {
      dispatch(actionCreators.showChequing());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
