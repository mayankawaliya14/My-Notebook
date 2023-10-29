import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';

function NoteItem (props) {
  const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;
  return (
    <div className='col-md-3 my-3'>
      <div className="card" style={{width: "230px"}}>
        <div className="card-body">
        <div className="d-flex align-item-center">
        <h5 className="card-title" style={{width: "130px"}}> {note.title}</h5>
        <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success")}} style={{position: "relative", left: "20px"}}></i>        
        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}} style={{position: "relative", left: "20px"}}></i>
        </div>
        <p className="card-text">{note.description}</p>
        </div>
        </div>
    </div>
  )
}

export default NoteItem
