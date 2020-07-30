import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { drawerWidth } from '../sideNav/sideNav.styles';

export const appHeaderHeight: number = 64;

const appHeaderStyles = ({ palette, spacing, transitions, zIndex }: Theme) =>
  createStyles({
    appBar: {
      marginLeft: spacing(7) + 1,
      transition: transitions.create(['width', 'margin'], {
        duration: transitions.duration.leavingScreen,
        easing: transitions.easing.sharp,
      }),
      width: `calc(100% - ${spacing(7) + 1}px)`,
      zIndex: zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: drawerWidth,

      transition: transitions.create(['width', 'margin'], {
        duration: transitions.duration.enteringScreen,
        easing: transitions.easing.sharp,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    grow: {
      flexGrow: 1,
    },
    iconButton: {
      color: '#333',
      marginLeft: spacing(0.5),
    },
    title: {
      marginLeft: spacing(),
    },
    toolbar: {
      padding: spacing(0, 1),
    },
  });

export default makeStyles(appHeaderStyles);
