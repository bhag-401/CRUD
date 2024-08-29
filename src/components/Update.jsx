import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Update = () => {
    const[id,setId]=useState(0)
    const[name,setName]= useState("")
   const[email,setEmail]= useState("")
   const Navigate=useNavigate()
   useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
   },[])
   let handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://66d074d6181d059277deac7e.mockapi.io/crud-bhag/${id}`,{
        name:name,
        email:email
    })
    .then(()=>{
        Navigate("/read")
    })
   }
  return (
    <>
    <h1>Update Operation</h1>
        
        <form>

      <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>

  </div>
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
 <Link to="/read"><button type="submit" className="btn btn-secondary" style={{marginLeft:10}}>Back</button></Link> 
</form>
    </>
  )
}

export default Update
