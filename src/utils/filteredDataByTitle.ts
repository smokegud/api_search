import { ArtworkProps } from './../types/types';

export const filteredDataByTitle = (
  artworks: ArtworkProps[] | undefined,
  searchTerm: string,
): ArtworkProps[] => {
  if (!artworks) return [];
  return artworks.filter((artwork) => {
    if (
      searchTerm &&
      !artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
};
