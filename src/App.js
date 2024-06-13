import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Addperson from './Components/Addperson';
import Viewperson from './Components/Viewperson';
import DeletPerson from './Components/DeletPerson';
import Update from './Components/Update';
import Ir from './Components/Ir';
function App() {
  return (
    <BrowserRouter>
        <header>
          <Header/>
        </header>
        <Routes>
            <Route path='/' element={<Addperson/>}/>
            <Route path='/viewperson' element={<Viewperson/>}/>
            <Route path='/deletRecord/:id' element={<DeletPerson/>}/>
            <Route path='/update/:id' element={<Update/>}/>
        </Routes>
    </BrowserRouter>
    // <Ir/>
  );
}

export default App;
