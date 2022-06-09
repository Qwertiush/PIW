import './App.css';
import React, {useReducer, useState} from "react"
import Students from './Pages/Students';
import CreateNotice from './Pages/CreateNotice';
import SearchForGroup from './Pages/SearchForGroup';
import AddGroup from './Pages/AddGroup';
import Send from './Pages/Send';
import Student from './Pages/Student';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useEffect } from 'react';
import LogInPage from './Pages/LoginPage2';
import { useContext } from 'react';
import NameContext from './NameContext';
import { logout } from './firebase/users';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firebase/init'

function App() {
  const [loggedUser, setUser] = useContext(NameContext);

  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  const [user] = useAuthState(auth);

  const getStudentsData=()=>{
    fetch('studentsData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setStudents(myJson);
      });
  }
      useEffect(()=>{
      getStudentsData()
  },[])

  const getGroupsData=()=>{
    fetch('groupsData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setGroups(myJson);
      });
  }
      useEffect(()=>{
      getGroupsData()
  },[])

  return(
    <div className="App">
      <NameContext.Provider value={useState("")}>
    <h1>Hello to TIN </h1>
    <a href='/'>Przeglądaj studentów </a>
    <span onClick={showHideAddingNotice}>Stwórz ogłoszenie</span>
    <a href='/search'>Szukaj grupy </a>
    <span onClick={showHideAddingGroup}>Dodaj Grupe</span>
    <a href='/login'>Zaloguj </a>
    {user && <button onClick={() => {
        console.log("Local storage - user logged in: " + localStorage.getItem('loggedUser'));
        localStorage.setItem('loggedUser', null);
        console.log("Local storage - user loged out: " + localStorage.getItem('loggedUser'));
        logout();
    }}>Wyloguj {user.displayName}</button>}
    <Router>
      <Routes>
        <Route path="/" element={<Students students={students} setStudents={setStudents}/>}/>
        <Route path="/create" element={<CreateNotice students={students} setStudents={setStudents}/>}/>
        <Route path="/search" element={<SearchForGroup groups={groups} setGroups={setGroups}/>}/>
        <Route path="/add" element={<AddGroup groups={groups} setGroups={setGroups}/>}/>
        <Route path="/send" element={<Send/>}/>
        <Route path="/student" element={<Student/>}/> 
        <Route path="/login" element={<LogInPage students={students} setStudents={setStudents}/>}/>
      </Routes>
    </Router>
    </NameContext.Provider>
    </div>
  ); 
//Log{user.displayName}
}
function showHideAddingNotice(){
  var x = document.getElementById("createNotice");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function showHideAddingGroup(){
  var x = document.getElementById("addGroup");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default App;
