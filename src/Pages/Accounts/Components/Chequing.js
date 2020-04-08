import React, { PureComponent } from 'react';
import { Wrapper, Title, Money, Date, List, ListItem } from './style';
import {actionCreators} from '../store'
import {connect} from 'react-redux'
class Chequing extends PureComponent {
  render() {
    const {closeChequing} = this.props
    return (
      <Wrapper className={this.props.show}>
        <Title>
          <i className="iconfont" onClick={closeChequing}>&#xe69a;</i>Chequing
        </Title>
        <Money>$50.42</Money>
        <Date>
          MAY<i className="iconfont">&#xe69a;</i>
        </Date>
        <List>
          <ListItem>
            <span className="date">04/08</span>
            <span className="content">Starbucks</span>
            <span></span>
            <span>- $4.50</span>
          </ListItem>
          <ListItem>
            <span className="date">04/08</span>
            <span className="content">Starbucks</span>
            <span></span>
            <span>- $4.50</span>
          </ListItem>
          <ListItem>
            <span className="date">04/08</span>
            <span className="content">Starbucks</span>
            <span></span>
            <span>- $4.50</span>
          </ListItem>
          <ListItem>
            <span className="date">04/08</span>
            <span className="content">Starbucks</span>
            <span></span>
            <span>- $4.50</span>
          </ListItem>
        </List>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeChequing() {
      dispatch(actionCreators.closeChequing());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chequing);
