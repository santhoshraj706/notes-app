import axios from 'axios'

export const getNotes=async()=>{
  const token=localStorage.getItem('token')
  const response=await axios.get('http://localhost:5000/notes',{
    headers:{
      Authorization:'Bearer '+token
    }
  })
  return response.data
}
export const createNote=async(title,content)=>{
  const token=localStorage.getItem('token')
  const response=await axios.post('http://localhost:5000/notes',{title:title,content:content},{
    headers:{
      Authorization:'Bearer '+token
    }
  })
  return response.data
}

export const deleteNote=async(id)=>{
  const token=localStorage.getItem('token')
  const response=await axios.delete(`http://localhost:5000/notes/${id}`,{
    headers:{
      Authorization:'Bearer '+token
    }
  })
  return response.data
}

export const updateNote=async(id,title,content)=>{
  const token=localStorage.getItem('token')
  const response=await axios.put(`http://localhost:5000/notes/${id}`,{title:title,content:content},{
    headers:{
      Authorization:'Bearer '+token
    }
  })
  return response.data
}