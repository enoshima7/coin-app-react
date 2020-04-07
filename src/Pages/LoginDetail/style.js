import styled from 'styled-components';
export const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 10% 0;
  width: 100%;
  background-color: #fef9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.div`
  font-family: DMSerifDisplay;
  font-size: 40px;
  width: 100%;
  position: relative;
  z-index: 0;
  p {
    box-sizing: border-box;
    padding: 0 15%;
    width: 50%;
    line-height: 1.5;
    align-self: flex-start;
    letter-spacing: 0.4rem;
    font-weight: bold;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    z-index: -1;
  }
`;
export const LoginImg = styled.div`
  width: 80%;
  img {
    width: 100%;
  }
`;
export const LoginBtn = styled.div`
  width: 70%;
  background-color: #eeb63f;
  outline: none;
  border: 1px solid #eee;
  border-radius: 100px;
  height: 2.5rem;
  font-size: 18px;
  font-family: BrandonMed;
  text-align: center;
  line-height: 2.5rem;
  margin: 0 auto;
`;
export const Signup = styled.div`
  font-family: BrandonBold;
  font-size: 13px;
`;

export const InputGroup = styled.div`
  width: 100%;
  font-family: BrandonBold;
  font-size: 13px;
  box-sizing: border-box;
  padding: 0 15%;
  letter-spacing: 1px;
  position: relative;
  p {
    padding: 1rem 0;
  }
  input {
    font-family: BrandonMed;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #979797;
    border-radius: 100px;
    line-height: 2.5rem;
    height: 2.5rem;
    outline: none;
    padding: 0 1rem;
    &.pwError {
      border: 1px solid #be2d1e;
      z-index: 0;
    }
  }
  .error {
    color: #be2d1e;
    opacity: 1;
    transition: all 1s ease;
    &.correct{
      opacity:0;
    }
  }
`;
