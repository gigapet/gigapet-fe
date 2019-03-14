import React, { Component } from "react";
import Week from "./Week";
import moment from "moment";
import DayNames from "./DayNames";
import axios from "axios";
import styled from "styled-components";

const MonthLabelContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Arrows = styled.i`
  font-size: 4rem;
  margin: auto 0;
  padding: 0rem 3rem;
`;

const MonthLabel = styled.h1`
  margin: 0 auto 2rem;
  font-size: 5rem;
  color: white;
  text-shadow: 1rem 1rem 1rem black;
  `;
  const Select = styled.select`
    width: 27.5rem;
    height: 5.5rem;
    font-size: 1.8rem;
    margin: 2rem 1rem 1rem 0;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: right;
    padding-left: .5rem;
    :first-child {
      color: gray;
    }

`;
const Label = styled.label`
    display:flex;
`;

  const url = "https://gigapetserver.herokuapp.com";

export class WeekView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: moment(),
      servingsWeek: [],
      vegetable:'',
      fruit:'',
      wholeGrain:'',
      meat:'',
      dairy:'',
      treats:'',
      children: [],
    };
  }
  componentDidMount() {
    // this.servingsWeek();
    this.getChild()

   }
 // servingsWeek = () => {
   //   const userdata = JSON.parse(localStorage.getItem("userdata"));
   //   axios
   //     .post(
   //       `${url}/api/app/get_month_stats`,
   //       {
   //         parentId: userdata.userId
   //       },
   //       {
   //         headers: {
   //           Authorization: userdata.token
   //         }
   //       }
   //     )
   //     .then(res =>
   //       this.setState({
   //         servingsWeek: [...res.data] //  May need Changing
   //       })
   //     )
   //     .catch(err => {
   //       console.log(err);
   //     });
   // };

//api/app/childnames
getChild = () => {
  const userdata = JSON.parse(localStorage.getItem('userdata'));
  axios
    .post(`${url}/api/app/childnames`, {
      parentId: userdata.userId,
    },
    { 
      headers: {
      Authorization: userdata.token
    }}
    )
    .then(res => {
      console.log(res.data);
      this.setState({
        children: [...res.data]
      })
    })

    .catch(err => {
      console.log(err)
    })
}


  previous = () => {
    const { week } = this.state;

    this.setState({
      week: week.subtract(1, "week")
    });
        // this.servingsWeek();

  };

  next = () => {
    const { week } = this.state;

    this.setState({
      week: week.add(1, "week")
    });
        // this.servingsWeek();

  };
  renderWeekLabel() {
    const { week } = this.state;

    return (
      <span className="week-label">
        {week.startOf("week").format("MMMM Do")} -{" "}
        {week.endOf("week").format("MMMM Do YYYY")}
      </span>
    );
  }
  render() {
    const { week } = this.state;
    let date = this.state.week
      .clone()
      .startOf("week")
      .add("d" - 1)
      .day("Sunday");

    return (
      <div>
        <MonthLabelContainer>
          <Arrows className="arrow fa fa-angle-left" onClick={this.previous} />
          <MonthLabel>{this.renderWeekLabel()}</MonthLabel>
          <Arrows className="arrow fa fa-angle-right" onClick={this.next} />
        </MonthLabelContainer>
        <DayNames />
        <Week key={date} date={date.clone()} week={week} />
        <Label>
            <Select name = "fullName" value={this.state.fullName}>
                  <option value ="" disabled hidden>Select Child...</option>
                  {this.state.children.map((child, index) => {
                  return <option key = {index} value = {child.fullName}> {child.fullName} </option>
                })}
            </Select>
        </Label>
      </div>
    );
  }
}

export default WeekView;
