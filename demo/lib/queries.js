const { fullData, overviewData, detailsData } = require('../data/data.demo');

module.exports = {
  getAll: () => {
      return fullData;
  },
  getSearchResults: (_, args) => {
    const { offset, limit, keyword} = args;     
    const searchResults = overviewData
      .filter(element => element.content_title.toUpperCase().includes(keyword.toUpperCase()))
      .slice(offset | 0, limit | 5);
    
    return searchResults;
  },
  getSearchDetails: (_, args) => {
    const { video_id } = args;
    const contentDetails = detailsData.find(content => content.video_id === Number(video_id));
    
    return contentDetails;
  }    
}