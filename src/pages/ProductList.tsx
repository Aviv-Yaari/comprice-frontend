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
import { mockDelay } from '../utils/generalUtils';
import Product from '../types/product';
import productsMock from '../mocks/products.json';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>();
  useEffect(() => {
    mockDelay(2000).then(() => setProducts(productsMock)).catch(() => {});
  }, []);

  return (
    <>
      <h2>Products</h2>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <Row key={product.item_code} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

interface RowProps {
  product: Product
}

const Row: React.FC<RowProps> = ({ product }) => {
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
      <TableCell>{product.item_code}</TableCell>
      <TableCell>{product.item_name}</TableCell>
      <TableCell>{product.item_price}</TableCell>
    </TableRow>
  );
};

export default ProductList;
