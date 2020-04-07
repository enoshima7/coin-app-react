import styled from 'styled-components';
export const LoginWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 10% 0;
  width: 100%;
  background-color: #fef9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .loginA {
    width: 100%;
  }
`;
export const Title = styled.div`
  font-family: DMSerifDisplay;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.4rem;
`;
export const LoginImg = styled.div`
  width: 80%;
  img {
    width: 100%;
  }
`;
export const LoginBtn = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: #eeb63f;
  outline: none;
  border: 1px solid #eee;
  border-radius: 100px;
  height: 2.5rem;
  font-size: 18px;
  font-family: BrandonMed;
  text-align: center;
  line-height: 2.5rem;
`;
export const Signup = styled.div`
  font-family: BrandonMed;
  font-size: 13px;
`;
