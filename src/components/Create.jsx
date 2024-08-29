import React, { useState } from 'react'
import style from "./Create.module.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Create = () => {
   const[name,setName]= useState("")
   const[email,setEmail]= useState("")
   const history=useNavigate()
   const header={"Access-Control-Allow-Origin":"*"}
  let handle=(e)=>{
    e.preventDefault();
    console.log('clicked');
    
     axios.post(
        'https://66d074d6181d059277deac7e.mockapi.io/crud-bhag',
        {name:name,email:email,header}
     )
.then(()=>{
    history('/read')
})
   }
  return (
    <>
      <div className='d-flex justify-content-between'>
      <h1>Create a Form</h1> 
      <Link to="/read"><button className='btn btn-primary'>Show Data</button> </Link>
      
      </div>
      <form>
      
      <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>

  </div>
  <button type="submit" className="btn btn-primary" onClick={handle}>Submit</button>
  <Link></Link>
  <button type="submit" className="btn btn-secondary" style={{marginLeft:10}}>Back</button>
</form>
    </>
  )
}

export default Create
