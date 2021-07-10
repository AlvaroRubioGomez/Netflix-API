const { fullData, overviewData } = require('./data/data.mock-up');

module.exports = {
  getContentAll: () => {
      return fullData;
  },
  getContentSearch: (root, args) => {
    const { items, page, keyword} = args;
    //default values: 5 items per page, show first page.    
    const offset = page === 0 ? 0 : ((page || 1) - 1) * (items || 5);
    const limit = (page || 1) * (items || 5);    
    const searchResults = overviewData
      .filter(element => element.content_title.toUpperCase().includes(keyword.toUpperCase()))
      .slice(offset, limit);
    
    return searchResults;
  },
  getContentDetails: (root, args) => {
    const { video_id } = args;
    const contentDetails = fullData.find(content => content.video_id === Number(video_id));
    
    return contentDetails;
  }

    // getContentOverview: (root, args) => {
    //   const { video_id } = args;      
    //   const content = mockupDataArray.find(content => content.video_id === Number(video_id));
    //   return content;
    // },
    // getSearch: (root, args) => {
    //   const { keyword } = args;

    //   const searchResults = mockupDataArray.filter(element => element.content_title.includes(keyword));
    //   console.log(searchResults);
    //   return searchResults;
    // }
}