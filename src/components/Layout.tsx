import Login from 'components/Login';
import styled from 'styled-components';
import Profile from 'components/Profile';
import Tabs from './Tabs';
import { useUser } from 'src/hooks/useUser';

const Layout: React.FC = ({ children }) => {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (!user) return <Login />;

  return (
    <Container>
      <Profile />
      <div className="content">
        <Tabs />
        {children}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;

  .content {
    margin-left: 40px;
    padding: 40px 0;
    flex: 1;
  }
`;

export default Layout;
