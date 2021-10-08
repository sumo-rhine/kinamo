// import { Home } from "@material-ui/icons";
// import HomeIcon from "@mui/icons-material";
// import HomeIcon from "@mui/icons-material/HomeIcon";
import HomeIcon from "@mui/icons-material/Home";
import { CityNameProps } from "./SelectCity.model";
import { Link } from "react-router-dom";

// import IconButton from "@mui/material/IconButton";

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
import SelectCityModalButton from "./SelectCityModal";
import { AboutProps } from "../How-it-Works/About.model";
const useStyles = makeStyles({
  mainContainer: {
    display: `flex`,
    flex: 1,
    justifyContent: `flex-start`,
    alignItems: `center`,
    // color: "white",
  },
  divider: {
    // fill: "white",
    // width: 2,
    // height: 35,
    display: "block",
  },
  button: {
    // color: "white",
  },
});

interface HeaderProps {
  cityName: CityNameProps;
  aboutHover: AboutProps;
}

const Header: React.FC<CityNameProps & AboutProps> = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" style={{ background: "white" }}>
      <Toolbar>
        <Box className={classes.mainContainer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            component={Link}
            to="/home"
          >
            <HomeIcon fontSize="large" style={{ fill: "black" }} />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            className={classes.divider}
            // light={true}
            // light
          />
          <Box pl={1.5}>
            <Typography
              style={{ color: "black" }}
              variant="h5"
              fontWeight="fontWeightLight"
            >
              KINaMo
            </Typography>
          </Box>
          <Box
            ml={3}
            sx={{
              backgroundColor: props.value ? "grey.500" : "white",
              borderRadius: 30,
            }}
          >
            <SelectCityModalButton
              cityName={props.cityName}
            ></SelectCityModalButton>
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
