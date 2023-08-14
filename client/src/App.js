import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import VideoPlay from './pages/VideoPlay';
import AddVideo from './pages/AddVideo';
import AddProduct from './pages/AddProduct';
import Videos from './pages/Videos';
import EditVideo from './pages/EditVideo';
import Products from './pages/Products';
import EditProduct from './pages/editProduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/videos' element={<Videos />} /> 
        <Route path='/video/:id' element={<VideoPlay />} /> 
        <Route path='/videos/editVideo/:id' element={<EditVideo />} /> 
        <Route path='/addVideo' element={<AddVideo />} /> 

        <Route path='/products' element={<Products />} /> 
        <Route path='/addProduct' element={<AddProduct />} /> 
        <Route path='/products/editProduct/:vidId/:productId' element={<EditProduct />} /> 
      </Routes>

    </Router>
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
