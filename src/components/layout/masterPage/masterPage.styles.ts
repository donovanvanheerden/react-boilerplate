import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { drawerWidth } from '../sideNav/sideNav.styles';

const masterPageStyles = ({ mixins, palette }: Theme) =>
  createStyles({
    content: {
      backgroundColor: palette.background.default,
      flexGrow: 1,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    root: {
      display: 'flex',
    },
    toolbar: mixins.toolbar,
  });

export default makeStyles(masterPageStyles);
