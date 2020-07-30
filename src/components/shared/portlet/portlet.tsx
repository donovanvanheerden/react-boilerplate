import { Card, CardActionArea, CardContent, CardHeader } from '@material-ui/core';
import React, { ReactNode } from 'react';
import useStyles from './portlet.styles';

interface Props {
  headerContent?: ReactNode;
  children: ReactNode;
  actionContent?: ReactNode;
  elevation?: number;
}

const Portlet = ({ children, elevation, headerContent, actionContent, ...props }: Props) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.card} elevation={elevation}>
      {headerContent && <CardHeader>{headerContent}</CardHeader>}
      <CardContent>{children}</CardContent>
      {actionContent && <CardActionArea>{actionContent}</CardActionArea>}
    </Card>
  );
};

export default Portlet;
