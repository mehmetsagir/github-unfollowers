import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from 'src/hooks/useUser';
import styled from 'styled-components';
import Image from './common/Image';
import About from './Profile/About';
import Detail from './Profile/Detail';

const Profile = () => {
  const { logout } = useAuth0();
  const { user } = useUser();
  return (
    <Container>
      <div className="profile">
        <div>
          <Image src={user.avatar_url} alt={user.name} />
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
      </div>
      <button
        onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}
        className="btn log-out-btn"
      >
        Log Out
      </button>
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

  .log-out-btn {
    width: 100%;
  }
`;

export default Profile;
