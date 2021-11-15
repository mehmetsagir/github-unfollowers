import PageLoader from 'components/Loaders/PageLoader';
import UserList from 'components/common/UserList';
import React from 'react';
import useNotFollowing from 'src/hooks/useNotFollowing';
import NotFound from 'components/common/NotFound';

const NotFollowing = () => {
  const { notFollowing, isLoading } = useNotFollowing();

  if (isLoading) return <PageLoader count={12} />;
  if (!notFollowing.length)
    return <NotFound text="You follow all your followers. 🥳" />;
  return <UserList data={notFollowing} />;
};

export default NotFollowing;
