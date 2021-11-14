import Login from 'components/Login';
import styled from 'styled-components';
import Profile from 'components/Profile';
import Tabs from './Tabs';
import { useUser } from 'src/hooks/useUser';
import LayoutLoader from './Loaders/LayoutLoader';

const Layout: React.FC = ({ children }) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <LayoutLoader />;
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
  width: var(--size);
  margin: 0 auto;
  display: flex;
  padding: 0 25px;

  .content {
    margin-left: 40px;
    padding: 30px 8px;
    flex: 1;
  }

  @media (max-width: 1050px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
    .content {
      margin-left: 0;
      padding: 30px 0;
    }
  }
`;

export default Layout;
