import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const overlayLoaderStyles = ({ zIndex }: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#FFFFFFAA',
      display: 'table',
      height: '100%',
      width: '100%',
    },
    loader: {
      display: 'table-cell',
      height: '100%',
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '100%',
    },
    root: {
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: zIndex.modal,
    },
  });

export default makeStyles(overlayLoaderStyles);
