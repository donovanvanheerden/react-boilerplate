import React, { ReactNode } from 'react';

import AppHeader from '../appHeader/appHeader';
import SideNav from '../sideNav/sideNav';
import useStyles from './masterPage.styles';

import { useTranslation } from 'react-i18next';

interface Props {
  children: ReactNode;
}

const MasterPage = ({ children, ...props }: Props) => {
  const classes = useStyles(props);

  const [open, setOpen] = React.useState(false);
  const { t: translate } = useTranslation();

  const toggleOpen = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <AppHeader open={open} setOpen={toggleOpen} title={translate('App Name')} />
      <SideNav open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default MasterPage;
