export default query =>
  fetch(
    `https://api.unsplash.com/search/photos?client_id=${
      process.env.VUE_APP_ACCESS
    }&query=${query}&per_page=30`
  )
    .then(response => response.json())
    .then(data => data.results);
