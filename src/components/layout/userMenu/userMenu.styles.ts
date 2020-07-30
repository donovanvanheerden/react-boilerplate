import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const userMenuStyles = ({ spacing }: Theme) =>
  createStyles({
    avatar: {
      marginRight: spacing(2),
    },
    avatarContainer: {
      display: 'flex',
      padding: '0.5rem 1rem',
    },
    languageSwitch: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0.5rem',
    },
    menu: {
      '& h6': {
        lineHeight: '1.5 !important',
      },
      '& i': {
        marginRight: spacing(),
      },
      top: `${spacing(8) + 1}px !important`,
      width: spacing(28),
    },
  });

export default makeStyles(userMenuStyles);
