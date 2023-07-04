import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

const Viewadjust = () => {

    const[item,setItem]=useState([])
    useEffect(()=>{
    adjustItem()
    },[]
    )

  const adjustItem =()=>{
    const adjustData={
        quantity:"",
        refnumber:"",
        date:"",
        reason:"",
        description:"",
        details:""
     }
  axios.get("http://localhost:3001/viewinventory",adjustData)
  .then(
    (response)=>{
      console.log(response.data)
      setItem(response.data)
    }
  )
  .catch(
    (error)=>{
      console.log("display failed",error)
    }
  )
  }

  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Quantity</th>
      <th scope="col">Reference Number</th>
      <th scope="col">Date</th>
      <th scope="col">Reason</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {Object.values(item).map((value,index)=>(
      <tr key={item._id}>
      <td>{value.quantity}</td>
      <td>{value.refnumber}</td>
      <td>{value.date}</td>
      <td>{value.reason}</td>
      <td>{value.description}</td>
      <td>{value.details}</td>
    </tr>
    )
    )}
    
   </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Viewadjust