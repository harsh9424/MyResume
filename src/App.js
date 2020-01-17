import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import { store } from './store'
import Form from './Components/Form';
import  Mark  from './Components/Mark';
import Navigation from './Components/Navigation';
import Content from './Components/Content';

function App() {
  return ( 
    <div className="App" data-spy="scroll" data-target=".side-navigation" data-offset="5000">
      <Provider store={store}>
      <div className="side-navigation">
        <Navigation />
      </div>
      
      <div className="page-content">
        <Content />
      </div>
        
      </Provider>
    </div>
  );
}

export default App;
