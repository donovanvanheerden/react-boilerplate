import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const navItemStyles = ({ palette, spacing }: Theme) =>
  createStyles({
    listItemIcon: {
      color: palette.primary.contrastText,
    },
    selectedListItem: {
      '&:after': {
        backgroundColor: palette.secondary.main,
        content: '""',
        height: '100%',
        left: 0,
        position: 'absolute',
        width: spacing(0.4),
      },
      backgroundColor: '#FFFFFF1A !important',
      position: 'relative',
    },
  });

export default makeStyles(navItemStyles);
