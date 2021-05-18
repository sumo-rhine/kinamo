import React from "react";
import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  divider: {
    width: 2,
    height: 35,
    display: "block",
  },
});

const FlexboxTest: React.FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box pr={1}>
        <p>TEst</p>
      </Box>
      <Box>
        <Divider
          className={classes.divider}
          orientation="vertical"
          flexItem
          variant="middle"
        />
      </Box>
      <Box pr={5}>
        <p>TEst</p>
      </Box>
      <Box pr={5}>
        <p>TEst</p>
      </Box>
    </Box>
  );
};

export default FlexboxTest;
