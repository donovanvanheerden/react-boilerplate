import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './pageTitle.styles';

interface Props {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ subtitle, title, ...props }: Props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom={subtitle === null}>
        {title}
      </Typography>
      {subtitle && (
        <Typography className={classes.subtitle} variant="subtitle1" gutterBottom={false}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default PageTitle;
