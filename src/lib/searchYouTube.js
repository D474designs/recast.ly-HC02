var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    
  })
};

window.searchYouTube = searchYouTube;
