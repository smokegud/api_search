import axios from 'axios';

export const fetchArtworks = async (category: string) => {
  try {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${category}`,
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
