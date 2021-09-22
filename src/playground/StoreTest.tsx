import React from "react";
import Container from "@material-ui/core/Container";
import { loadData } from "../store/actions/firebaseActions";

const data = loadData();
console.log(data);

const StoreTest: React.FC = () => {
  // console.log(AppState);
  // console.log(AppState);
  // console.log(AppState);
  // console.log(AppState);

  return (
    <Container>
      <p>Store Test</p>
    </Container>
  );
};

export default StoreTest;
