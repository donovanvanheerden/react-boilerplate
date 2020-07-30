import { Dialog as MuiDialog, DialogProps } from '@material-ui/core';
import React from 'react';
import DialogTitle from '../dialogTitle/dialogTitle';

type Props = DialogProps & {
  title?: string;
};

const Dialog = ({ children, onClose, open, title, ...others }: Props) => {
  return (
    <MuiDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open} {...others}>
      {title ? (
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {title}
        </DialogTitle>
      ) : null}
      {children}
    </MuiDialog>
  );
};

export default Dialog;
