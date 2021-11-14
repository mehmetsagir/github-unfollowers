import type { NextPage } from 'next';
import UserList from 'components/common/UserList';
import useUnfollowers from 'src/hooks/useUnfollowers';
import React from 'react';
import PageLoader from 'components/Loaders/PageLoader';

const Unfollowers: NextPage = () => {
  const { unfollowers, isLoading } = useUnfollowers();

  if (isLoading) return <PageLoader count={7} />;
  if (!unfollowers) return null;
  return <UserList data={unfollowers} />;
};

export default Unfollowers;
