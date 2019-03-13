import React from "react";
import dateFns from "date-fns";
import locale from "date-fns/locale/pl";
import {
  Container,
  ContainerContent,
  Header,
  Week,
  WeekDay,
  Row,
  Cells,
  SingleCell
} from "./Calendar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
`;

export class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader = () => {
    const dateFormat = "MMMM YYYY";
    return (
      <Header>
        <i className="fas fa-chevron-left" onClick={this.prevMonth} />
        <span>
          {dateFns.format(this.state.currentMonth, dateFormat, {
            locale: locale
          })}
        </span>
        <i className="fas fa-chevron-right" onClick={this.nextMonth} />
      </Header>
    );
  };

  renderDays = () => {
    const dateFormat = "dd";
    const days = [];
    const startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 1; i <= 7; i++) {
      days.push(
        <WeekDay key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat, {
            locale: locale
          })}
        </WeekDay>
      );
    }
    return <Week className="days row">{days}</Week>;
  };

  renderCells = () => {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 1; i <= 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <SingleCell
            disabled={!dateFns.isSameMonth(day, monthStart)}
            selected={dateFns.isSameDay(day, selectedDate)}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
          </SingleCell>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(<Row key={day}>{days}</Row>);
      days = [];
    }

    return <Cells>{rows}</Cells>;
  };

  onDateClick = date => {
    this.setState({
      selectedDate: date
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <ContainerContent>
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </ContainerContent>
        </Container>
      </>
    );
  }
}
