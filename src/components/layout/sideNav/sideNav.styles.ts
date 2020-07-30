import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const drawerWidth: number = 260;

const sideNavStyles = ({ breakpoints, mixins, palette, spacing, transitions }: Theme) =>
  createStyles({
    drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: drawerWidth,
    },
    drawerClose: {
      overflowX: 'hidden',
      transition: transitions.create('width', {
        duration: transitions.duration.leavingScreen,
        easing: transitions.easing.sharp,
      }),
      width: spacing(7) + 1,
      [breakpoints.up('sm')]: {
        width: spacing(7) + 1,
      },
    },
    drawerOpen: {
      transition: transitions.create('width', {
        duration: transitions.duration.enteringScreen,
        easing: transitions.easing.sharp,
      }),
      width: drawerWidth,
    },
    drawerPaper: {
      backgroundColor: '#333333',
      overflow: 'hidden',
    },
    toolbar: {
      ...mixins.toolbar,
      '& img': {
        height: 42,
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: '0 8px',
    },
  });

export default makeStyles(sideNavStyles);
