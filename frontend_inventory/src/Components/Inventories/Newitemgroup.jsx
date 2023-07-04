import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'


const Newitemgroup = () => {
    const [data, setData]= useState({
        itemname:"",
        unit:"",
        manufacturer:""
     })
     const navigate = useNavigate()

     const inputHandler =(event)=>{
        const {name,value}=event.target
        setData(
           (previousState)=>({
           ...previousState,
           [name]:value
        })
        )}

    const readValues =(e)=>{
        console.log(data)
        e.preventDefault();
        axios.post("http://localhost:3001/additemgroups",data)
            .then(
               (response)=>{
                  console.log(response.data)
                  setData({
                        itemname:"",
                        unit:"",
                        manufacturer:""                   
                  })
                  alert("Item Groups Added Successfully")
                  navigate('/')}
                )
            .catch(
               (error)=>{
                  console.log(error)
               }
            )   
        
     }

  return (
   <div className="container">
      <Navbar/>
   <div className="row">
   <div className="col col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
          <div className="formbox">               
          <div className="row g-4">
          <h2 className='subhead'>Create New Item Group</h2>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="itemgroupname" className="form-label">Item Group Name</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Item group name'
             onChange={inputHandler}
             value={data.itemgroupname}
             name='itemname'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="unit" className="form-label">Unit</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter number of Units'
             onChange={inputHandler}
             value={data.unit}
             name='unit' />
          </div>
           
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
             <input type="text" 
             className="form-control" 
             placeholder='Enter manufacturer'
             onChange={inputHandler}
             value={data.manufacturer}
             name='manufacturer'/>
          </div>
         
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
             <button className="btn btn-info" onClick={readValues}>Submit</button>
          </div>
          
          </div>
          </div>
        </div>
   </div>
   </div>
  )
}

export default Newitemgroup