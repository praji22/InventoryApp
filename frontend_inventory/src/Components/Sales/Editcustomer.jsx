import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Editcustomer = () => {
    const [data, setData]= useState({
      customername:"",
      company:"",
      email:"",
      phone:""
     })

     const navigate = useNavigate()

     const inputHandler =(event)=>{
      const {name,value}=event.target
      setData(
         (previousState)=>({
         ...previousState,
         [name]:value
      })
      )
   }

      const readValues =(e)=>{
         console.log(data)
         e.preventDefault();
         axios.post("http://localhost:3001/editcustomer",data)
         .then(
            (response)=>{
               console.log(response.data)
               setData({
                  customername:"",
                  company:"",
                  email:"",
                  phone:""
               })
               alert("Customer Details Updated Successfully")
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
          <h2 className='subhead'>Edit CustomerRegister here</h2>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="itemname" className="form-label">Customer Name</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter customer name'
             onChange={inputHandler}
             value={data.customername}
             name='customername'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="unit" className="form-label">Company</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter company'
             onChange={inputHandler}
             value={data.company}
             name='company' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="dimensions" className="form-label">E-Mail</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter email'
             onChange={inputHandler}
             value={data.email}
             name='email' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="weight" className="form-label">Phone</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter phone'
             onChange={inputHandler}
             value={data.phone}
             name='phone' />
          </div>
          
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
             <button className="btn btn-info" onClick={readValues}>Update</button>
          </div>
          
          </div>
          </div>
        </div>
   </div>
   </div>
  )
}

export default Editcustomer