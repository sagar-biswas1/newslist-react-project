


import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NewsDetails from './components/NewsList/NewsDetails';
import About from './pages/About';
import Home from './pages/Home';
import { QueryClientProvider,QueryClient } from 'react-query';
import Blog from './pages/Blog';
const queryClient =new QueryClient()

const App = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>

          <Route path="news/:title" element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;