import { Home } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";

// This is deprecated!!
// https://mui.com/styles/advanced/
import { makeStyles } from "@mui/styles";

import SelectCityModalButton from "../components/SelectCityModal";

const useStyles = makeStyles({
  mainContainer: {
    display: `flex`,
    flex: 1,
    justifyContent: `flex-start`,
    alignItems: `center`,
    color: "white",
  },
  divider: {
    width: 2,
    height: 35,
    display: "block",
  },
  button: {
    color: "white",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" style={{ background: "black" }}>
      <Toolbar>
        <Box className={classes.mainContainer}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Box>
            <Divider
              className={classes.divider}
              orientation="vertical"
              flexItem
              variant="middle"
            />
          </Box>
          <Typography variant="h5">KINaMo</Typography>
          <Box ml={3}>
            <SelectCityModalButton></SelectCityModalButton>
            {/* <Button
              size="large"
              className={classes.button}
              color="text.primary"
              endIcon={<ArrowDropDownOutlinedIcon></ArrowDropDownOutlinedIcon>}
            /> 
               Select your City
             </Button> */}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
