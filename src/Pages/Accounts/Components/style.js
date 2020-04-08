import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10%;
  background-color: #fdf9f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -10px 8px -8px rgba(0, 0, 0, 0.75);
  top: 120%;
  left: 0;
  transition:all 0.8s ease;
  &.show{
    top:2%;
  }
`;
export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-family: DMSerifDisplay;
  font-size: 40px;
  padding-bottom:1rem;
`;
export const Money = styled.div`
  width: 100%;
  text-align: center;
  font-family: BrandonBold;
  font-size: 50px;
  padding-bottom:1rem;
`;
export const Date = styled.div`
  width: 100%;
  text-align: center;
  font-family: BrandonMed;
  font-size: 30px;
  padding-bottom:1rem;
  .iconfont {
    padding-left: 0.5rem;
    font-size: 25px;
    color:#d6d3d0;
  }
`;
export const List = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-top: 2px solid #d6d3d0;
  flex:1;
  padding:1rem;
`;
export const ListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 16px;
  font-family: BrandonBold;
  padding:0.5rem 0; 
  .date{
    color:#8f8d8e;
  }
  .content{
    flex:1;
    padding-left:1rem;
  }
`;
