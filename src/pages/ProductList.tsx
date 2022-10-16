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
import productsMock from '../mocks/products_prices.json';
import { TablePagination } from '@mui/material';
import TableFilter from '../components/TableFilter/TableFilter';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    mockDelay(2000).then(() => setProducts(productsMock)).catch(() => {});
  }, []);

  return (
    <>
      <h2>Products</h2>
      <TableFilter />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell></TableCell>
              <TableCell>מוצר</TableCell>
              <TableCell>רשת</TableCell>
              <TableCell>חנות</TableCell>
              <TableCell>מחיר</TableCell>
              <TableCell>מבצע</TableCell>
              <TableCell>תאריך עדכון</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
              <Row key={product.item_code} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={products?.length ?? 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(ev, newPage) => setPage(newPage)}
          onRowsPerPageChange={(ev) => { setRowsPerPage(parseInt(ev.target.value, 10)); setPage(0); }}
        />
    </>
  );
};

interface RowProps {
  product: Product
}

const Row: React.FC<RowProps> = ({ product }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
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
        <TableCell><img src='https://st1.foodsd.co.il/Images/Products/large/LRu1P1vbNx8f6XtK.JPG' height="50px"/></TableCell>
        <TableCell>{product.manufacturer_item_description}</TableCell>
        <TableCell>{product.chain_name}</TableCell>
        <TableCell>{product.store_name}</TableCell>
        <TableCell>{product.item_price}</TableCell>
        <TableCell>{product.item_price}</TableCell>
        <TableCell>{product.price_update_date?.substring(0, 10)}</TableCell>
      </TableRow>
      <TableRow style={{ backgroundColor: '#eeeeee', width: '100%' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                #{product.item_code}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                פרטים נוספים על המוצר
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default ProductList;
