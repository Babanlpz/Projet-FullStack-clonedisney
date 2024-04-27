import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "b1160ac465f4febe08e953a566b16c16";

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

export default { getVideos };
