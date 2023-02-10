import React, {useEffect, useState} from 'react'
import '../styles/App.css';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      classStyle: "redColor"
    }
  }
  changeClassStyle=()=>{
    if(this.state.classStyle === "redColor")
    this.setState({classStyle:"bluecolor"})
    else 
    this.setState({classStyle:"redColor"})
  }


  render(){
    return <div id="main">
      <p className={this.state.classStyle}>Newton School</p>
      <button id='button' onClick={this.changeClassStyle}>Change Style</button>
    </div>
  
  }
}  



export default App;
