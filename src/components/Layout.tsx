import Login from 'components/Login';
import Profile from 'components/Profile';
import Tabs from './Tabs';
import { useUser } from 'src/hooks/useUser';
import LayoutLoader from './Loaders/LayoutLoader';

const Layout: React.FC = ({ children }) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <LayoutLoader />;
  if (!user) return <Login />;

  return (
    <div className="layout-loader">
      <Profile />
      <div className="content">
        <Tabs />
        {children}
      </div>
    </div>
  );
};

export default Layout;
