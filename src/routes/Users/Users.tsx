import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useResource } from 'react-request-hook';
import PageContent from '../../components/shared/pageContent/pageContent';
import UserTable from '../../components/user/table/table';
import { userService } from '../../services/userService';

const GridDataRoute = () => {
  const [userResponse, getUsers] = useResource(userService.getUsers);
  const { t: translate } = useTranslation();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <PageContent title={translate('Users')}>
      <UserTable data={userResponse.data} loading={userResponse.isLoading} />
    </PageContent>
  );
};

export default GridDataRoute;
