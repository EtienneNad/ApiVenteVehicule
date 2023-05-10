import './App.css';
import React from 'react';
import Tableau from "./component/Tableau";

class App extends React.Component {
  render(){
    const vehicules = [];

    return ( 
      <div className='App'>
          
          <Tableau titre={"Liste de vehicule"} vehicules={vehicules}/>
          
      </div>
      
      
      
    );
  }
} 

export default (App);