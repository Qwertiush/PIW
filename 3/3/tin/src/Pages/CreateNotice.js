import { useState } from "react";
import {nanoid} from "nanoid";
import data from "../mock-data.json"

const CreateNotice = (props) =>{

    const {setStudents, students} = props;

    const [addFormData,setAddFormData] = useState({
        name: '',
        email: '',
        description: '',
        tag: '',
        subject: ''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            id: nanoid(),
            name: addFormData.name,
            email: addFormData.email,
            description: addFormData.description,
            tag: addFormData.tag,
            subject: addFormData.subject
        }
        const jsonString = JSON.stringify(newStudent);
        console.log(jsonString);
        

        const newStudents = [...students, newStudent]
        setStudents(newStudents);
    }

    return(
        <div id="createNotice">
        <p>Stwórz ogłoszenie</p>
        <form onSubmit={handleAddFormSubmit}>
            <input class="input" type="text" name="name" required="required" placeholder="Wpisz imie" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="email" required="required" placeholder="Wpisz e-mail" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="description" required="required" placeholder="Wpisz opis" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="tag" required="required" placeholder="Wpisz tagi" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="subject" required="required" placeholder="Wpisz przedmioty" onChange={handleAddFormChange}/>
            <button type="submit">Dodaj</button>
        </form>
        </div>
    );
}

export default CreateNotice;