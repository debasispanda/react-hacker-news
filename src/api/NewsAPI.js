function fetchNews(page = 0) {
  const URL = `https://hn.algolia.com/api/v1/search?page=${page}`;
  return fetch(URL).then(res => res.json());
}

export default fetchNews;