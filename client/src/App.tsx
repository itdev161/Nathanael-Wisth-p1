import React from 'react';
import './App.css';
import './InputForm.css';
import axios from 'axios';

class  App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Project 1
          <p id="author">Nathanael Wisth</p>
        </header>
        <InputForm />
      </div>
    );
  }
}

class InputForm extends React.Component {
  render(){
    return(
      <form className="InputForm" action="http://localhost:5000/api/users" method="post" encType="text/plain">
        <input type="text" placeholder="username" id="username" name="username"></input>
        <input type="text" placeholder="email" id="email" name="email"></input>
        <input type="password" placeholder="password" id="password" name="password"></input>
        <input type="submit" value="Submit" id="submit"/>
      </form>
    );
  }
}

export default App;
