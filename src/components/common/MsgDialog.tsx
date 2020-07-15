import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface MsgDialogData {
  title: string;
  content: string;
}

interface MsgDialogProps {
  data: MsgDialogData | null;
}

export default function MsgDialog(props: MsgDialogProps): JSX.Element {
  const [msg, setMsg] = useState<MsgDialogData | null>(props.data);

  useEffect(() => {
    setMsg(props.data);
  }, [props.data]);

  const handleClose = () => {
    setMsg(null);
  };

  return (
    <div>
      <Dialog open={msg !== null} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{msg?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{msg?.content}</DialogContentText>
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
