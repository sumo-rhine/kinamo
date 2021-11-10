import HomeIcon from "@mui/icons-material/Home";
import Icon from "@mui/material/Icon";
import { CityNameProps } from "./SelectCity.model";
import { HashLink } from "react-router-hash-link";
import React from "react";
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

const Header: React.FC<CityNameProps> = (props) => {
  const classes = useStyles();
  const [color, setColor] = React.useState("black");

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setColor("black");
      } else {
        setColor("white");
      }
    };
  });

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: color === "black" ? "#111213" : "white" }}
    >
      <Toolbar>
        <Box className={classes.mainContainer}>
          <Box sx={{}}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              component={HashLink}
              to="/home#top"
              smooth={true}
            >
              {/* <HomeIcon fontSize="large" style={{ fill: "#d9ebda" }} /> */}
              <Icon style={{ width: 80, fontSize: 45 }}>
                <img
                  style={{
                    height: "100%",
                    // width: "100",
                    // opacity: color === "black" ? 0.0 : 1.0,
                  }}
                  alt="img"
                  src={
                    color === "black"
                      ? "/assets/logos/sumo_logo_transparent_background_white.png"
                      : "/assets/logos/sumo_logo_transparent_background.png"
                  }
                />
              </Icon>
            </IconButton>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            className={classes.divider}
            // light={true}
            // light
          />
          <Box pl={1.5}>
            <Box sx={{ display: "flex" }}>
              <Typography
                style={{ color: color === "black" ? "white" : "#111213" }}
                variant="h5"
                fontWeight="Medium"
              >
                KINaMo
              </Typography>
              <Typography
                style={{ color: color === "black" ? "white" : "#111213" }}
                // variant="h5"
                variant="caption"
                fontWeight="light"
              >
                Beta
              </Typography>
            </Box>
          </Box>
          <Box
            ml={3}
            sx={{
              // backgroundColor: props.value ? "grey.500" : "white",

              borderRadius: 30,
            }}
          >
            <SelectCityModalButton
              color={color}
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
