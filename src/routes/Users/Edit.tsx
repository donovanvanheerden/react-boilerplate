import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useResource } from 'react-request-hook';
import { useParams } from 'react-router';
import PageContent from '../../components/shared/pageContent/pageContent';
import UserForm from '../../components/user/form/form';
import { userService } from '../../services/userService';

const EditUser = () => {
  const { id } = useParams();

  const [userResponse, getUser] = useResource(userService.getUser);
  const { t: translate } = useTranslation();

  useEffect(() => {
    getUser(id || '');
  }, [getUser, id]);

  return (
    <PageContent title={translate('Edit User')} isLoading={userResponse.isLoading}>
      {!userResponse.isLoading && <UserForm data={userResponse.data} />}
    </PageContent>
  );
};

export default EditUser;
