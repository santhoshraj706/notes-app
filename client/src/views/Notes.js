import {useState,useEffect} from 'react'
import {getNotes,createNote,deleteNote,updateNote} from '../controllers/noteController'
function Notes(){
  const [notes,setNotes]=useState([])
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [editId,setEditId]=useState(null)
  const [editTitle,setEditTitle]=useState('')
  const [editContent,setEditContent]=useState('')
  useEffect(()=>{
    fetchNotes()
  },[])
  const fetchNotes=async()=>{
    const data=await getNotes()
    setNotes(data.notes)
  }
  const handleCreate=async()=>{
    await createNote(title,content)
    fetchNotes()
  }
  const handleDelete=async(id)=>{
    await deleteNote(id)
    fetchNotes()
  }
  const handleEditClick=(note)=>{
    setEditId(note._id)
    setEditTitle(note.title)
    setEditContent(note.content)
  }
  const handleUpdate=async(id)=>{
    await updateNote(id,editTitle,editContent)
    setEditId(null)
    fetchNotes()
  }
  return(
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Notes</h2>
      <div className="card p-4 shadow mb-5">
        <input className="form-control mb-3" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
        <input className="form-control mb-3" placeholder="Content" onChange={(e)=>setContent(e.target.value)}/>
        <button className="btn btn-primary w-100" onClick={handleCreate}>Add Note</button>
      </div>
      <div className="row">
        {notes.map((note)=>(
          <div className="col-md-4 mb-4" key={note._id}>
            <div className="card p-3 shadow">
              {editId===note._id ? (
                <>
                  <input className="form-control mb-2" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
                  <input className="form-control mb-2" value={editContent} onChange={(e)=>setEditContent(e.target.value)}/>
                  <button className="btn btn-success btn-sm mb-2" onClick={()=>handleUpdate(note._id)}>Save</button>
                  <button className="btn btn-secondary btn-sm" onClick={()=>setEditId(null)}>Cancel</button>
                </>
              ):(
                <>
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.content}</p>
                  <button className="btn btn-warning btn-sm mb-2" onClick={()=>handleEditClick(note)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(note._id)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Notes