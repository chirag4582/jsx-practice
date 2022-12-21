import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
  render(){
    return (<div>
      <h1>welcome to gallery</h1>
      <div>
        {this.imageData().map((elt)=>{
          return <img className="image" src={elt.img} alt={elephant}></img>
        })}
      </div>
    </div>)
    
  }
  
  // code here
}
