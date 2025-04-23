# 🎬 INFO Flix

Um site em React que consome a [TMDb API](https://www.themoviedb.org/) para exibir e buscar filmes. O projeto é totalmente componentizado, com navegação fluida.

## 🚀 Funcionalidades

- 🏠 **Página Home** com carrosséis de filmes por gênero (ex: Ação, Comédia, Romance).
- 🔍 **Busca por nome de filme** em tempo real.
- 🎭 **Busca por gênero**, permitindo filtragem de resultados.
- 🎞 **Página de detalhes do filme**, com informações como título, sinopse, nota, orçamento, receita, duração e imagem do pôster.
- ⚙️ Totalmente **componentizado**, com uso de `useEffect`, `useState`, `react-router-dom`, e ícones da `react-icons`.

## 🧩 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [TMDb API](https://developers.themoviedb.org/3)
- [React Icons](https://react-icons.github.io/react-icons/) – para ícones visuais


## 📦 Como rodar o projeto localmente

1. Clone o repositório:

git clone https://github.com/seu-usuario/movie-explorer.git
cd info_flix

2. Instale as dependências:

npm install

3. Crie um arquivo .env na raiz do projeto e adicione suas variáveis:

VITE_API_KEY=api_key= Sua chave da api
VITE_API=https://api.themoviedb.org/3/movie/
VITE_API_GENRE=https://api.themoviedb.org/3/discover/movie
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_IMG=https://image.tmdb.org/t/p/w500/

4. Execute a aplicação:

npm run dev


🔐 Observação
Você precisa criar uma conta no TMDb para obter sua própria chave de API.


💡 Possíveis melhorias
- Paginação nos resultados da busca

- Responsividade para dispositivos móveis

- Carregamento de trailers (YouTube)

- Sistema de favoritos com localStorage


🧑‍💻 Autor
Gabriel – Estudante de Informática
Projeto desenvolvido como prática de react e consumo de APIs.
