import type { NextPage } from 'next';
import UserList from 'components/common/UserList';
import useFollowers from 'src/hooks/useFollowers';
import PageLoader from 'components/Loaders/PageLoader';
import { useUser } from 'src/hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();
  const { followers, isLoading } = useFollowers();

  if (isLoading)
    return (
      <PageLoader count={user.followers.length > 12 ? 12 : user.folllowers} />
    );
  if (!followers) return null;

  return <UserList data={followers} />;
};

export default Home;
