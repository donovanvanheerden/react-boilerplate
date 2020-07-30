import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MaterialTable from 'material-table';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import User from '../../../globals/interfaces/User';

interface Props {
  data?: User[];
  loading: boolean;
}

const UserTable = ({ data, loading }: Props) => {
  const { t: translate } = useTranslation();
  const history = useHistory();
  const handleNavigation = (id: number) => () => history.push(`/users/${id}`);

  return (
    <MaterialTable
      columns={[
        { field: 'name', title: translate('Name') },
        {
          field: 'email',
          render: (user: User) => <a href={`mailto://${user.email}`}>{user.email}</a>,
          title: translate('Email Address'),
        },
        { field: 'phone', title: translate('Phone No') },
        {
          field: 'website',
          render: (user: User) => (
            <a target="blank" href={user.website}>
              {user.website}
            </a>
          ),
          title: translate('Website'),
        },
        {
          render: (user: User) => (
            <div>
              <IconButton style={{ padding: 8 }} onClick={handleNavigation(user.id)}>
                <EditIcon style={{ width: 20, height: 20 }} />
              </IconButton>
            </div>
          ),
          sorting: false,
        },
      ]}
      data={data || []}
      isLoading={loading}
      style={{
        boxShadow: 'none',
        padding: '0 10px',
        width: '100%',
      }}
      options={{
        filterCellStyle: {
          backgroundColor: '#fff',
          padding: 5,
        },
        filtering: true,
        toolbar: false,
      }}
      localization={{
        pagination: {
          labelDisplayedRows: `{from}-{to} ${translate('of')} {count}`,
          labelRowsSelect: translate('Rows'),
        },
      }}
    />
  );
};

export default UserTable;
