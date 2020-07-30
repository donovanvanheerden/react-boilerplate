import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const formStyles = ({ spacing }: Theme) =>
  createStyles({
    button: {
      '&:not(:last-child)': {
        margin: spacing(0, 1),
      },
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    textfield: {
      margin: spacing(1, 0),
    },
  });

export default makeStyles(formStyles);
