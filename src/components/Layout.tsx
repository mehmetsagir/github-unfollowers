import { useAuth0 } from '@auth0/auth0-react';
import Login from '@components/Login';

const Layout: React.FC = ({ children }) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) return null;
  if (!user) return <Login />;

  return (
    <>
      {children}
    </>
  );
};

export default Layout;
