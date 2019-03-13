import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(116, 116, 145);
    height: 100vh;
`;

const Input = styled.input`
    width: 25rem;
    height: 3rem;
    font-size: 1.8rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: center;
`;

const Div = styled.div`
display: flex;
`;

const Box = styled.div`
border: 2px solid black;
display: flex;
flex-direction: column;
`;

const P = styled.p`
    padding: 1rem 5rem;
`;

const Select = styled.select`
    width: 27.5rem;
    height: 5.5rem;
    font-size: 1.8rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: right;

`;

const Option = styled.option`
    text-align: center;
`;

const Button = styled.button`
    color: white;
    background: midnightblue;
    font-size: 1.8rem;
    padding: 2rem 8rem;
    border-radius: 1rem;
    margin: 1.5rem;
    transition: 1s ease;

    :hover{
        color: teal;
        transform: scale(1.1, .8);
    }
`;

const url = "https://gigapetserver.herokuapp.com";

export default class DayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entry: [],

        day: `.`,
        fullName: '',
        mealTime: '',
        foodType: '',
        foodName: ''


    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    // this.fetchDate(date);

    this.getFood()
    
  }
  


  getFood = () => {

    const date =  this.props.match.params.date;
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    console.log(typeof userdata.userId);
      axios
        .post(`${url}/api/app`, {
            parentId: userdata.userId,
            date: date
        },{ 
            headers: {
            Authorization: userdata.token
          }})

        .then(res => {
            console.log(res.data);
            this.setState({
                entry: res.data
            })
        })
        .catch( err => {
            console.log(err)
        })
  }
    
  handleChanges = event => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    })
}

  postEntry = (event) => {
      event.preventDefault();
      const date =  this.props.match.params.date;
      const userdata = JSON.parse(localStorage.getItem('userdata'));
    axios  
    .post(`${url}/api/app`, {
        fullName: this.state.fullName,
        mealTime: this.state.mealTime,
        foodType: this.state.foodType,
        foodName: this.state.foodName,
        parentId: userdata.userId,
        date: date
    },{ 
        headers: {
        Authorization: userdata.token
      }})

    .then(res => {
        console.log('Its working', res);
        this.setState({
            entry: [...this.state.entry, res.data]
        })
    })

    .catch( error => console.log('OH NO', error));

    this.setState({
        fullName: '',
        mealTime: '',
        foodType: '',
        foodName: ''
  })
}
  

  render() {
    if (!this.state.day) {
      return <h1>Loading dietary information...</h1>;
    }

    return (
        <>
      <Form>
      <Button onClick = {(event, date) => {this.postEntry(event,date)}}> Clicka Me </Button>
          <Input 
            placeholder = "fullname..."
            type = "text"
            value = {this.state.fullName}
            name = "fullName"
            onChange = {this.handleChanges}/>

            <label>
                <Select name = "mealTime" value={this.state.mealTime} onChange={this.handleChanges}>
                    <Option value ="" disabled selected hidden>Select Meal...</Option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                </Select>
            </label>

            <label>
                <Select name = "foodType" value = {this.state.foodType} onChange={this.handleChanges}>
                    <option value="" disabled selected hidden>Select food type...</option>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="wholeGrain">Whole Grain</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="fat">Fat</option>
                    <option value="oil">Oil</option>
                    <option value="treats">Treats</option>
                </Select>
            </label>

           <Input 
           placeholder = "foodname..."
           type = "text"
           value = {this.state.foodName}
           name = "foodName"
           onChange = {this.handleChanges}/>

      <Div>
           {this.state.entry.map((ent)=>{
              return (
             
              <Box>
                    <P>{ent.fullName} </P> 
                    <P>{ent.mealTime} </P>
                    <P>{ent.foodName} </P>
              </Box>
        
              )
          })}
      </Div>
      </Form>
      </>

    );
  }
}
