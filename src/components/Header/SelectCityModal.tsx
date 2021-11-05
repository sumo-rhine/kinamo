import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Modal, Fade, Button, Paper } from "@mui/material";
import SelectCityTabs from "./SelectCityTabs";
import { CityNameProps } from "./SelectCity.model";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      marginTop: 65,
      // position: "absolute",
      width: "80",

      //   display: "flex",
      //   flex: 1,
      //   alignItems: "center",
      //   justifyContent: "space-around",
    },
    paper: {
      // backgroundColor: theme.palette.background.paper,
      // border: "2px solid #000",
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
    },
    button: {
      // color: ,
    },
  })
);

interface SelectCityModalButtonProps {
  cityName: string | undefined;
  color: string;
}

const SelectCityModalButton: React.FC<SelectCityModalButtonProps> = (props) => {
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
        sx={{ color: props.color === "black" ? "white" : "#111213" }}
        size="large"
        className={classes.button}
        startIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        onClick={handleOpen}
      >
        <Typography fontWeight="fontWeightLight">{props.cityName}</Typography>
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 20,
        }}
      >
        <Fade in={open}>
          <Paper elevation={6}>
            <SelectCityTabs closeHandler={handleClose}></SelectCityTabs>
          </Paper>
          {/* <div className={classes.paper}></div> */}
        </Fade>
      </Modal>
    </div>
  );
};

export default SelectCityModalButton;
