import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from '../componentes/MovieCard'

const genreURL = import.meta.env.VITE_API_GENRE
const apiKey = import.meta.env.VITE_API_KEY

import "./MovieGrid.css"

const genreList = [
  { id: 28, name: "Ação" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animação" },
  { id: 35, name: "Comédia" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentário" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Família" },
  { id: 14, name: "Fantasia" },
  { id: 36, name: "História" },
  { id: 27, name: "Terror" },
  { id: 10402, name: "Música" },
  { id: 9648, name: "Mistério" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ficção Científica" },
];


const SearchGenre = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")
  

  let genreName = "Desconhecido";

  for (let i = 0; i < genreList.length; i++) {
    if(query === String(genreList[i].id)){
      genreName = genreList[i].name
      break
  }
}


  const getSearchedByGenreMovies = async (url) =>{
  
          const res = await fetch(url)
          const data = await res.json()
  
          setMovies(data.results)
      }
  
      useEffect(() =>{
        const searchByGenreUrl = `${genreURL}?${apiKey}&with_genres=${query}`;
  
        getSearchedByGenreMovies(searchByGenreUrl)
  
      }, [query])
      
  return (
    <div className='container'>
        <h2 className="title">Resultados para: <span className="query-text">{genreName}</span></h2>
        <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length>0 && movies.map((movie)=><MovieCard key={movie.id} movie = {movie} />)}
        </div>
    </div>
  )
}

export default SearchGenre