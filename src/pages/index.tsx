
import { useAuth0 } from '@auth0/auth0-react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { logout } = useAuth0();
  return (
    <div>
      Next App <br />
      <button onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}>
        Log Out
      </button>
    </div>
  );
};

export default Home;
