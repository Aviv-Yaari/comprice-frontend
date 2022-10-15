import React, { useState } from 'react';
import FilterIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Autocomplete, Box, FormControl, InputLabel, ListSubheader, MenuItem, Select } from '@mui/material';

const TableFilter: React.FC = () => {
  const [filterOpen, setIsFilterOpen] = useState(true);
  const filtersText = filterOpen ? 'Hide filters' : 'Show filters';

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleFilter = () => {
    setIsFilterOpen(filterOpen => !filterOpen);
  };

  return (
    <section>
      <Button aria-label={filtersText} startIcon={<FilterIcon />} onClick={toggleFilter}>{filtersText}</Button>
      {filterOpen && (
        <Box display='flex' flexDirection='column' gap='1em' width={600}>
          <Box display='flex' gap='1em' alignItems='center'>
            <Autocomplete
             options={[{ label: 'List 1', group: 'Lists' }, { label: 'Product 1', group: 'Other products' }]}
             disablePortal
             renderInput={(params) => <TextField {...params} label="Name" />}
             renderOption={(props, option) => (
               <Box display='flex' component="li" {...props}>
                 <span style={{ flexGrow: 1 }}>{option.label}</span>
                 {option.group !== 'Other products' && <Button>Remove</Button>}
               </Box>)}
             multiple
             groupBy={(option) => option.group}
             sx={{ flexGrow: 1 }}
              />
            <Button>Create list</Button>
          </Box>
          <TextField variant='outlined' label="Price"/>
          <TextField variant='outlined' label="Mashu"/>
        </Box>
      )}
    </section>
  );
};

export default TableFilter;
