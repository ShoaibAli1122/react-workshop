import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { saveProducts } from "../../services/productService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddProductForm() {
  let history = useHistory();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [newProduct, setnewProduct] = useState({
    name: "Shoaib",
    productCategory: "abcde",
    costPrice: 100,
    salePrice: 500,
    countInStock: 50,
    discount: 100,
    gst: 30,
    barCode: "1234335",
  });

  const onChangeState = (e) => {
    // const name = e.target.name;
    // const value= e.target.value;
    const { name, value } = e.target;

    setnewProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });

    console.log("state", newProduct);
  };

  const saveProductData = async () => {
    console.log("Function is called");
    // await axios.post("http://abc.com/products")
    const { data } = await saveProducts(newProduct);
    console.log("res", data);
    history.push("/");
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          {" "}
          <TextField
            // value={newProduct.name ? newProduct.name : "abc"}
            value={newProduct.name}
            name="name"
            onChange={(e) => onChangeState(e)}
            required
            label="Required"
          />
        </Grid>
        <Grid item xs={2}>
          {" "}
          <TextField
            required
            value={newProduct.productCategory}
            name="productCategory"
            onChange={(e) => onChangeState(e)}
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={2}>
          {" "}
          <TextField
            required
            value={newProduct.costPrice}
            name="costPrice"
            onChange={(e) => onChangeState(e)}
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={2}>
          {" "}
          <TextField
            value={newProduct.salePrice}
            name="salePrice"
            onChange={(e) => onChangeState(e)}
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={2}>
          <TextField
            value={newProduct.countInStock}
            name="countInStock"
            onChange={(e) => onChangeState(e)}
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            value={newProduct.discount}
            name="discount"
            onChange={(e) => onChangeState(e)}
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={2}>
          <TextField
            required
            value={newProduct.gst}
            name="gst"
            onChange={(e) => onChangeState(e)}
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            value={newProduct.barCode}
            name="barCode"
            onChange={(e) => onChangeState(e)}
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
      </Grid>

      <Button onClick={saveProductData} variant="contained">
        Add Product
      </Button>
    </Container>
  );
}

export default AddProductForm;
