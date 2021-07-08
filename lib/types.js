module.exports = {
    ContentDetails: {
        __resolveType: (contentDetails, context, info) => {
          if (contentDetails.content_duration) {
            return 'MovieDetails'
          }
    
          return 'TvShowDetails'
        }
    },
}