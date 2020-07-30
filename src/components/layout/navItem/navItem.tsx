import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import React from 'react';
import useReactRouter from 'use-react-router';
import useStyles from './navItem.styles';

interface Props {
  url: string;
  open: boolean;
  title: string;
  icon: JSX.Element;
}

const NavItem = ({ icon, open, title, url, ...rest }: Props) => {
  const classes = useStyles(rest);

  const { history, location } = useReactRouter();

  const handleNavigation = () => history.push(url);

  return (
    <Tooltip title={open ? '' : title}>
      <ListItem
        button={true}
        href="/"
        selected={location.pathname === url}
        onClick={handleNavigation}
        classes={{ selected: classes.selectedListItem }}
      >
        <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Tooltip>
  );
};

export default NavItem;
