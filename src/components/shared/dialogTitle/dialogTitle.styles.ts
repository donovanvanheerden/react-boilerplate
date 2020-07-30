import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const dialogTitleStyles = ({ spacing, palette }: Theme) =>
  createStyles({
    closeButton: {
      color: palette.grey[500],
      position: 'absolute',
      right: spacing(1),
      top: spacing(1),
    },
    root: {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      margin: 0,
      padding: spacing(2),
    },
  });

export default makeStyles(dialogTitleStyles);
