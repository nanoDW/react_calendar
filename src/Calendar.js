import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  font-family: "Open Sans", sans-serif;
`;

export const ContainerContent = styled.article`
  padding: 20px;
  text-align: center;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const Week = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #ddd;
`;

export const WeekDay = styled.p`
  width: 100%;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  border-left: 1px solid #ddd;

  :first-child {
    border: 0;
  }
`;

export const Cells = styled.div`
  padding: 20px 20px 0;
`;

export const Row = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;

  :last-child {
    border: 0;
  }
`;

export const SingleCell = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-left: 1px solid #ddd;
  background-color: ${props =>
    props.disabled ? "#eee" : props.selected ? "#4444ff" : "#fff"};
  color: ${props =>
    props.disabled ? "#222" : props.selected ? "#fff" : "#000"};

  transition: background-color 0.5s, color 0.5s;

  :first-child {
    border: 0;
  }

  :hover {
    background-color: ${props => (props.disabled ? "#1A90FF" : "#1c79d1")};
    color: #eee;
  }
`;
