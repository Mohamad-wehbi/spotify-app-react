import Navbar from './component/Navbar/Navbar';
import Login from './pages/Login/Login';
import {createHashRouter, Routes, Route} from 'react-router-dom';
import Search from './pages/Search/Search';
import Cards from './pages/Cards/Cards';
import Albums from './pages/Albums/Albums';
import NotFound from './component/NotFound/NotFound';


const App = () => {

  return (
    <>
    <Navbar />
    <createHashRouter>
    <Routes>
       <Route path='/' element={<Login />}/>
       <Route path='/search' element={<Search />}/>
       <Route path='/Artists' element={<Cards />}/>
       <Route path='/Albums/:name/:id' element={<Albums />}/>
       <Route path='*' element={<NotFound />}/>
    </Routes>
    </createHashRouter>
    </>
  );
}

export default App;
