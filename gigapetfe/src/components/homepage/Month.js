import React, { Component } from "react";
import moment from "moment";
import DayNames from "./DayNames";
import Week from "./Week";
import axios from "axios";
import styled from "styled-components";

const CalendarGeneral = styled.div`
  color: white;
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
`;

const MonthLabelContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MonthLabel = styled.h1`
  margin: 0 auto 2rem;
  font-size: 7rem;
  text-shadow: 1rem 1rem 1rem black;
`;

const Arrows = styled.i`
  font-size: 4rem;
  margin: auto 0;
  padding: 0rem 3rem;
`;
const CalView = styled.div`
  border: 3px solid black;
`;
const Select = styled.select`
  width: 27.5rem;
  height: 5.5rem;
  font-size: 1.8rem;
  margin: 2rem 1rem 1rem 0;
  border-radius: 1rem;
  border: 2px solid black;
  text-align: right;
  padding-left: 0.5rem;
  :first-child {
    color: gray;
  }
`;
const Label = styled.label`
  display: flex;
`;
const Servings = styled.div`
  display:flex;
  flex-wrap: wrap;

`;
const Item = styled.div`
  font-size:1.8rem;
  width:31%;
  text-align:left;
  padding:1rem
  color:black;

`;

const url = "https://gigapetserver.herokuapp.com";

export class Month extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      servingsMonth: [],
      vegetable: 0,
      fruit: 0,
      wholeGrain: 0,
      meat: 0,
      dairy: 0,
      treats: 0,
      selectedChild: '',
      children: []
    };
  }

  componentDidMount() {
    this.ServingMonth();
    this.getChild();
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  ServingMonth = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    console.log('running')
    axios
      .post(
        `${url}/api/app/getstats`,
        {
          parentId: userdata.userId,
          dateStart: this.state.month.startOf("month").format("YYYY-MM-DD"),
          dateEnd: this.state.month.endOf("month").format("YYYY-MM-DD"),
          fullName: this.state.selectedChild,
        },
        {
          headers: {
            Authorization: userdata.token
          }
        }
      )
      .then(res => {
        let response = {
          "vegetable": 0,
          "meat": 0,
          "fruit": 0,
          "dairy": 0,
          "wholeGrain": 0,
          "treats": 0,
        }

        res.data.map(item => {
          response[item.foodType] = item.count;
        })

        console.log(response);
        this.setState({
            vegetable: response["vegetable"],
            meat: response["meat"],
            fruit: response["fruit"],
            dairy: response["dairy"],
            wholeGrain: response["wholeGrain"],
            treats: response["treats"]
          })
      }
      )
      .catch(err => {
        console.log(err);
      });
  };

  //api/app/childnames
  getChild = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    axios
      .post(
        `${url}/api/app/childnames`,
        {
          parentId: userdata.userId
        },
        {
          headers: {
            Authorization: userdata.token
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          children: [...res.data]
        });
      })

      .catch(err => {
        console.log(err);
      });
  };

  previous = () => {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, "month")
    });
  };

  next = () => {
    const { month } = this.state;

    this.setState({
      month: month.add(1, "month")
    });
  };

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { month } = this.state;

    while (!done) {
      weeks.push(<Week key={date} date={date.clone()} month={month} />);

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  MonthDays = () => {
    this.state.month.map(mon => mon.startOf("month"));
  };

  renderMonthLabel() {
    const { month } = this.state;
    return (
      <span className="month-label">
        {month.startOf("month").format("MMMM YYYY")}
      </span>
    );
  }

  render() {
    return (
      <CalendarGeneral>
        <header>
          <MonthLabelContainer>
            <Arrows
              className="arrow fa fa-angle-left"
              onClick={this.previous}
            />
            <MonthLabel>{this.renderMonthLabel()}</MonthLabel>
            <Arrows className="arrow fa fa-angle-right" onClick={this.next} />
          </MonthLabelContainer>
          <DayNames />
        </header>
        <CalView>{this.renderWeeks()}</CalView>
        <Label>
          <Select name="selectedChild" value={this.state.selectedChild} onChange={this.handleChanges}>
            <option value="" disabled hidden>
              Select Child...
            </option>
            {this.state.children.map((child, index) => {
              return (
                <option key={index} value={child.fullName}>
                  {" "}
                  {child.fullName}{" "}
                </option>
              );
            })}
          </Select>
        </Label>
        <button onClick={() => this.ServingMonth()}>RUN</button>
        <Servings>
          <Item>Vegetable Servings: {this.state.vegetable}</Item>
          <Item>Fruit Servings: {this.state.fruit}</Item>
          <Item>WholeGrain Servings: {this.state.wholeGrain}</Item>
          <Item>Meat Servings: {this.state.meat}</Item>
          <Item>Dairy Servings: {this.state.dairy}</Item>
          <Item>Treats Servings: {this.state.treats}</Item>
        </Servings>
      </CalendarGeneral>
    );
  }
}

export default Month;
