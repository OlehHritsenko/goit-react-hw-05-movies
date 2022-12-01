import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: 20px auto 40px;
  width: 100%;
  max-width: 300px;
  background-color: transparent;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  width: 200px;
  padding: 6px 10px;
  font: inherit;
  font-size: 14px;
  line-height: 1.33;
  outline: none;
  border: none;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 16px;
  }
  :hover,
  :focus {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2) inset,
      0px 2px 2px 0px rgba(0, 0, 0, 0.14) inset,
      0px 1px 5px 0px rgba(0, 0, 0, 0.12) inset;
  }
`;

const SearchBtn = styled.button`
  display: inline-block;
  text-align: center;
  width: 80px;
  padding: 6px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  color: rgb(42, 42, 42);
  background-color: rgba(42, 42, 42, 0.1);
  text-decoration: none;
  border: 0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    max-width: 100px;
    font-size: 16px;
  }
  :hover,
  :focus {
    color: #fff;
    background-color: #090979;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2) inset,
      0px 2px 2px 0px rgba(0, 0, 0, 0.14) inset,
      0px 1px 5px 0px rgba(0, 0, 0, 0.12) inset;
  }
`;

export { SearchForm, SearchInput, SearchBtn };