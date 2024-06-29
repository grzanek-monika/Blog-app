import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/About/About.js';
import SinglePost from './components/pages/SinglePost/SinglePost.js';
import EditPost from './components/pages/EditPost/EditPost.js';
import Categories from './components/pages/Categories/Categories.js';
import PostsOfCategory from './components/pages/PostsOfCategory/PostsOfCategory.js';
import AddPost from './components/pages/AddPost/AddPost.js';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import { useEffect } from 'react';
import { fetchPosts } from './redux/postsReducer.js';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './redux/categoriesReducer.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPosts()), [dispatch]);

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
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:category' element={<PostsOfCategory />} />

        </Routes>
        <Footer />
      </Container>
      
      
    </main>
  );
}

export default App;
