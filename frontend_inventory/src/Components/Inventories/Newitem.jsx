import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Newitem = () => {
   const [data, setData]= useState({
      itemname:"",
      unit:"",
      dimensions:"",
      weight:"",
      manufacturer:"",
      brand:"",
      sellingprice:"",
      costprice:"",
      description:"",
      openingstock:"",
      reorderpoint:"",
      preferedvendor:"",
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
      axios.post("http://localhost:3001/additems",data)
      .then(
         (response)=>{
            console.log(response.data)
            setData({
                  itemname:"",
                  unit:"",
                  dimensions:"",
                  weight:"",
                  manufacturer:"",
                  brand:"",
                  sellingprice:"",
                  costprice:"",
                  description:"",
                  openingstock:"",
                  reorderpoint:"",
                  preferedvendor:""
            })
            alert("Item Added Successfully")
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
          <h2 className='subhead'>Create New Item</h2>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="itemname" className="form-label">Item Name</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Item name'
             onChange={inputHandler}
             value={data.itemname}
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
             <label htmlFor="dimensions" className="form-label">Dimensions</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter dimension'
             onChange={inputHandler}
             value={data.dimensions}
             name='dimensions' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="weight" className="form-label">Weight</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter weight'
             onChange={inputHandler}
             value={data.weight}
             name='weight' />
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
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="brand" className="form-label">Brand</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Brand'
             onChange={inputHandler}
             value={data.brand}
             name='brand' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="sellingprice" className="form-label">Selling Price</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter SellingPrice'
             onChange={inputHandler}
             value={data.sellingprice}
             name='sellingprice'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="costprice" className="form-label">Cost Price</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter costprice'
             onChange={inputHandler}
             value={data.costprice}
             name='costprice' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
             <label htmlFor="description" className="form-label">Description</label>
             <textarea className="form-control" 
             aria-label="With textarea"
             placeholder='Write Description'
             onChange={inputHandler}
             value={data.description}
             name='description'>
             </textarea>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="openingstock" className="form-label">Opening stock</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Opening stock'
             onChange={inputHandler}
             value={data.openingstock}
             name='openingstock' />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="reorderpoint" className="form-label">Reorder Point</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter Reorder point'
             onChange={inputHandler}
             value={data.reorderpoint}
             name='reorderpoint'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
             <label htmlFor="reorderpoint" className="form-label">Preffered Vendor</label>
             <input type="text" 
             className="form-control"
             placeholder='Enter preferedvendor'
             onChange={inputHandler}
             value={data.preferedvendor}
             name='preferedvendor'/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="image" className="form-label">Upload Image</label>
          <input type='file'></input>
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

export default Newitem