import { useState } from 'react'
import {Routes , Route , useLocation} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from '../src/pages/Home'
import Movies from '../src/pages/Movies'
import MovieDetails from '../src/pages/MovieDetails'
import SeatLayout from '../src/pages/SeatLayout'
import MyBookings from '../src/pages/MyBookings'
import Favorite from '../src/pages/Favorite'
import Navbar from '../src/component/Navbar'
import Footer from '../src/component/Footer'

function App() {

  const isAdmin = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster/>
      {!isAdmin && <Navbar/>}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/movies" element = {<Movies/>}/>
        <Route path="/movies/:id" element = {<MovieDetails/>}/>
        <Route path="/movies/:id/:date" element = {<SeatLayout/>}/>
        <Route path="/mybookings" element = {<MyBookings/>}/>
        <Route path="/favorite" element = {<Favorite/>}/>
      </Routes >
      {!isAdmin && <Footer/>}
    </>
  )
}

export default App
