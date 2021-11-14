import PageLoader from 'components/Loaders/PageLoader';
import UserList from 'components/common/UserList';
import React from 'react';
import useNotFollowing from 'src/hooks/useNotFollowing';

const NotFollowing = () => {
  const { notFollowing, isLoading } = useNotFollowing();

  if (isLoading) return <PageLoader count={12} />;
  if (!notFollowing) return null;
  return <UserList data={notFollowing} />;
};

export default NotFollowing;
