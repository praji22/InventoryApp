import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Itemdashboard from './Components/Dashboards/Itemdashboard';
import Salesdashboard from './Components/Dashboards/Salesdashboard';
import Purchasedashboard from './Components/Dashboards/Purchasedashboard'
import Newitem from './Components/Inventories/Newitem';
import Displayitems from './Components/Inventories/Displayitems';
import Newitemgroup from './Components/Inventories/Newitemgroup';
import Newinventoryadjust from './Components/Inventories/Newinventoryadjust';
import Viewitemgroup from './Components/Inventories/Viewitemgroup';
import Viewadjust from './Components/Inventories/Viewadjust';
import Newcustomer from './Components/Sales/Newcustomer';
import Viewcustomer from './Components/Sales/Viewcustomer';
import Newsalesorder from './Components/Sales/Newsalesorder';
import Tracksalesorder from './Components/Sales/Tracksalesorder';
import Viewsalesorders from './Components/Sales/Viewsalesorders';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route  path='/inventory' exact element={<Itemdashboard/>}/>
      <Route  path='/sales' exact element={<Salesdashboard/>}/>
      <Route  path='/purchase' exact element={<Purchasedashboard/>}/>
      <Route  path='/newitem' exact element={<Newitem/>}/>
      <Route  path='/displayitems' exact element={<Displayitems/>}/>
      <Route  path='/newitemgroup' exact element={<Newitemgroup/>}/>
      <Route  path='/newinventoryadjust' exact element={<Newinventoryadjust/>}/>
      <Route  path='/viewitemgroup' exact element={<Viewitemgroup/>}/>
      <Route  path='/viewadjust' exact element={<Viewadjust/>}/>
      <Route  path='/addcustomer' exact element={<Newcustomer/>}/>
      <Route  path='/viewcustomer' exact element={<Viewcustomer/>}/>
      <Route path='/newsalesorder' exact element={<Newsalesorder/>}/>
      <Route path='/tracksalesorder' exact element={<Tracksalesorder/>}/>
      <Route path='/viewsalesorder' exact element ={<Viewsalesorders/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
