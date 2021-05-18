import { Home } from "@material-ui/icons";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
  Container,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    display: `flex`,
    flex: 1,
    justifyContent: `flex-start`,
    alignItems: `center`,
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
    <AppBar position="sticky">
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
            <Button
              size="large"
              className={classes.button}
              // variant="outlined"
              color="text.primary"
              endIcon={<ArrowDropDownOutlinedIcon></ArrowDropDownOutlinedIcon>}
            >
              Select your City
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
