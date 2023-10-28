import React, { useState, useEffect, FC } from 'react';
import { ArtworkProps } from '../../../types/types';
import { fetchArtworks as _fetchArtworks } from '../../../api/artworksApi';
import Spinner from '../../common/Spinner/Spinner';
import Input from '../../common/Input/Input';
import Select from '../../common/Select/Select';
import './ApiList.scss';
import FilteredData from '../../common/FilteredData/FilteredData';
import { filteredDataByTitle } from '../../../utils/filteredDataByTitle';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import { categories } from '../../../utils/categories';

const ApiList: FC = () => {
  const [artworks, setArtworks] = useState<ArtworkProps[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<ArtworkProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('animals');
  const [isError, setIsError] = useState(false);

  const fetchArtworks = async (category: string) => {
    setIsLoading(true);
    try {
      const artworks = await _fetchArtworks(category);
      setArtworks(artworks);
      setIsLoading(false);
    } catch {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (artworks && artworks.length !== 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [artworks]);

  useEffect(() => {
    fetchArtworks(searchCategory);
  }, [searchCategory]);

  useEffect(() => {
    const filteredData = filteredDataByTitle(artworks, searchTerm);
    setFilteredArtworks(filteredData);
  }, [searchTerm, artworks]);

  const handleSearchByTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
  };

  return (
    <div className="list">
      <h1 className="list__title">List of public API's</h1>
      <div>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchByTitle}
          placeholder="Search by artwork title"
        />
        <Select
          onChange={handleSearchByCategory}
          value={searchCategory}
          options={categories}
        />
      </div>
      <div className="list__data">
        {isError ? (
          <ErrorBoundary message={'Not fetching data'} />
        ) : !isLoading ? (
          filteredArtworks.length === 0 ? (
            <p className="list__info">No API's found.</p>
          ) : (
            <FilteredData array={filteredArtworks} />
          )
        ) : (
          <Spinner className="list__spinner" color="#ececec" />
        )}
      </div>
    </div>
  );
};

export default ApiList;
