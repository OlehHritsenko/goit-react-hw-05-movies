import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/base/Container.styled';

const MovieContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
    margin: 0 auto;
    padding: 40px;
  }
  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
  @media screen and (min-width: 320px) {
    max-width: 240px;
  }
  @media screen and (min-width: 768px) {
    max-width: 320px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 360px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: rgb(0, 0, 0);
  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  max-height: 250px;
  max-width: 270px;
  overflow-y: auto;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;
  margin-top: -5px;
  @media screen and (min-width: 768px) {
    max-width: 240px;
    font-size: 14px;
    margin-top: -10px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 360px;
  }
`;

const Count = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #090979;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const BoxAdditional = styled.div`
  margin-top: 30px;
`;

const List = styled.ul`
  display: inline-flex;
  gap: 20px;
`;

const ItemLink = styled(NavLink)`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 6px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: rgb(131 128 195);
  border: 1px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 4px 5px 10px -2px rgba(132, 132, 132, 0.5);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 7px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    padding: 8px;
    font-size: 18px;
  }
  &.active {
    color: #ff0000;
    background-color: #fff;
    box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5) inset;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ff0000;
    background-color: #fff;
    box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5) inset;
  }
`;

export {
  MovieContainer,
  BoxDetails,
  BoxAdditional,
  Image,
  InfoWrapper,
  Title,
  SubTitle,
  Description,
  Count,
  List,
  ItemLink,
};