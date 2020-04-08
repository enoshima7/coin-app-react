import React, { PureComponent } from 'react';
import { HomeWrapper, Title, Total, Income, Expense } from './style';
import welcomeBg from '../../statics/img/welcomBg.svg';
class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <Title>
          Hello,
          <br />
          William.
          <img src={welcomeBg}></img>
        </Title>
        <Total>
          <p className="title">TOTAL BALANCE</p>
          <p className="content">$5,419.76</p>
        </Total>
        <div className="detailWrapper">
          <Income>
            <p className="title">Income</p>
            <p>$1208</p>
          </Income>
          <Expense>
            <p className="title">Expense</p>
            <p>$426</p>
          </Expense>
        </div>
      </HomeWrapper>
    );
  }
}
export default Home;
