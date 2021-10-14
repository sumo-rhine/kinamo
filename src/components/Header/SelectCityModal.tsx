import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
// import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropDownOutlinedIcon from "@mui/material/Icon";
import { Modal, Backdrop, Fade, Button, Paper, Box } from "@mui/material";
import SelectCityTabs from "./SelectCityTabs";
import { CityNameProps } from "./SelectCity.model";

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
      color: "#d9ebda",
    },
  })
);

const SelectCityModalButton: React.FC<CityNameProps> = (props) => {
  // console.log(props.cities);
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
        {props.cityName}
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper elevation={6}>
            <SelectCityTabs></SelectCityTabs>
          </Paper>
          {/* <div className={classes.paper}></div> */}
        </Fade>
      </Modal>
    </div>
  );
};

export default SelectCityModalButton;
