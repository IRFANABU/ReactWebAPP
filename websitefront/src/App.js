
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Home from './pages/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
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
                    // Login and signup
    <Route path='/' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
   
    <Route path='home' element={<><Navbar/><Home Children="its our home page"/> <Footer/> </>}/>
    <Route path='about' element={<><Navbar/><About/><Footer/></>}/>
    <Route path='contact' element={<><Navbar/><Contact/><Footer/></>}/>
   

    </Routes>
   
    </Routers>

    </>
   
  );
}

export default App;
