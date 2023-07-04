import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Newinventoryadjust = () => {
    const [data, setData]= useState({
        quantity:"",
        refnumber:"",
        date:"",
        reason:"",
        description:"",
        details:""
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
        axios.post("http://localhost:3001/addinventoryadjust",data)
            .then(
               (response)=>{
                  console.log(response.data)
                  setData({
                    quantity:"",
                    refnumber:"",
                    date:"",
                    reason:"",
                    description:"",
                    details:""                  
                  })
                  alert("New Inventory adjustment created")
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
          <h2 className='subhead'>Add new Inventory Adjustment</h2>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="quantity" className="form-label">Quantity</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter quantity'
             onChange={inputHandler}
             value={data.quantity}
             name='quantity'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="refnumber" className="form-label">Reference Number</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter refnumber'
             onChange={inputHandler}
             value={data.refnumber}
             name='refnumber' />
          </div>
           
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="date" className="form-label">Date</label>
             <input type="text" 
             className="form-control" 
             placeholder='Enter date'
             onChange={inputHandler}
             value={data.date}
             name='date'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="reason" className="form-label">Reason for Adjustment</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter reason'
             onChange={inputHandler}
             value={data.reason}
             name='reason'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="unit" className="form-label">Description</label>
             <textarea className="form-control" 
             aria-label="With textarea"
             placeholder='Write Description'
             onChange={inputHandler}
             value={data.description}
             name='description'>
             </textarea>
          </div>
           
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="manufacturer" className="form-label">Details</label>
             <textarea className="form-control" aria-label="With textarea"
             placeholder='Give Details'
             onChange={inputHandler}
             value={data.details}
             name='details'>
             </textarea>
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

export default Newinventoryadjust