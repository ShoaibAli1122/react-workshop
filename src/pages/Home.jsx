import React, { Component, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProducts, getProducts } from "../services/productService";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Container } from "@material-ui/core";

function Home() {
  const [products, setproducts] = useState([]);

  useEffect(async () => {
    const res = await getProducts();
    setproducts(res.data);

    console.log("resp", res);
  }, []);

  const handleDelete = (id) => {
    console.info("You clicked the Chip.", id);

    const newproducts = products.filter((product) => {
      return product._id != id;
    });
    setproducts(newproducts);
    console.log(newproducts);

    const res = deleteProducts(id);
    console.log("res", res);
  };

  return (
    <Container>
      <h3>React CRUD Example</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Cost Price</TableCell>
              <TableCell>Sale Price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{product.productCategory}</TableCell>
                <TableCell>{product.costPrice}</TableCell>
                <TableCell>{product.salePrice}</TableCell>
                <TableCell>{product.discount}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Edit"
                      variant="outlined"
                      // onClick={handleClick}
                      color="primary"
                    />
                    <Chip
                      label="Delete"
                      color="error"
                      variant="outlined"
                      onClick={() => handleDelete(product._id)}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Home;
