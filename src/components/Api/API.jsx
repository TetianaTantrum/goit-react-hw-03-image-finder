import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addImage = async (searchQuery, page) => {
  try {
    if (searchQuery.trim() === '') {
      return new Error();
    }
    const BASE_URL = 'https://pixabay.com/api';
    const API_KEY = '32827744-052546b65c11463fcf8d3310a';
    const {
      data: { hits },
    } = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
    );
    return hits;
  } catch (error) {
    toast(`Error: ${error}`);
  }
};
