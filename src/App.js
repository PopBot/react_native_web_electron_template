import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-native-web';
import {Text} from 'react-native';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>Hello World</code> and save to reload.
          </p>
            <Text>Hello World</Text>
          <Button title={"Test button"} onPress={() => { console.log("Hello world");}} />
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
