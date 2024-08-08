
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './componenet/Navbarfolder/Navbar';
import Home from './componenet/Layout/Home';
import Repage from './componenet/REmodule/Repage';
import Login from './componenet/Loginfolder/Login';
import Reenqueryform from './componenet/REmodule/Reenqueryform';
import RElist from './componenet/REmodule/RElist';
import REUpdate from './componenet/REmodule/REUpdate';
import REDelete from './componenet/REmodule/REDelete';
import Oepage from './componenet/OEmodule/Oepage';
import OEList from './componenet/OEmodule/OEList';
import Cibil from './componenet/OEmodule/Cibil';
import CibilStatus from './componenet/REmodule/CibilStatus';
import RELogout from './componenet/REmodule/RELogout';
import CMpage from './componenet/CMmodule/CMpage';
import Registration from './componenet/REmodule/Registration';
import OELogout from './componenet/OEmodule/OELogout';
import CMList from './componenet/CMmodule/CMList';
import CMLogout from './componenet/CMmodule/CMLogout';
import CibilDelete from './componenet/REmodule/CibilDelete';
import CMUpdate from './componenet/CMmodule/CMUpdate';
import Component from './componenet/Layout/Component';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/login' element={<Login />} />

          {/* re module */}
          <Route path='/repage' element={<Repage />} />
          <Route path='/reenqueryform' element={<Reenqueryform />} />
          <Route path='/relist' element={<RElist />} />
          <Route path='/reupdate/:regId' element={<REUpdate />} />
          <Route path='/redelete/:regId' element={<REDelete />} />
          <Route path='/relogout' element={<RELogout />} />

          {/* oe module */}
          <Route path='/oepage' element={<Oepage />} />
          <Route path='/oelist' element={<OEList />} />
          <Route path='/oelogout' element={<OELogout />} />

          {/* Cibil  */}
          <Route path='/cibil' element={<Cibil />} />
          <Route path='/cibilstatus' element={<CibilStatus />} />
          <Route path='/cibildelete/:cibilId' element={<CibilDelete />} />


          {/* CM module */}
          <Route path='/cmpage' element={<CMpage/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/cmlist' element={<CMList/>}/>
          <Route path='/cmlogout' element={<CMLogout/>}/>
          <Route path='/cmupdate' element={<CMUpdate/>}/>
          <Route path='/comp' element={<Component/>}/>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
