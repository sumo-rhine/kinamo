import { Modal, Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import React from "react";

interface KeyFigureInfoProps {
  description: string;
  short_name: string;
  definition: string;
  data_source: string[];
}

const KeyFigureInfo: React.FC<KeyFigureInfoProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen}>
        <MoreHorizIcon fontSize="large" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        closeAfterTransition
        BackdropProps={{ timeout: 20 }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            height: "100%",
            //   width: "100%",
            //   height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper elevation={1}>
            <Box m={8} sx={{ width: 700, backgroundColor: "white" }}>
              <Typography mb={1} variant="h3" fontWeight="fontWeightLight">
                {props.short_name}
              </Typography>
              {/* <Typography
                color="text.secondary"
                mb={2}
                variant="h6"
                fontWeight="fontWeightLight"
              >
                {props.description}
              </Typography>
              <Divider textAlign="left">
                <Typography variant="h5" fontWeight="fontWeightLight">
                  Definition
                </Typography>
              </Divider> */}
              <Typography
                mb={2}
                mt={2}
                variant="h6"
                fontWeight="fontWeightLight"
              >
                {props.definition}
              </Typography>
              <Divider textAlign="left">
                <Typography variant="h5" fontWeight="fontWeightLight">
                  Daten Quellen
                </Typography>
              </Divider>
              <Typography
                mb={2}
                mt={2}
                variant="h6"
                fontWeight="fontWeightLight"
              >
                {props.data_source.join(", ")}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
};

export default KeyFigureInfo;
