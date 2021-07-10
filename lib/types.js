const { similarMovies } = require('./data/similar-movies.mock-up');

const sMovies = [...similarMovies];

console.log(sMovies[0]);

module.exports = {
  MovieDetails: {
    similars: () => {
      return [sMovies[0]];
    }
  }
}