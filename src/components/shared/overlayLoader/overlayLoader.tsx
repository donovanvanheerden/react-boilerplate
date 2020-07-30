import { CircularProgress, LinearProgress } from '@material-ui/core';
import React from 'react';
import useStyles from './overlayLoader.styles';

interface Props {
  variant: 'circular' | 'linear';
}

const OverlayLoader = ({ variant, ...rest }: Props) => {
  const classes = useStyles(rest);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.loader}>
          {variant === 'circular' && <CircularProgress />}
          {variant === 'linear' && <LinearProgress />}
        </div>
      </div>
    </div>
  );
};

export default OverlayLoader;
