import React, { Component, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { deleteProducts, getProducts } from "../services/productService";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Container } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeleteProductConfirmation from "../components/productModule/deleteProductComponent";

function Home() {
  const [products, setproducts] = useState([]);
  const [openState, setopenState] = useState(false);
  const [producttoDelete, setproducttoDelete] = useState("");
  useEffect(async () => {
    const res = await getProducts();
    setproducts(res.data);

    console.log("resp", res);
  }, []);

  const handleDeleteConfirmation = (id) => {
    setopenState(true);
    setproducttoDelete(id);
  };
  const handleDelete = async () => {
    console.info("You clicked the Chip.", producttoDelete);
    setopenState(false);
    const newproducts = products.filter((product) => {
      return product._id != producttoDelete;
    });
    setproducts(newproducts);
    console.log(newproducts);

    const res = await deleteProducts(producttoDelete);
    console.log("res", res);
  };

  return (
    <Container>
      <h3>React CRUD</h3>
      <Button variant="contained" style={{ float: "right" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          Add Product
        </Link>
      </Button>

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
                      onClick={() => handleDeleteConfirmation(product._id)}
                      // onClick={() => handleDelete(product._id)}
                      // onClick={}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <DeleteProductConfirmation
        open={openState}
        productId={producttoDelete}
        deleteProduct={handleDelete}
        setOpen={setopenState}
      /> */}

      <DeleteProductConfirmation
        open={openState}
        setOpen={setopenState}
        deleteProduct={handleDelete}
      />
    </Container>
  );
}

export default Home;
