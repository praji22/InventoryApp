import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Viewsalesorders = () => {
    const[customer,setCustomer]=useState([])
    useEffect(()=>{
     Viewlist()
     },[]
   )

   const Viewlist =()=>{
    const userData={
        customername:"",
        salesorderno:"",
        orderdate:"",
        shipmentdate:"",
        payment:""
     }
  axios.get("http://localhost:3001/viewsalesorders",userData)
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
      <th scope="col">Order Date</th>
      <th scope="col">Sales Order</th>
      <th scope="col">Shippment Date</th>
      <th scope="col">Order Status</th>
      <th scope="col">Amount</th>
     </tr>
  </thead>
  <tbody>
    {Object.values(customer).map((value,index)=>(
      <tr key={customer._id}>
      <td>{value.customername}</td>
      <td>{value.orderdate}</td>
      <td>{value.salesorderno}</td>
      <td>{value.shipmentdate}</td>
      <td>-</td>
      <td>{value.payment}</td>
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

export default Viewsalesorders