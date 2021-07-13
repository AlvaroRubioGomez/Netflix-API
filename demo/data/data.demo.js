const { movies } = require('./movies.demo');
const { tvShows } = require('./tvShows.demo');

const moviesArray = [...movies];
const tvShowsArray = [...tvShows];
const fullData = [...movies, ...tvShows];

// Search result data of Movies and Tv-shows
const overviewData = fullData.map((item) => {    
    return Object.keys(item).slice(0, 4).reduce((result, key) => {
        result[key] = item[key];
        return result;
    }, {});    
});

// Details data of Movies and Tv-shows
let detailsData = fullData.map((item) => {    
    return Object.keys(item).slice(4).reduce((result, key) => {
        result[key] = item[key];
        return result;
    }, {});    
});
//add video_id from the previously discarded properties
detailsData.forEach((item, i) => {
    item.video_id = fullData[i].video_id;
})

// Similars Movies and Tv-shows

//getFilteredByKeys: Return an array of object with only the entries whose keys matches with the filterKeys
const getFilteredByKeys = (filterKeys, filterArray) => {
    return filterArray.map((item) => { 
        return Object.keys(item).reduce((result, key) => {        
            if(filterKeys.some((similarKey) => similarKey === key)){           
                result[key] = item[key];            
            }
            return result;
        }, {});    
    });
}

const similarsKeys = [
    "video_id",
    "banner_img",
    "percentage_of_coincidence",
    "age_rating",
    "year",
    "description",    
];

const similarMoviesKeys = [...similarsKeys, "content_duration"];
const similarTvshowsKeys = [...similarsKeys, "number_of_seasons"];

// Similar Movies
const similarsMovies = getFilteredByKeys(similarMoviesKeys, moviesArray);
// Similar Tv-shows
const similarTvShows = getFilteredByKeys(similarTvshowsKeys, tvShowsArray);

const similarsData = [...similarsMovies, ...similarTvShows];


module.exports = {
    fullData,
    overviewData,
    detailsData,
    similarsData,
}