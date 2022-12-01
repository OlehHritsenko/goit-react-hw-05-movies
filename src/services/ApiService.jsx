import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3cfb780db79e54922c50ea8f26b92bbe';

// const pathParams = [
//   { trend: 'trending/movie/day' },
//   { search: 'search/movie' },
//   { movieDetails: `movie/${movieId}` },
//   { cast: `movie/${movieId}/credits` },
//   { reviews: `movie/${movieId}/reviews` },
// ];

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
    },
  });

  return await axiosInstance.get();
}

async function fetchDataByID(id, path) {
  const pathURL = path ? `/${path}` : '';
  const pathParams = `movie/${id}${pathURL}`;
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
    },
  });

  return await axiosInstance.get();
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export { fetchData, fetchDataByID };
