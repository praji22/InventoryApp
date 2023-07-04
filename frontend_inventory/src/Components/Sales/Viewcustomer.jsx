import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Viewcustomer = () => {
    const[customer,setCustomer]=useState([])
    useEffect(()=>{
     Viewlist()
     },[]
   )

   const Viewlist =()=>{
    const userData={
        customername:"",
        company:"",
        email:"",
        phone:""
     }
  axios.get("http://localhost:3001/viewcustomers",userData)
  .then(
    (response)=>{
      console.log(response.data)
      setCustomer(response.data)
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
      <th scope="col">Customer Name</th>
      <th scope="col">Company</th>
      <th scope="col">E mail</th>
      <th scope="col">Phone</th>
     </tr>
  </thead>
  <tbody>
    {Object.values(customer).map((value,index)=>(
      <tr key={customer._id}>
      <td>{value.customername}</td>
      <td>{value.company}</td>
      <td>{value.email}</td>
      <td>{value.phone}</td>
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

export default Viewcustomer