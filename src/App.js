import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Register from './Credentials/Register'
import Login from './Credentials/Login'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ForgotPassword from './Credentials/ForgotPassword';
import Layout from './pages/Products/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './pages/Products/AllProducts';

function App() {
 
 
 return (<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>

{/* this is coming from database  */}

<AllProducts/>








 
 
 </>
  );
}

export default App;
