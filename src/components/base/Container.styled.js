import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export { Container };