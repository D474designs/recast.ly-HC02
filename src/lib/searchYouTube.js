var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: video,
    videoEmbeddable: true
  })
  .done(({items}) =>{
    if (callback) {
      callback(items);
    }
  })
  .fail(({response.JSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

window.searchYouTube = searchYouTube;
