import './App.css';
import Index from './components/page/Index';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/designs/Topbar';
import Auction from './components/page/Auction';
import CharInfos from './components/page/CharInfos';
import Mabu from './components/page/Mabu';


function App() {
  return (
    <>
      <Topbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/status" element={<CharInfos />} />
          <Route path='/auction' element={<Auction/>} />
          <Route path='/inchant' element={<Mabu/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
