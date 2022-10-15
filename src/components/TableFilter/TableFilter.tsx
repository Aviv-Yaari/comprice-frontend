import React, { useState } from 'react';
import FilterIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Autocomplete, Box, FormControl, InputLabel, ListSubheader, MenuItem, Select } from '@mui/material';
import products from '../../mocks/products.json';
import userSettings from '../../mocks/user_settings.json';
import Product from '../../types/product';

interface ProductNameAndList {
  label?: string
  list: string
}

function findListForProduct (lists: Record<string, string[]>, itemCode?: string): string {
  for (const listName in lists) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (itemCode && Object.prototype.hasOwnProperty.call(lists, listName)) {
      const itemCodes = lists[listName];
      if (itemCodes.includes(itemCode)) {
        return listName;
      }
    }
  }
  return 'No list';
}

function addListFieldToProducts (products: Product[]): ProductNameAndList[] {
  return products.map(product => ({ label: product.item_name, list: findListForProduct(userSettings.lists, product.item_code) }));
}

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
             options={addListFieldToProducts(products).sort((a, b) => -b.list.localeCompare(a.list))}
             disablePortal
             renderInput={(params) => <TextField {...params} label="Name" />}
             renderOption={(props, option) => (
               <Box display='flex' component="li" {...props}>
                 <span style={{ flexGrow: 1 }}>{option.label}</span>
                 {option.list !== 'No list' && <Button>Remove</Button>}
               </Box>)}
             multiple
             groupBy={(option) => option.list}
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
