import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MealWrapper = styled.div`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 80%;
`;

const ChildForm = styled.form`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(116, 116, 145);
    height: 100vh;
    border-left: 2px solid black;
`;

const Input = styled.input`
    width: 25rem;
    height: 3rem;
    font-size: 1.8rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: left;
`;

const Div = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Box = styled.div`
border: 2px solid black;
display: flex;
flex-direction: column;
margin: 3rem;
width: 25rem;
height: 25rem;
justify-content: center;
background: gray;
`;

const P = styled.p`
    padding: 1rem 5rem;
    margin: 0rem;
`;

const Select = styled.select`
    width: 27.5rem;
    height: 5.5rem;
    font-size: 1.8rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: right;
    padding-left: .5rem;
    :first-child {
      color: gray;
    }
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
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
        children: [],

        addChild: '',
        
        day: `.`,
        fullName: '',
        mealTime: '',
        foodType: '',
        foodName: ''


    };
  }

  componentDidMount() {
    this.getFood()
    this.getChild()
    
  }

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


  getFood = () => {

    const date =  this.props.match.params.date;
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    console.log(typeof userdata.userId);
      axios
        .post(`${url}/api/app/getfood`, {
            parentId: userdata.userId,
            date: date
        },
        { 
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

//api/app/addChild --> needs parentId and fullname

  addChild = (event) => {
    event.preventDefault();
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    if(this.state.addChild === ""){
      return alert("You did not enter a child's name.")
    } else {
    axios
    .post(`${url}/api/app/addchild`, {
      fullName: this.state.addChild,
      parentId: userdata.userId
    },
    {
      headers: {
        Authorization: userdata.token
      }
    })

    .then(res => {
      console.log('Its working', res.data);
      this.setState({
      children: [...this.state.children, res.data],
      addChild: ''
      })
    })

    .catch(err => {
      console.log('Its not working', err);
    })
  }
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
    },
    { 
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
    <Wrapper>
      <MealWrapper>
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
      </MealWrapper>

      <ChildForm>
        <h2>Create a child here.</h2>
          <Input 
            placeholder = "Add Child..."
            type = "text"
            value = {this.state.addChild}
            name = "addChild"
            onChange = {this.handleChanges}/>

          <Button onClick = {this.addChild}> Add Child </Button>

        <h2>Create a Meal Entry here.</h2>

          <label>
              <Select name = "fullName" value={this.state.fullName} onChange={this.handleChanges}>
                  <option value ="" disabled selected hidden>Select Child...</option>
                    {this.state.children.map((child, index) => {
                    return <option key = {index} value = {child.fullName}> {child.fullName} </option>
                  })}
              </Select>
          </label>

          <label>
              <Select name = "mealTime" value={this.state.mealTime} onChange={this.handleChanges}>
                  <option value ="" disabled selected hidden>Select Meal...</option>
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
          placeholder = "Foodname..."
          type = "text"
          value = {this.state.foodName}
          name = "foodName"
          onChange = {this.handleChanges}/>

          <Button onClick = {this.postEntry}> Add Meal </Button>

     
      </ChildForm>
    </Wrapper>

    );
  }
}