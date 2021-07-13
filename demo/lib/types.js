const { similarsData } = require('../data/data.demo');

// getSimilars: Given the MovieDetails or TvShowDetails field returns the populated similars property
const getSimilars = (field) => {
  let similars = [];
  field.similars.forEach(contentId => {
    similars.push(similarsData[contentId - 1]);
  });
  return similars;
}

module.exports = {    
  MovieDetails: {
    similars: (movieDetails) => {
      return getSimilars(movieDetails);
    }
  },
  TvShowDetails: {
    similars: (tvShowDetails) => {
      return getSimilars(tvShowDetails);
    }
  },  
  ContentDetails: {
    __resolveType: (content) => {
      if(content.content_duration) {
        return 'MovieDetails';
      }
      if(content.number_of_seasons) {
        return 'TvShowDetails';
      }
    }
  }, 
  SimilarContent: {
    __resolveType: (content) => {
      if(content.content_duration) {
        return 'SimilarMovie';
      }
      if(content.number_of_seasons) {
        return 'SimilarTvShow';
      }
    }
  }   
}