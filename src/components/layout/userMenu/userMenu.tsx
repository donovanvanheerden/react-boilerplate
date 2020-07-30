import { Avatar, Divider, Menu, MenuItem, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './userMenu.styles';

import LanguageSwitch from '../../shared/languageSwitch/languageSwitch';

interface Props {
  anchorEl?: HTMLElement;
  open: boolean;
  onClose: () => void;
}

const UserMenu = ({ anchorEl, open, onClose, ...rest }: Props) => {
  const classes = useStyles(rest);
  const { t: translate } = useTranslation();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted={true}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      classes={{ paper: classes.menu }}
      open={open}
      onClose={onClose}
      elevation={3}
    >
      <div className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          src="https://www.gravatar.com/avatar/?s=32&d=identicon&r=PG"
        />
        <div>
          <Typography variant="subtitle1">John Smith</Typography>
          <Typography variant="button">Company</Typography>
        </div>
      </div>
      <Divider />
      <div className={classes.languageSwitch}>
        <Typography variant="button" component="span">
          {translate('Language')}
        </Typography>
        <LanguageSwitch />
      </div>
      <Divider />
      <MenuItem>
        <i className="material-icons">settings</i>
        {translate('Settings')}
      </MenuItem>
      <MenuItem>
        <i className="material-icons">help</i>
        {translate('Help & Support')}
      </MenuItem>
      <MenuItem>
        <i className="material-icons">exit_to_app</i>
        {translate('Logout')}
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
