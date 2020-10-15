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
  constructor(props){
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      response: "RESPONSE:"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    this.setState({...this.state, [event.target.name]: value});
  }

  handleSubmit(event){
    event.preventDefault();

    axios.post('http://localhost:5000/api/users', {name: this.state.username, email: this.state.email, password: this.state.password})
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({...this.state, response: `RESPONSE:\nSuccessfully POSTED:\nusername: ${res.data.name}\nemail: ${res.data.email}\npassword: ${res.data.password}`});
      })
      .catch(error => {
        console.log(error.response.data);
        let errOutput = "RESPONSE:\nPOST failed, returned errors:\n";
        for(let i=0; i<error.response.data.errors.length; i++){
          errOutput += "\"" + error.response.data.errors[i].msg + "\"\n";
        }
        this.setState({...this.state, response: errOutput});
      });
  }
  
  render(){
    return(
      <div>
        <form className="InputForm" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="username" id="username" name="username"></input>
          <input type="text" value={this.state.email} onChange={this.handleChange} placeholder="email" id="email" name="email"></input>
          <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="password" id="password" name="password" ></input>
          <input type="submit" value="Submit" id="submit"/>
        </form>
        <p id="response">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
