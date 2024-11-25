import React from 'react'
import Home from "./pages/Home";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {  Routes, Route } from "react-router-dom";
import AllBooks from './pages/AllBooks';
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';
import Cart from './pages/cart';
import Profile from './pages/profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
function App() {
  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/all-books" element={<AllBooks />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/profile" element={<Profile />} />
          <Route  path="/SignUp" element={<SignUp />} />
          <Route  path="/LogIn" element={<LogIn />} />
          <Route path="/view-book-details/:id" element={<ViewBookDetails />}/>
        </Routes>
        <Footer />
      
    </div>
  );
};

export default App