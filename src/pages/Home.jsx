import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg">
      <p>HomePage</p>
      <Button variant="contained">Hello World</Button>
      <Link to="/about">About us page</Link>
    </Container>
  );
}

export default Home;
