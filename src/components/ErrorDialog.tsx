import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface ErrorDialogProps {
  error: any | null;
}

export default function ErrorDialog(props: ErrorDialogProps): JSX.Element {
  const [error, setError] = useState(props.error);

  useEffect(() => {
    setError(props.error);
  }, [props.error]);

  const handleClose = () => {
    setError(null);
  };

  const message = (props.error ? props.error.message : "") || "Unknown error";

  return (
    <div>
      <Dialog open={error !== null} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Oops</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
