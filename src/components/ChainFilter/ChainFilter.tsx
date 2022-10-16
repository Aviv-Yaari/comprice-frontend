import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import storesMock from '../../mocks/stores.json';

interface Option {
  id: string
  label: string
}

function createOptions (): Option[] {
  const chainsMap: Record<string, string> = {};
  storesMock.forEach(store => { chainsMap[store.chain_id] = store.chain_name; });
  const options: Option[] = [];
  for (const chainId in chainsMap) {
    if (Object.prototype.hasOwnProperty.call(chainsMap, chainId)) {
      const chainName = chainsMap[chainId];
      options.push({ id: chainId, label: chainName });
    }
  }
  return options;
}

const ChainFilter: React.FC = () => {
  return (
    <Autocomplete
        options={createOptions()}
        disablePortal
        renderInput={(params) => <TextField {...params} label="רשת" />}
        multiple
        />
  );
};

export default ChainFilter;
