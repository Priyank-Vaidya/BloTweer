// import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateNewBlog from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className ="content">
        <Routes>
          <Route path='/' element={<Home/>} />    
          <Route path='/create' element={<CreateNewBlog />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='*' element={<NotFound />} />
          </Routes>
        
        </div>
    </div>
    </Router>
    
  );
}


export default App;
