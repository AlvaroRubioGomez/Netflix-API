const mockUpData = require('./data/mock-up-data');

module.exports = {
    getAll: () => {
      return [...mockUpData.movies, ...mockUpData.tvShows];
    }
}