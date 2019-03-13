import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';

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
        transform: scale(1.1, .8)
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
    
      axios
        .post(`${url}/api/app`, {
            parentId: 4,
            date: date
        },{ 
            headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Impha2UiLCJpYXQiOjE1NTI1MDI2MTUsImV4cCI6MTU1MjUzMTQxNX0.GT6vLylWS00vhS7JYmC7Fr61KdlHjhvMUDCe0mfw7MA'
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
    
//   fetchDate = date => {
//     axios
//       .get(`${url}/${date}`)
//       .then(response => {
//         this.setState(() => ({ day: response.data }));
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    })
}

  postEntry = (event) => {
      event.preventDefault();

    axios  
    .post(`${url}/api/app`, {
        mealtime: this.state.mealtime,
        serving: this.state.serving,
        food: this.state.food
    })

    .then(res => {
        console.log('Its working', res);
        this.setState({
            entry: [...this.state.entry, res.data]
        })
    })

    .catch( error => console.log('OH NO', error));

    this.setState({
        mealtime: '',
        serving: '',
        food: '',
  })
}
  

  render() {
    if (!this.state.day) {
      return <h1>Loading dietary information...</h1>;
    }

    return (
        <>
      <Button onClick = {(event, date) => {this.postEntry(event,date)}}> Clicka Me </Button>
      <Form>
          <Input 
            placeholder = "mealtime..."
            type = "text"
            value = {this.state.mealtime}
            name = "mealtime"
            onChange = {this.handleChanges}/>

          <Input  
            placeholder = "serving..."
            type = "number"
            value = {this.state.serving}
            name = "serving"
            onChange = {this.handleChanges}/>

          <Input 
           placeholder = "food..."
           type = "text"
           value = {this.state.food}
           name = "food"
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
