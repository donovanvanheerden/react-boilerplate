import { createStyles, makeStyles } from '@material-ui/core/styles';

const pageTitleStyles = () =>
  createStyles({
    root: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    subtitle: {
      marginTop: '-10px!important',
    },
  });

export default makeStyles(pageTitleStyles);
