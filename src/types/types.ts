export interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}
export interface ArtworkProps {
  id: number;
  title: string;
  description: string;
  className?: string;
  image_url?: string;
  api_link?: string;
}

export interface InputProps {
  children?: string | JSX.Element;
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

export interface SelectProps {
  options: string[];
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

export interface FilteredDataProps {
  array: ArtworkProps[];
  className?: string;
}
