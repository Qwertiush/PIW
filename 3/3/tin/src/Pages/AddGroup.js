import { useState } from "react";
import {nanoid} from "nanoid";

const AddGroup = (props) =>{
    const {setGroups, groups} = props;

    const [addFormData,setAddFormData] = useState({
        name: '',
        people: '',
        description: '',
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

        const newGroup = {
            id: nanoid(),
            name: addFormData.name,
            people: addFormData.people,
            description: addFormData.description,
            subject: addFormData.subject
        }

        const newGroups = [...groups, newGroup]
        setGroups(newGroups);
    }

    return(
        <div id="addGroup">
        <p>Dodaj grupę</p>
        <form onSubmit={handleAddFormSubmit}>
            <input class="input" type="text" name="name" required="required" placeholder="Wpisz imie" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="people" required="required" placeholder="Wpisz ludzi" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="description" required="required" placeholder="Wpisz opis" onChange={handleAddFormChange}/>
            <input class="input" type="text" name="subject" required="required" placeholder="Wpisz przedmioty" onChange={handleAddFormChange}/>
            <button type="submit">Dodaj</button>
        </form>
        </div>
    );
}

export default AddGroup;