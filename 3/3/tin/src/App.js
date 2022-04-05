import './App.css';
import React, {useState} from "react"
import Students from './Pages/Students';
import CreateNotice from './Pages/CreateNotice';
import SearchForGroup from './Pages/SearchForGroup';
import AddGroup from './Pages/AddGroup';
import Send from './Pages/Send';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import data from "./mock-data.json";
import data2 from "./mock_data_groups.json";

function App() {

  const [students, setStudents] = useState(data);
  const [groups, setGroups] = useState(data2);

  return(
    <div className="App">
    <h1>Hello to TIN</h1>
    <a href='/'>Przeglądaj studentów </a>
    <span onClick={showHideAddingNotice}>Stwórz ogłoszenie</span>
    <a href='/search'>Szukaj grupy </a>
    <span onClick={showHideAddingGroup}>Dodaj Grupe</span>
    <Router>
      <Routes>
        <Route path="/" element={<Students students={students} setStudents={setStudents}/>}/>
        <Route path="/create" element={<CreateNotice students={students} setStudents={setStudents}/>}/>
        <Route path="/search" element={<SearchForGroup groups={groups} setGroups={setGroups}/>}/>
        <Route path="/add" element={<AddGroup groups={groups} setGroups={setGroups}/>}/>
        <Route path="/send" element={<Send/>}/>
      </Routes>
    </Router>
    </div>
  ); 

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
