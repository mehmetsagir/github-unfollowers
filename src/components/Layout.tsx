import { useAuth0 } from '@auth0/auth0-react';
import Login from 'components/Login';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) return null;
  if (!user) return <Login />;

  return (
    <Container>
      <div className="profile">
        <div className="profile-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={user.picture} alt={user.name} />
        </div>
        <div className="profile-detail">
          <h4>{user.name}</h4>
          <h6>{user.nickname}</h6>
          <p>{user.birthdate}</p>
          <a href={`https://github.com/${user.nickname}`} className="btn" target="_blank" rel="noreferrer">View Profile</a>
        </div>
        <button onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })} className="btn log-out-btn">Log Out</button>
      </div>
      {children}
    </Container >
  );
};

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .profile {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 250px;
    padding: 40px 0;
    &-image {
      position: relative;
      *::selection {
        background: none;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    &-detail {
      margin-top: 10px;
      h4 {
        font-size: 28px;
        font-weight: 500;
      }
      h6 {
        font-size: 18px;
        color: var(--color-text-secondary);
      }
      a {
        margin-top: 14px;
      }
    }
    .log-out-btn {
      width: 100%;
      margin-top: 100%;
    }
  }

`;

export default Layout;
