import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const pageContentStyles = ({ spacing }: Theme) =>
  createStyles({
    actionBar: {
      display: 'inline-flex',
      width: '100%',
    },
    actionButtons: {
      alignItems: 'center',
      display: 'flex',
      marginBottom: '0.35em',
      marginLeft: 'auto',
    },
    grid: {
      marginTop: spacing(),
    },
    margin: {
      margin: spacing(),
    },
    root: {
      overflow: 'auto',
      padding: spacing(2),
    },
  });

export default makeStyles(pageContentStyles);
