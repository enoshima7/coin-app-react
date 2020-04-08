import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, Title, Body, Foot, Item } from './style';
import { actionCreators } from './store';
class Budget extends PureComponent {
  render() {
    const {} = this.props;
    return (
      <HomeWrapper>
        <Title>
          <span className="title">Budget</span>
          <span className="date">
            MAY<i className="iconfont">&#xe69a;</i>
          </span>
        </Title>
        <Body>
          <i className="iconfont">&#xe60b;</i>
          <p className="content">
            <span className="now">$445</span>
            <span className="total">/$800</span>
          </p>
        </Body>
        <Foot>
          <div className="ItemWrapper">
            <Item>
              <span className="total">$200</span>
              <div className="inner">
                <span>84%</span>
              </div>
            </Item>
            <p>FOOD</p>
          </div>{' '}
          <div className="ItemWrapper">
            <Item>
              <span className="total">$100</span>
              <div className="inner">
                <span>41%</span>
              </div>
            </Item>
            <p>HEALTH</p>
          </div>{' '}
          <div className="ItemWrapper">
            <Item>
              <span className="total">$150</span>
              <div className="inner">
                <span>95%</span>
              </div>
            </Item>
            <p>HOME</p>
          </div>{' '}
          <div className="ItemWrapper">
            <Item>
              <span className="total">$150</span>
              <div className="inner">
                <span>70%</span>
              </div>
            </Item>
            <p>SCHOOL</p>
          </div>
          <div className="ItemWrapper">
            <Item>
              <span className="total">$200</span>
              <div className="inner">
                <span>84%</span>
              </div>
            </Item>
            <p>FOOD</p>
          </div>
        </Foot>
      </HomeWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Budget);
