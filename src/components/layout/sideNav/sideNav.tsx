import { Divider, Drawer, List } from '@material-ui/core';
import { Dashboard as DashboardIcon, People as PeopleIcon } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../../assets/images/react-logo.png';
import NavItem from '../navItem/navItem';
import useStyles from './sideNav.styles';

interface Props {
  open: boolean;
}

export const SideNav = ({ open, ...rest }: Props) => {
  const classes = useStyles(rest);

  const { t: translate } = useTranslation();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(
          {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          },
          classes.drawerPaper
        ),
      }}
      anchor="left"
      open={open}
    >
      <div className={classes.toolbar}>
        <img alt="Logo" src={Logo} />
      </div>
      <Divider />
      <List component="nav">
        <NavItem icon={<DashboardIcon />} open={open} title={translate('Dashboard')} url="/" />
        <NavItem icon={<PeopleIcon />} open={open} title={translate('Users')} url="/users" />
      </List>
    </Drawer>
  );
};

export default SideNav;
