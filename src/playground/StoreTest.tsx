import React from "react";
// import Container from "@material-ui/core/Container";
import { Container } from "@mui/material";
import { loadData } from "../store/actions/firebaseActions";

const data = loadData();
// console.log(data);

const StoreTest: React.FC = () => {
  return (
    <Container>
      <p>Store Test</p>
    </Container>
  );
};

export default StoreTest;
