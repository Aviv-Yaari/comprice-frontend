import React, { useState } from 'react';
import FilterIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProductNameFilter from '../ProductFilter/ProductFilter';
import { FormControlLabel, Switch } from '@mui/material';
import ChainFilter from '../ChainFilter/ChainFilter';

const TableFilter: React.FC = () => {
  const [filterOpen, setIsFilterOpen] = useState(true);
  const filtersText = filterOpen ? 'הסתר סינונים' : 'הצג סינונים';

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleFilter = () => {
    setIsFilterOpen(filterOpen => !filterOpen);
  };

  return (
    <section style={{ background: '#f4f4f480', padding: '1em' }}>
      <Button aria-label={filtersText} startIcon={<FilterIcon />} onClick={toggleFilter}>{filtersText}</Button>
      {filterOpen && (
        <Box display='flex' flexDirection='column' gap='1em'>
          <ProductNameFilter />
          <ChainFilter />
          <Box display='flex'>
            <FormControlLabel control={<Switch />} label="כולל מע׳מ" />
            <FormControlLabel control={<Switch />} label="קבץ לפי רשת" />
            <FormControlLabel control={<Switch />} label="מבצעים בלבד" />
          </Box>
        </Box>
      )}
    </section>
  );
};

export default TableFilter;
