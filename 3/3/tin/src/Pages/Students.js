import '../App.css';
import React, {useState} from "react";
import CreateNotice from '../Pages/CreateNotice';

const Students = (props) =>{

  const {setStudents, students} = props;

    const [searchTerm, setSearchDescription] = useState('');

    return (
      <div class="app-container">
        <CreateNotice students={students} setStudents={setStudents}/>
          <input 
          class="input"
          type="Text" 
          placeholder="Search by descriptions, tags, subjects" 
          onChange={(event) => {
            setSearchDescription(event.target.value);
          }} 
          />
  
          {students.filter((val)=>{
            if(searchTerm == ""){
              return val;
            }else if(val.description.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }else if(val.tag.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }else if(val.subject.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val, key) => {
            return (
            <div class="student" className="student" key={key}>
               <p>{val.name}</p><p>{val.description}</p><p>{val.tag}</p><p>{val.subject}</p> 
               </div>
            );
          })}
      </div>
    );
}

export default Students;