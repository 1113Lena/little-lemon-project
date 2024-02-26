import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Menu from "./pages/Menu";
import Login  from './pages/Login'
import PageNotFound from "./pages/PageNotFound";
import Booking from "./components/Booking";
import ConfirmBooking from "./components/ConfirmBooking";
import Reserve from "./components/Reserve";




function App() {




  return (
    <>
   
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            
            <Route path="/booking" element={<Booking />}/>
            <Route path="/confirmed" element={<ConfirmBooking />}/>
          </Route>
          
          
          <Route path="menu" element={<Menu />}/>
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<PageNotFound />} />
          <Route path="about" element={<About />}/>
        
         
            
         
        </Routes>
      </BrowserRouter>


      
    </>
  );
}

export default App;
