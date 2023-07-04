import React from 'react'
import Navbar from '../Navbar'

const Salesdashboard = () => {
  return (
    <div className="container">
      <Navbar/>
        <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                   <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    {/* sidebar */}
                    <div class="accordion accordion-flush"id="accordionFlushExample">
     <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Customers</button>
    </h2>
    
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body"><a href="/newitem">Register New Customer</a></div>
      <div class="accordion-body"><a href="/displayitems">Display All Customers</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Sales Orders</button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newitemgroup'>New Sales Order</a></div>
      <div class="accordion-body"><a href='/viewitemgroup'>Track Orders</a></div>
      <div class="accordion-body"><a href='/viewitemgroup'>Display Orders</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Packages
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>New Packages</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display Packages</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Delivery challans
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>Add delivery Challans</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display delivery Challans</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseThree">
      Invoices
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>New Invoice</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display Invoice</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseThree">
      Payments Received
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>New Payments Received</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display Payments Received</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseThree">
      Sales Returns
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>Add Sales Returns</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display Sales Returns</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseThree">
      Credit Notes
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>Add Credit Notes</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display Adjustments</a></div>
    </div>
  </div>
                    </div>
                    {/* sidebar */}
                    </div>
                    <div className="col col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <h4 className='dashhead'><a href="/">Sales Dashboard</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Salesdashboard