import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme: Theme) =>
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

const SelectCityModalButton = () => {
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
        color="primary"
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
              <li>Freiburg</li>
              <li>Freiburg</li>
              <li>Freiburg</li>
              <li>Freiburg</li>
              <li>Freiburg</li>
            </Box>
          </Paper>
          {/* <div className={classes.paper}></div> */}
        </Fade>
      </Modal>
    </div>
  );
};

export default SelectCityModalButton;
