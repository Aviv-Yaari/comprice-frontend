import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<number[] | null>(null);
  useEffect(() => {
    const mockApiDelay = new Promise(resolve => setTimeout(resolve, 2000));
    mockApiDelay.then(() => setProducts([1, 2, 3])).catch(() => {});
  }, []);

  return (
    <>
      <h2>Products</h2>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <Row key={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const Row: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <TableRow>
      <TableCell>
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!isOpen)}
          >
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Name</TableCell>
    </TableRow>
  );
};

export default ProductList;
