import React, { useContext, useState } from 'react';
import noteContext from '../Context/notes/noteContext';


const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""})
    const handleClick = (e)=>{
        e.preventDefault();
            addNote(note.title, note.description, note.tag);
            setNote({title:"", description:"", tag:""});
            props.showAlert("Note added Successfully", "success")
    }
    const onChange = (e)=> {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className='container my-3'>
       <h1>Add a note</h1>

      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title *</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label className="form-lable" htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description *</label>
    <textarea className="form-control" id="description" name='description' value={note.description} onChange={onChange} rows={3}/>
  </div>
  <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick} >Add Note</button>
</form>
    </div>
  )
}

export default AddNote
