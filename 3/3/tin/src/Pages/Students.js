import '../App.css';
import React, {useState} from "react";
import CreateNotice from '../Pages/CreateNotice';

const Students = (props) =>{

  const {setStudents, students} = props;

    const [searchTerm, setSearchDescription] = useState('');

    const pictureUrl = "https://picsum.photos/70/100";

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
              <a href="/student">
            <div class="student" className="student" key={key}>
              <img
                src = {pictureUrl}
              />
               <p>{val.name}</p><p>{val.description}</p><p>{val.tag}</p><p>{val.subject}</p> 
               </div>
               </a>
            );
          })}
      </div>
    );
}

export default Students;