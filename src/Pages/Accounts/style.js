import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  padding:0 0 30% 0;
  position: relative;
  z-index:1;
  img{
    position: absolute;
    bottom:0;
    right:0;
    width:90%;
    z-index:-1;
  }
`;
export const Title = styled.p`
  font-size: 50px;
  font-family: DMSerifDisplay;
  letter-spacing: 2px;
  align-self: flex-start;
  padding: 0 10%;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 4px solid #ebca71;
  border-radius: 30px;
  width: 80%;
  height: 15%;
  box-sizing:border-box;
  padding:0 5%;
  background-color: #fdf9f1;
  .name {
    font-family: BrandonBold;
    font-size: 24px;
  }
  .money {
    font-family: BrandonMed;
    font-size: 24px;
  }
`;
