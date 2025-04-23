import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import SearchGenre from './pages/Genres.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element ={<App/>}>
          <Route path='/' element = {<Home />}/>
          <Route path='movie/:id' element = {<Movie />}/>
          <Route path='search' element = {<Search />}/>
          <Route path='/genero' element = {<SearchGenre />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
