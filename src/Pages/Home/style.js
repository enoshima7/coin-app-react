import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow:hidden;
  .detailWrapper {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Title = styled.p`
  font-size: 40px;
  font-family: DMSerifDisplay;
  letter-spacing: 2px;
  align-self: flex-start;
  padding: 0 10%;
  position: relative;
  z-index:0;
  img {
    position: absolute;
    width: 60%;
    right: -50%;
    top:-40%;
    z-index:0;
  }
`;
export const Total = styled.div`
  width: 80%;
  border: 4px solid #ebca71;
  border-radius: 30px;
  font-family: BrandonBold;
  font-size: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10% 10%;
  .title {
    font-family: BrandonMed;
    font-size: 18px;
    padding-bottom: 1rem;
    align-self: flex-start;
  }
`;
export const Income = styled.div`
  width: 45%;
  border: 4px solid #ebca71;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: BrandonBold;
  font-size: 28px;
  padding: 10% 0;
  .title {
    font-family: BrandonMed;
    font-size: 18px;
    padding-bottom: 1rem;
  }
`;
export const Expense = styled.div`
  width: 45%;
  border: 4px solid #ebca71;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: BrandonBold;
  font-size: 28px;
  padding: 10% 0;
  .title {
    font-family: BrandonMed;
    font-size: 18px;
    padding-bottom: 1rem;
  }
`;
