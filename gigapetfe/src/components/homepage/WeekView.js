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
const Servings = styled.div`
  display:flex;
  flex-wrap: wrap;

`;
const Item = styled.p`
  font-size:1.8rem;
  width:31%;
  text-align:left;
  padding:1rem;
  color:black;
`;

  const url = "https://gigapetserver.herokuapp.com";

export class WeekView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: moment(),
      servingsWeek: [],
      vegetable:0,
      fruit:0,
      wholeGrain:0,
      meat:0,
      dairy:0,
      treats:0,
      children: [],
      selectedChild:'',
    };
  }
  componentDidMount() {
    this.servingsWeek();
    this.getChild()

   }

   handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

 servingsWeek = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  console.log('running')
  axios
    .post(
      `${url}/api/app/getstats`,
      {
        parentId: userdata.userId,
        dateStart: this.state.week.startOf("week").format("YYYY-MM-DD"),
        dateEnd: this.state.week.endOf("week").format("YYYY-MM-DD"),
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
        this.servingsWeek();

  };

  next = () => {
    const { week } = this.state;

    this.setState({
      week: week.add(1, "week")
    });
        this.servingsWeek();

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
            <Select name="selectedChild" value={this.state.selectedChild} onChange={this.handleChanges}>
                  <option value ="" disabled hidden>Select Child...</option>
                  {this.state.children.map((child, index) => {
                  return <option key = {index} value = {child.fullName}> {child.fullName} </option>
                })}
            </Select>
        </Label>
        <button onClick={() => this.servingsWeek()}>RUN</button>

        <Servings>
          <Item>Vegetable Servings: {this.state.vegetable}</Item>
          <Item>Fruit Servings: {this.state.fruit}</Item>
          <Item>WholeGrain Servings: {this.state.wholeGrain}</Item>
          <Item>Meat Servings: {this.state.meat}</Item>
          <Item>Dairy Servings: {this.state.dairy}</Item>
          <Item>Treats Servings: {this.state.treats}</Item>
        </Servings>
      </div>
    );
  }
}

export default WeekView;
