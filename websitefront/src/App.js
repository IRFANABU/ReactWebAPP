
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routers, Routes, Route ,Switch} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';
function App() {
  return (
    // fragment using in react <>  </> multiple tag
    <>
    <Routers>
  
    <Routes>
             {/* { Login and Sign up page} */}
  
    <Route path='/login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='home' element={<><Navbar/><Home Children="its our home page"/> <Footer/></>}/>
    <Route path='about' element={<><Navbar/><About/><Footer/></>}/>
    <Route path='contact' element={<><Navbar/><Contact/><Footer/></>}/>
   
    </Routes>
   
    </Routers>

    </>
   
  );
}

export default App;
