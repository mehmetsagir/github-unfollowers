import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from 'src/hooks/useUser';
import styled from 'styled-components';
import Image from '../common/Image';
import About from './About';
import Detail from './Detail';

const Profile = () => {
  const { logout } = useAuth0();
  const { user } = useUser();
  return (
    <Container>
      <div className="profile">
        <Image src={user.avatar_url} alt={user.name} size="250px" />
        <Detail
          name={user.name}
          username={user.login}
          bio={user.bio}
          followers={user.followers}
          following={user.following}
          url={user.html_url}
        />
        <About
          company={user.company}
          location={user.location}
          email={user.email}
          blog={user.blog}
          twitter={user.twitter_username}
        />
      </div>
      <div className="actions">
        <a href={user.html_url} className="btn view-profile">
          View Profile
        </a>
        <button
          onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}
          className="btn log-out-btn"
        >
          Log Out
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 250px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-bg);
  z-index: 4;

  .actions {
    .view-profile {
      display: none;
    }
    .log-out-btn {
      width: 100%;
    }
  }

  @media (max-width: 1050px) {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: max-content;
    padding: 40px 50px;

    .profile {
      display: flex;

      img {
        width: 100px;
        height: 100px;
      }
    }
    .actions {
      flex-shrink: 0;
      display: flex;
      gap: 20px;

      .view-profile {
        display: flex;
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    .profile {
      width: 100%;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .actions {
      margin-top: 5px;
      gap: 10px;
      .btn {
        flex: 1;
      }
    }
  }

  @media (max-width: 370px) {
    padding: 20px 10px;
    .actions {
      flex-direction: column;
      .btn {
        flex: auto;
      }
    }
  }
`;

export default Profile;
