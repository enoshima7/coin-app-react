import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-family: DMSerifDisplay;
    font-size: 50px;
  }
  .date {
    font-family: BrandonMed;
    font-size: 30px;
    .iconfont {
      padding-left: 0.5rem;
      font-size: 25px;
      color: #d6d3d0;
    }
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .iconfont {
    font-size: 10rem;
  }
  .content {
    text-align: center;
    font-family: BrandonBold;
    letter-spacing: 1px;
    .now {
      font-size: 50px;
    }
    .total {
      font-family: BrandonMed;
      font-size: 30px;
    }
  }
`;
export const Foot = styled.div`
  height: 35%;
  width:100%;
  overflow-x: scroll;
  white-space: nowrap;
  text-align:center;
  .ItemWrapper {
    margin: 0 0.5rem;
    height: 100%;
    width: 4rem;
    text-align: center;
    display: inline-block;
    height: 100%;
    p {
      font-family: BrandonBold;
      font-size: 14px;
    }
  }
`;
export const Item = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid #cbcaca;
  border-radius: 10px;
  font-family: BrandonMed;
  position: relative;
  .inner {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 84%;
    background-color: #304c8e;
    border-radius: 0 0 10px 10px;
    span {
      position: absolute;
      top: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      color: #eee;
      font-size: 20px;
    }
  }
  .total {
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: #8b8a89;
    font-size: 15px;
  }
`;
