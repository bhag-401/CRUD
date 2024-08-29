import React, { useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Read = () => {
  const[data,setData]=useState([]);
  const[tabledark,setTableDark]=useState('')
  function getdata(){
    axios.get(
        'https://66d074d6181d059277deac7e.mockapi.io/crud-bhag')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
            
        })
    
  }
  function handledelete(id){
    axios.delete(
      `https://66d074d6181d059277deac7e.mockapi.io/crud-bhag/${id}`
    ).then(()=>{
      getdata()
    })

  }
  function setToLocalStorage(id,name,email){
      localStorage.setItem("id",id)
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
  }
  useEffect(() => {
   getdata();
  }, [])
  
  

  return (
    <>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{
    if(tabledark==='table-dark')setTableDark("")
      else setTableDark("table-dark")
    
  }}/>
</div>
      <div  className='d-flex justify-content-between'>
    <h1>Read a Form</h1>
    <Link to="/"><button type="submit" className="btn btn-secondary" style={{marginLeft:10}}>Create</button></Link>
    </div>
      <table className={`table ${tabledark}`}>
  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>

  { data.map((eachData)=>{
      return(
        <>
          <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td><Link to="/update"><button className='btn-success'onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit{" "}</button></Link></td>
      <td><button className='btn-danger'onClick={()=>handledelete(eachData.id)}>Delete{" "}</button></td>
    </tr>
  </tbody>
        </>
      )
    })
    
}
</table>
    </>
  )
}

export default Read
