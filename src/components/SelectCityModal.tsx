import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { Modal, Backdrop, Fade, Button, Paper, Box } from "@mui/material";

import { connect } from "react-redux";
import { AppState } from "../models/AppState";
import { City } from "../models/FullDataset";

const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      marginTop: 65,
      position: "absolute",
      width: "100%",

      //   display: "flex",
      //   flex: 1,
      //   alignItems: "center",
      //   justifyContent: "space-around",
    },
    paper: {
      //   backgroundColor: theme.palette.background.paper,
      //   border: "2px solid #000",
      //   boxShadow: theme.shadows[5],
      //   padding: theme.spacing(2, 4, 3),
    },
    button: {
      color: "white",
    },
  })
);

interface CityModalProps {
  cities: City[];
  debug: boolean;
}

const SelectCityModalButton: React.FC<CityModalProps> = (props) => {
  console.log(props.cities);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="large"
        className={classes.button}
        endIcon={<ArrowDropDownOutlinedIcon></ArrowDropDownOutlinedIcon>}
        onClick={handleOpen}
      >
        Select your City
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              {props.cities.map((city) => (
                <li>{city.country}</li>
              ))}
            </Box>
          </Paper>
          {/* <div className={classes.paper}></div> */}
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};
export default connect(mapStateToProps)(SelectCityModalButton);
