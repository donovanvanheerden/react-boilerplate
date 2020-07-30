import { Fab, Grid, Tooltip } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import useReactRouter from 'use-react-router';
import OverlayLoader from '../overlayLoader/overlayLoader';
import PageTitle from '../pageTitle/pageTitle';
import Portlet from '../portlet/portlet';
import useStyles from './pageContent.styles';

interface Props {
  title?: string;
  subtitle?: string;
  actionButtons?: JSX.Element[] | JSX.Element;
  children: ReactNode;
  useCard?: boolean;
  returnUrl?: string;
  handleReturn?: () => void;
  isLoading?: boolean;
}

const PageContent = (props: Props) => {
  const { history } = useReactRouter();

  const classes = useStyles(props);

  const handleBackClick = () => {
    if (props.returnUrl) {
      history.push(props.returnUrl);
    }
  };

  const showActionBar = props.title || props.returnUrl || props.handleReturn || props.actionButtons;

  return (
    <div className={classes.root}>
      {props.isLoading && <OverlayLoader variant="circular" />}
      {showActionBar && (
        <div className={classes.actionBar}>
          {(props.returnUrl || props.handleReturn) && (
            <Tooltip title="Back">
              <Fab
                size="small"
                color="primary"
                className={classes.margin}
                onClick={props.handleReturn ? props.handleReturn : handleBackClick}
              >
                <ArrowBackIcon />
              </Fab>
            </Tooltip>
          )}
          {props.title && <PageTitle title={props.title} subtitle={props.subtitle} />}
          {props.actionButtons && (
            <div className={classes.actionButtons}>{props.actionButtons}</div>
          )}
        </div>
      )}
      <Grid
        container={true}
        item={true}
        xs={12}
        classes={{ item: clsx(showActionBar && classes.grid) }}
      >
        {(props.useCard && <Portlet elevation={0}>{props.children}</Portlet>) || props.children}
      </Grid>
    </div>
  );
};

export default PageContent;
