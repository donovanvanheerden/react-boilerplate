import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { Menu as MenuIcon, MenuOpen as MenuOpenIcon, Person } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import UserMenu from '../userMenu/userMenu';
import useStyles from './appHeader.styles';

interface Props {
  open: boolean;
  setOpen: () => void;
  title: string;
}

const AppHeader = ({ open, setOpen, title, ...rest }: Props) => {
  const [usermenu, setUserMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<undefined | HTMLElement>(undefined);

  const classes = useStyles(rest);

  const { t: translate } = useTranslation();

  const translateToString: (key: string) => string = translate;

  const handleOpen = (e: React.MouseEvent) => {
    setAnchorEl(e.currentTarget as HTMLElement);
    setUserMenu(true);
  };

  const handleClose = () => setUserMenu(false);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={1}
        color="default"
      >
        <Toolbar className={classes.toolbar} disableGutters={true}>
          <Tooltip title={open ? translateToString('Minimize') : translateToString('Open Menu')}>
            <IconButton className={classes.iconButton} color="primary" onClick={setOpen}>
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </Tooltip>
          <Typography variant="h5" color="primary" className={clsx(classes.grow, classes.title)}>
            {title}
          </Typography>
          <div className={classes.grow} />
          <div>
            <Tooltip title={translateToString('User Menu')}>
              <IconButton className={classes.iconButton} color="primary" onClick={handleOpen}>
                <Person />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <UserMenu anchorEl={anchorEl} open={usermenu} onClose={handleClose} />
    </React.Fragment>
  );
};

export default AppHeader;
