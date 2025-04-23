import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

import './Carrossel.css'
const imageUrl = import.meta.env.VITE_IMG

const Carrossel = ({ movies }) => {
  const [scrollIndex, setScrollIndex] = useState(0)
  const itemsToShow = 4 // Número de filmes que serão exibidos ao mesmo tempo

  // Função para mover o carrossel para a esquerda
  const scrollLeft = () => {
    if (scrollIndex === 0) {
      // Se já estiver no primeiro, volta para o último
      setScrollIndex(movies.length - itemsToShow)
    } else {
      setScrollIndex(scrollIndex - 1)
    }
  }

  // Função para mover o carrossel para a direita
  const scrollRight = () => {
    if (scrollIndex >= movies.length - itemsToShow) {
      // Se estiver no último, volta para o primeiro
      setScrollIndex(0)
    } else {
      setScrollIndex(scrollIndex + 1)
    }
  }

  return (
    <div className="carrossel-container">
      <Button onClick={scrollLeft} className="scroll-btn left-btn">
        &lt;
      </Button>

      <div className="carrossel">
        {movies.slice(scrollIndex, scrollIndex + itemsToShow).map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
            <div className="movie-item">
              <img
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
            </div>
          </Link>
        ))}
      </div>

      <Button onClick={scrollRight} className="scroll-btn right-btn">
        &gt;
      </Button>
    </div>
  )
}

export default Carrossel

