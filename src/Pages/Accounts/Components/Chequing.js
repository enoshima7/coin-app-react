import React, { PureComponent } from 'react';
import {
  Wrapper,
  Title,
  Money,
  Date,
  List,
  ListItem,
  detailDate
} from './style';
class Chequing extends PureComponent {
  render() {
    return (
      <Wrapper className={this.props.show}>
        <Title>Chequing</Title>
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
export default Chequing;
