import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "b1160ac465f4febe08e953a566b16c16";

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

const movieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=b1160ac465f4febe08e953a566b16c16";

const getMovieById = (id) =>
  axios.get(`${movieByGenreBaseUrl}&with_genres=${id}`);

export default { getVideos, getMovieById };
