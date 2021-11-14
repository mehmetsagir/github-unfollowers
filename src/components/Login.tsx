import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GithubIcon from 'svg/github.svg';

const Login = () => {
  const [count, setCount] = useState(0);
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    axios.get('/api/user').then((res) => {
      setCount(res.data);
    });
  }, []);

  return (
    <Container>
      <button onClick={() => loginWithRedirect()} className="btn">
        <GithubIcon />
        Log In with GitHub
      </button>
      {count > 0 && <p className="info">{count} users are using this app.</p>}
      <small>
        During login, your username will be saved so that we can get the number
        of users using the site.
      </small>
    </Container>
  );
};

const Container = styled.div<any>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button svg {
    width: 24px;
    margin-right: 10px;
  }

  .info {
    font-size: 13px;
    text-align: center;
    color: var(--color-text-secondary);
    opacity: 0.5;
    font-weight: 300;
    margin: 10px 10px 0;
  }

  small {
    font-size: 10px;
    max-width: 250px;
    text-align: center;
    color: var(--color-text-secondary);
    opacity: 0.5;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin: 10px;
  }
`;

export default Login;
