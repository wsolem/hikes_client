import React, {Component} from 'react';
// import logo from './logo.svg' ;
import Hikes from './hikes';
import AddHike from './addHike';
import LoginButton from './loginButton';
import './App.css';

// function App() {
//   return (
//     // the tutorial I am using - https://pusher.com/tutorials/consume-restful-api-react 
//     // has bootstrap wich isn't a bad idea
//   );
// }

class App extends Component {
  state = {
    hikes: [],
    todoHikes: []
  }
  render() {
    const {hikes, todoHikes} = this.state;
    return (
      <div className="pageWrapper">
        <LoginButton />
        <h1>Welcome to My Hiking Wallet</h1>
        <Hikes id="allHikes" hikes={hikes} type="all" />
        <Hikes id="todoHikes" hikes={todoHikes} type="Todo" />
        <AddHike />
      </div>
    )
  }
  // I want to put this somewhere else
  componentDidMount() {
    // update to use Promise.all and fetch both hikes and user
    fetch('http://localhost:8080/api/hikes')
    .then(res => res.json())
    .then((data) => {
      this.setState({hikes: data})
      // map to get todo hikes
    })
    .catch(console.log);
  }
}

export default App;
