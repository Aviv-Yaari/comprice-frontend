import React from 'react';
import { Box, Autocomplete, TextField, Button } from '@mui/material';
import productsMock from '../../mocks/products.json';
import userSettingsMock from '../../mocks/user_settings.json';

interface Option {
  label: string
  type: 'product' | 'list'
  itemCodes: string[] | string
}

function createOptions (): Option[] {
  const userLists: Option[] = userSettingsMock.lists.map(list => ({ label: list.name, type: 'list', itemCodes: list.item_codes }));
  const products: Option[] = productsMock.map(product => ({ label: product.item_name, type: 'product', itemCodes: product.item_code }));
  const res = userLists.concat(products);
  return res;
}

const ProductFilter: React.FC = () => {
  return (
    <Box display='flex' gap='1em' alignItems='center'>
      <Autocomplete
        options={createOptions()}
        disablePortal
        renderInput={(params) => <TextField {...params} label="מוצר" />}
        renderOption={(props, option) => (
          <Box display='flex' component="li" {...props}>
            <span style={{ flexGrow: 1 }}>{option.label}</span>
            {option.type === 'list' && <Button>Remove</Button>}
          </Box>)}
        multiple
        groupBy={(option) => option.type === 'list' ? 'Lists' : 'All products' }
        sx={{ flexGrow: 1 }}
        />
      <Button>יצירה</Button>
    </Box>
  );
};

export default ProductFilter;
