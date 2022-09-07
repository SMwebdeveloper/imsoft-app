import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './pages/footer/Footer';
import YetkazibBerish from "./components/deliver/YetkazibBerish";
import BizHaqimizda from "./components/ourInfo/BizHaqimizda";
import BizningOffis from "./components/ourOffice/BizningOffis";
import CallCenter from "./components/callCenter/CallCenter";
import TolovRejasi from "./components/tolov/TolovRejasi";
import Aloqa from "./components/aloqa/Aloqa";
import Batafsil from './components/batafsil/Batafsil';
import Korzinka from './components/korzinka/Korzinka';
function App() {
  return (
    <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/yetkazibBerish' element={<YetkazibBerish/>}/>
        <Route path='/bizHaqimizda' element={<BizHaqimizda/>}/>
        <Route path='/bizningOffis' element={<BizningOffis/>}/>
        <Route path='/callCenter' element={<CallCenter/>}/>
        <Route path='/tolovRejasi' element={<TolovRejasi/>}/>
        <Route path='/aloqa' element={<Aloqa/>}/>
        <Route path='/batafsil/:id' element={<Batafsil/>}/>
        <Route path='/korzinka' element={<Korzinka/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
