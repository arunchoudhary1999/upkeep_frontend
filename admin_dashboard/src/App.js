import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './component/layout/NavBar';
import { Repair } from './component/pages/Repair';
import { Tenant } from './component/pages/Tenant';
import { LandLoard } from './component/pages/LandLoard';
import { Property } from './component/pages/Property';
import { NotFound } from './component/pages/NotFound';
import { AddUser } from './component/users/AddUser';
import { EditUser } from './component/users/EditUser';
import { User } from './component/users/User';
import { AddUser01 } from './component/user01/AddUser01';
import { EditUser01 } from './component/user01/EditUser01';
import { User01 } from './component/user01/User01';
import { AddUser02 } from './component/user02/AddUser02';
import { EditUser02 } from './component/user02/EditUser02';
import { User02 } from './component/user02/User02';
import { AddUser03 } from './component/user03/AddUser03';
import { EditUser03 } from './component/user03/EditUser03';
import { User03 } from './component/user03/User03';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<LandLoard />}></Route>
          <Route exact path='/landloard' element={<LandLoard />}></Route>
          <Route exact path='/repair' element={<Repair />}></Route>
          <Route exact path='/tenant' element={<Tenant />}></Route>
          <Route exact path='/property' element={<Property />}></Route>
          <Route exact path='*' element={<NotFound />}></Route>

          {/* Landlord */}
          <Route exact path='/user/add' element={<AddUser />}></Route>
          <Route exact path='/user/edit/:id/' element={<EditUser />}></Route>
          <Route exact path='/user/:id/' element={<User />}></Route>

          {/* Repair */}
          <Route exact path='/user01/add' element={<AddUser01 />}></Route>
          <Route exact path='/user01/edit/:id/' element={<EditUser01 />}></Route>
          <Route exact path='/user01/:id/' element={<User01 />}></Route>

          {/* Tenant */}
          <Route exact path='/user02/add' element={<AddUser02 />}></Route>
          <Route exact path='/user02/edit/:id/' element={<EditUser02 />}></Route>
          <Route exact path='/user02/:id/' element={<User02 />}></Route>

          {/* Property */}
          <Route exact path='/user03/add' element={<AddUser03 />}></Route>
          <Route exact path='/user03/edit/:id/' element={<EditUser03 />}></Route>
          <Route exact path='/user03/:id/' element={<User03 />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
