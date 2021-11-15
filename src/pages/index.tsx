import type { NextPage } from 'next';
import UserList from 'components/common/UserList';
import useFollowers from 'src/hooks/useFollowers';
import PageLoader from 'components/Loaders/PageLoader';
import { useUser } from 'src/hooks/useUser';
import NotFound from 'components/common/NotFound';

const Home: NextPage = () => {
  const { user } = useUser();
  const { followers, isLoading } = useFollowers();

  if (isLoading)
    return (
      <PageLoader count={user.followers.length > 12 ? 12 : user.folllowers} />
    );
  if (!followers.length)
    return <NotFound text="You have no followers yet. 😔" />;

  return <UserList data={followers} />;
};

export default Home;
