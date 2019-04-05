import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Story from './components/Story';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <div>       
       <Story />
     </div>
     </Provider>
    );
  }
}

export default App;
