import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

const Displayitems = () => {
  
  const[item,setItem]=useState([])
   useEffect(()=>{
    listitem()
    },[]
  )

  const listitem =()=>{
    const userData={
      itemname:"",
      unit:"",
      manufacturer:"",
      sellingprice:"",
      openingstock:""
     }
  axios.get("http://localhost:3001/displayitems",userData)
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
      <th scope="col">Item Name</th>
      <th scope="col">Unit</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Selling Price</th>
      <th scope="col">Opening Stock</th>
    </tr>
  </thead>
  <tbody>
    {Object.values(item).map((value,index)=>(
      <tr key={item._id}>
      <td>{value.itemname}</td>
      <td>{value.unit}</td>
      <td>{value.manufacturer}</td>
      <td>{value.sellingprice}</td>
      <td>{value.openingstock}</td>
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

export default Displayitems