import React from 'react'
import Navbar from '../Navbar'

const Itemdashboard = () => {
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
      Items</button>
    </h2>
    
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body"><a href="/newitem">New Item</a></div>
      <div class="accordion-body"><a href="/displayitems">Display Items</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Item Groups</button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newitemgroup'>New Item group</a></div>
      <div class="accordion-body"><a href='/viewitemgroup'>Display Item Groups</a></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Inventory adjustments
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a href='/newinventoryadjust'>New Adjustments</a></div>
      <div class="accordion-body"><a href='/viewadjust'>Display Adjustments</a></div>
    </div>
  </div>
                    </div>
                    {/* sidebar */}
                    </div>
                    <div className="col col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                     <h4 className='dashhead'><a href="/">Inventory Dashboard</a></h4> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Itemdashboard