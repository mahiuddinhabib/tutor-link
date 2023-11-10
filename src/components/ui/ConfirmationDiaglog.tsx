import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface RConfirmationProps {
  open: boolean;
  handleOk: () => void;
  handleClose: () => void;
  DialogText: string;
}

const RConfirmation = ({ open, handleOk, handleClose, DialogText }: RConfirmationProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {DialogText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleOk} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RConfirmation;
