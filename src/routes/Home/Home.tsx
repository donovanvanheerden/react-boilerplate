import { Button, DialogActions, DialogContent, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '../../components/shared/dialog/dialog';
import PageContent from '../../components/shared/pageContent/pageContent';

const HomeRoute = () => {
  const { t: translate } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <PageContent title={translate('Dashboard')} useCard={true}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleOpen} variant="contained" color="primary">
          {translate('Open Dialog')}
        </Button>
      </div>
      <Dialog title={translate('Dialog Title')} onClose={handleClose} open={open}>
        <DialogContent dividers={true}>
          <Typography gutterBottom={true}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom={true}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom={true}>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus={true} onClick={handleClose} variant="outlined">
            {translate('Close')}
          </Button>
        </DialogActions>
      </Dialog>
    </PageContent>
  );
};

export default HomeRoute;
