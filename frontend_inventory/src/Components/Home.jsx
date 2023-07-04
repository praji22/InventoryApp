import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <Navbar/>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        {/* module1 */}
                       <div className="card" style={{width:"20rem"}}>
                        <div className="card-body">
                        <h5 className="card-title"><a href='/inventory'>Inventory</a> </h5>
                        </div>
                         <ul className="list-group list-group-flush">
                           <li className="list-group-item"><a href='/displayitems'>Items</a></li>
                           <li className="list-group-item"><a href='/viewitemgroup'>Item groups</a></li>
                           <li className="list-group-item"><a href='/newinventoryadjust'>Inventory Adjustments</a> </li>
                        </ul>
                        <div className="card-body">
                            <a href="/newitem" className="card-link">Add New Item</a>
                            <a href="/newitemgroup" className="card-link">Add Item Groups</a>
                            </div>
                        </div>
                        {/* module1 */}
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        {/* module2 */}
                       <div className="card" style={{width:"20rem"}}>
                        <div className="card-body">
                        <h5 className="card-title"><a href='/sales'>Sales</a></h5>
                        </div>
                         <ul className="list-group list-group-flush">
                           <li className="list-group-item"><a href='/viewcustomer'>Customers</a></li>
                           <li className="list-group-item"><a href='/newsalesorder'>Sales Orders</a></li>
                           <li className="list-group-item">Packages</li>
                        </ul>
                        <div className="card-body">
                            <a href="/addcustomer" className="card-link">New Customer</a>
                            <a href="/newsalesorder" className="card-link">New Sales Orders</a>
                            </div>
                        </div>
                        {/* module2 */}
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        {/* module3 */}
                       <div className="card" style={{width:"20rem"}}>
                        <div className="card-body">
                        <h5 className="card-title"><a href='/purchase'> Purchases</a></h5>
                        </div>
                         <ul className="list-group list-group-flush">
                           <li className="list-group-item">Vendors</li>
                           <li className="list-group-item">Purchase Orders</li>
                           <li className="list-group-item">Bills & Payments</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">New Vendor</a>
                            <a href="#" className="card-link">New Purchase Order</a>
                            </div>
                        </div>
                        {/* module3 */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home