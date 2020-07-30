import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const lanaguageSwitchStyles = ({ spacing, typography, palette }: Theme) =>
  createStyles({
    langSwitch: {
      '& button': {
        '& .selected': {
          borderBottomColor: palette.secondary.main,
        },
        '&:hover': {
          color: palette.action.hover,
          cursor: 'pointer',
        },
        border: `1px solid ${palette.grey[300]}`,
        borderBottomWidth: `2px`,
        borderRadius: 0,
        boxShadow: 'none',
        color: palette.grey[600],
        fontSize: typography.button.fontSize,
        fontWeight: typography.fontWeightLight,
        letterSpacing: typography.button.letterSpacing,
        lineHeight: typography.button.lineHeight,
        outline: 'none',
      },
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      outline: 'none',
      zIndex: 1,
    },
    selected: {
      backgroundColor: palette.grey[50],
      borderBottom: `${spacing(0.25)}px solid ${palette.secondary.main} !important`,
    },
  });

export default makeStyles(lanaguageSwitchStyles);
