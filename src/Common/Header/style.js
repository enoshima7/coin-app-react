import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  height: 15%;
  box-sizing: border-box;
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Item = styled.div`
  width: 20%;
  text-align: center;
  border-bottom: 5px solid transparent;
  padding: 10px 0;
  transition: all 0.8s ease;
  .iconfont {
    font-size: 2.5rem;
    box-sizing: border-box;
  }
  &.active {
    border-bottom: 5px solid #efb63f;
  }
`;
