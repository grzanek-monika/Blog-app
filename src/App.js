import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/About/About.js';
import SinglePost from './components/pages/SinglePost/SinglePost.js';
import EditPost from './components/pages/EditPost/EditPost.js';
import AddPost from './components/pages/AddPost/AddPost.js';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route path='/post/edit/:id' element={<EditPost />} />
        </Routes>
        <Footer />
      </Container>
      
      
    </main>
  );
}

export default App;
