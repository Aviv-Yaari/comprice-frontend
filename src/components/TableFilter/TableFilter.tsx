import React from 'react';
import FilterIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';

const TableFilter: React.FC = () => {
  return (
    <section>
      <IconButton aria-label='Filters'><FilterIcon /></IconButton>
    </section>
  );
};

export default TableFilter;
