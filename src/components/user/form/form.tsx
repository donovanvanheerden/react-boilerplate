import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import useForm from '../../../globals/hooks/useForm';
import User from '../../../globals/interfaces/User';

import useStyles from './form.styles';

interface Props {
  data?: User;
}

const UserForm = ({ data, ...rest }: Props) => {
  const history = useHistory();
  const classes = useStyles(rest);

  const handleNavigation = () => history.push('/users');

  const { handleChange, handleSubmit, values: user } = useForm(data, handleNavigation);
  const { t: translate } = useTranslation();

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        className={classes.textfield}
        name="name"
        onChange={handleChange}
        placeholder="name"
        value={(user && user.name) || ''}
        variant="outlined"
      />
      <TextField
        className={classes.textfield}
        name="username"
        onChange={handleChange}
        placeholder="username"
        variant="outlined"
        value={(user && user.username) || ''}
      />
      <TextField
        className={classes.textfield}
        name="email"
        onChange={handleChange}
        placeholder="email"
        variant="outlined"
        value={(user && user.email) || ''}
      />
      <TextField
        className={classes.textfield}
        name="phone"
        onChange={handleChange}
        placeholder="phone"
        variant="outlined"
        value={(user && user.phone) || ''}
      />
      <TextField
        className={classes.textfield}
        name="website"
        onChange={handleChange}
        placeholder="website"
        variant="outlined"
        value={(user && user.website) || ''}
      />
      <div className={classes.buttonContainer}>
        <Button className={classes.button} onClick={handleNavigation} variant="outlined">
          {translate('Cancel')}
        </Button>
        <Button className={classes.button} color="primary" type="submit" variant="contained">
          {translate('Save')}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
