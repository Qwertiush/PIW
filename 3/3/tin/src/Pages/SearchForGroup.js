import '../App.css';
import React, {useState} from "react";
import AddGroup from './AddGroup';
import Send from './Send';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class SearchForGroup extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div class="app-container">
          <AddGroup groups={this.props.groups} setGroups={this.props.setGroups}/>
        <p>Szukaj grupy</p>
          {this.props.groups.map((val, key) => {
            return (
              <a href="/send">
            <div class="student" className="student" key={key}>
               <p>{val.name}</p><p>{val.people}</p><p>{val.description}</p><p>{val.subject}</p> 
               </div>
               </a>
            );
          })}
  
      </div>
    );
  }
}

export default SearchForGroup;