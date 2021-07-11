const { similarMovies } = require('../data/similarMovies.demo');

const sMovies = [...similarMovies];

module.exports = {
  MovieDetails: {
    similars: (movieDetails) => {     
      let similars = [];
      movieDetails.similars.forEach(moviesId => {
        similars.push(sMovies[moviesId - 1]);
      });
      return similars;
    }
  },
}