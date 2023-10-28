import React, { FC } from 'react';
import { ArtworkProps } from '../../../types/types';
import './FilteredDataItem.scss';

const FilteredDataItem: FC<ArtworkProps> = ({
  id,
  title,
  description,
  api_link,
}) => {
  return (
    <li key={id} className="data__item">
      <h2 className="data__item-title">{title}</h2>
      <p className="data__item-descr">{description}</p>
      <p className="data__item-link">{api_link}</p>
    </li>
  );
};

export default FilteredDataItem;
