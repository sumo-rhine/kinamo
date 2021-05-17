import { Home } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
  Container,
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    display: `flex`,
    flex: 1,
    justifyContent: `flex-start`,
    alignItems: `center`,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container className={classes.mainContainer}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Typography variant="h5">KINaMo</Typography>
          <Box ml={3}>
            <Button variant="contained" color="secondary">
              Select your City
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
