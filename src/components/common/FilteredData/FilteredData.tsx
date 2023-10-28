import React, { FC } from 'react';
import { FilteredDataProps } from '../../../types/types';
import FilteredDataItem from '../FilteredDataItem/FilteredDataItem';
import './FilteredData.scss';

const FilteredData: FC<FilteredDataProps> = ({ array, className }) => {
  return (
    <ul className={className}>
      {array.map((item: any) => (
        <FilteredDataItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.thumbnail?.alt_text}
          api_link={item.api_link}
        />
      ))}
    </ul>
  );
};

export default FilteredData;
