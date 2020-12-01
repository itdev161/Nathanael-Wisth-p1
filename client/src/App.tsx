import React from 'react';
import './App.css';
import './InputForm.css';
import axios from 'axios';
import InputForm from './InputForm';
import Resume from './Resume';
import StyleCustomizer from './StyleCustomizer';
import BFInterpreter from './BFInterpreter';
import GitList from './GitList';

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
        <div className="desktop">
          <div className="column">
            <Resume />
          </div>
          <div className="column">
            <header className="App-header">
            NateGonePro
            </header>
            <InputForm />
            <GitList />
          </div>
          <div className="column">
            <StyleCustomizer />
            <BFInterpreter />
          </div>
        </div>
        <div className="mobile">
          <header className="App-header">
            NateGonePro
          </header>
          <InputForm />
          <Resume />
          <GitList />
          <BFInterpreter />
          <StyleCustomizer />
        </div>
      </div>
    );
  }
}

export default App;
