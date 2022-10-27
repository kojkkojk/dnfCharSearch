import './App.css';
import Index from './components/page/Index';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/designs/Topbar'
import CharInfos from './components/page/CharInfos';
function App() {
  return (
    <>
      <Topbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/status" element={<CharInfos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
