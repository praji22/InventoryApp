import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Newsalesorder = () => {
  const [data, setData]= useState({
    customername:"",
    itemname:"",
    unit:"",
    salesorder:"",
    orderdate:"",
    shipmentdate:"",
    payment:""
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
    axios.post("http://localhost:3001/salesorders",data)
    .then(
       (response)=>{
          console.log(response.data)
          setData({
             customername:"",
             itemname:"",
             unit:"",
             salesorderno:"",
             orderdate:"",
             shipmentdate:"",
             payment:""
          })
          alert("New Sales Order added")
          navigate('/')}
        )
    .catch(
       (error)=>{
          console.log(error)
       }
   )
}
const myFunction=()=>{
  window.print();
}

  return (
    <div className="container">
      <Navbar/>
   <div className="row">
   <div className="col col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
          <div className="formbox">               
          <div className="row g-4">
          <h2 className='subhead'>Sales Order</h2>
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
             <label htmlFor="unit" className="form-label">Itemname</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Item name'
             onChange={inputHandler}
             value={data.itemname}
             name='itemname' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="dimensions" className="form-label">Unit</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter units sold'
             onChange={inputHandler}
             value={data.unit}
             name='unit' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="weight" className="form-label">Sales Order No</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Sales Order Number'
             onChange={inputHandler}
             value={data.salesorderno}
             name='salesorderno' />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="weight" className="form-label">Order Date</label>
             <input type="date" 
             className="form-control"
             onChange={inputHandler}
             value={data.orderdate}
             name='orderdate' />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="weight" className="form-label">Shipment Date</label>
             <input type="date" 
             className="form-control"
             onChange={inputHandler}
             value={data.shipmentdate}
             name='shipmentdate' />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="weight" className="form-label">Total Sales</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter total Sales'
             onChange={inputHandler}
             value={data.payment}
             name='payment' />
          </div>
          
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
             <button className="btn btn-primary hidden-print" onClick={myFunction}>Print</button>
             <button className="btn btn-info" onClick={readValues}>Submit</button>
          </div>
          
          </div>
          </div>
        </div>
   </div>
   </div>
  )
}

export default Newsalesorder