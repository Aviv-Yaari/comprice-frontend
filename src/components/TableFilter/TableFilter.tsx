import React, { useState } from 'react';
import FilterIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const TableFilter: React.FC = () => {
  const [filterOpen, setIsFilterOpen] = useState(false);
  const filtersText = filterOpen ? 'Hide filters' : 'Show filters';

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleFilter = () => {
    setIsFilterOpen(filterOpen => !filterOpen);
  };

  return (
    <section>
      <Button aria-label={filtersText} startIcon={<FilterIcon />} onClick={toggleFilter}>{filtersText}</Button>
      {filterOpen && (
        <Box display='flex' flexDirection='column' gap='1em'>
          <TextField variant='outlined' label="Name"/>
          <TextField variant='outlined' label="Price"/>
          <TextField variant='outlined' label="Mashu"/>
        </Box>
      )}
    </section>
  );
};

export default TableFilter;
