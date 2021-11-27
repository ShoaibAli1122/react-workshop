import React, { Component, useState, useEffect } from "react";
import http from "../http-common";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "./../http-common";
import { deleteProducts, getProducts } from "../services/productService";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Cost Price</TableCell>
              <TableCell align="right">Sale Price</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Actions</TableCell>
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
                <TableCell align="right">{product.productCategory}</TableCell>
                <TableCell align="right">{product.costPrice}</TableCell>
                <TableCell align="right">{product.salePrice}</TableCell>
                <TableCell align="right">{product.discount}</TableCell>
                <TableCell align="right">
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
    </>
  );
}

export default Home;
