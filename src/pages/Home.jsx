import {useState, useEffect} from 'react'
import Carrossel from '../componentes/carrossel';
import GenreSelect from '../componentes/Select';

import './MovieGrid.css'

const movieURL = import.meta.env.VITE_API;
const movieGenreURL = import.meta.env.VITE_API_GENRE;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }
    useEffect(() =>{
        const topRatedUrl = `${movieURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])





    const [upcomingMovies, setUpcomingMovies] = useState([])
    const getUpcomingMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setUpcomingMovies(data.results)
    }
    useEffect(() =>{
        const upcomingUrl = `${movieURL}upcoming?${apiKey}`
        getUpcomingMovies(upcomingUrl)
    }, [])






    const [actionMovies, setActionMovies] = useState([]);
    const getActionMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setActionMovies(data.results);
    };

    useEffect(() => {
        const actionMoviesUrl = `${movieGenreURL}?${apiKey}&with_genres=28`; // 28 é o ID do gênero Ação
        getActionMovies(actionMoviesUrl);
    }, []);






    const [animationMovies, setAnimationMovies] = useState([]);
    const getAnimationMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setAnimationMovies(data.results);
    };

    useEffect(() => {
        const animationMoviesUrl = `${movieGenreURL}?${apiKey}&with_genres=16`; // 28 é o ID do gênero Ação
        getAnimationMovies(animationMoviesUrl);
    }, []);






    const [dramaMovies, setDramaMovies] = useState([]);
    const getDramaMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setDramaMovies(data.results);
    };

    useEffect(() => {
        const dramaMoviesUrl = `${movieGenreURL}?${apiKey}&with_genres=18`; // 28 é o ID do gênero Ação
        getDramaMovies(dramaMoviesUrl);
    }, []);

    

    return (
    <div className="home">
      <div className='top'>
      <h1 className='titulo'>Melhor Avaliados</h1>
      <GenreSelect/>
      </div>
      <Carrossel movies={topMovies}/>
      <h1 className='titulo'>Filmes em Alta</h1>
      <Carrossel movies={upcomingMovies}/>
      <h1 className='titulo'>Filmes de Ação</h1>
      <Carrossel movies={actionMovies}/>
      <h1 className='titulo'>Filmes de Animação</h1>
      <Carrossel movies={animationMovies}/>
      <h1 className='titulo'>Filmes de Drama</h1>
      <Carrossel movies={dramaMovies}/>
      <div className='end'></div>
    </div> 

  )
}

export default Home