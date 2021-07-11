const { movies } = require('./movies.demo');
//const { similarMovies } = require('./similar-movies.mock-up');

// Array with all mock-up data of movies and tv-shows (200 items)
const fullData = [...movies];

// Array with a reduced version (search result data) of movies and tv-shows
const overviewData = fullData.map((item) => {    
    return Object.keys(item).slice(0, 4).reduce((result, key) => {
        result[key] = item[key];

        return result;
    }, {});    
});

module.exports = {
    fullData,
    overviewData,
}