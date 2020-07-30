import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import useStyles from './dialogTitle.styles';

type Props = DialogTitleProps & {
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
};

const DialogTitle = ({ children, onClose, ...rest }: Props) => {
  const classes = useStyles(rest);

  // force type to match IconButton onClick props
  const handleClose = (onClose as unknown) as () => void;

  return (
    <MuiDialogTitle disableTypography={true} className={classes.root} {...rest}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
