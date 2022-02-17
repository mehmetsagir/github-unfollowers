import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useUser } from 'src/hooks/useUser';
import styled from 'styled-components';
import GithubIcon from 'svg/github.svg';
import LoginIcon from 'svg/login.svg';

const Login = () => {
  const [widthoutLogin, setWidthoutLogin] = useState(false);
  const [githubUsername, setGithubUsername] = useState('');
  const { setUsername } = useUser();
  const { loginWithRedirect } = useAuth0();

  const login = (e) => {
    if (e.code === 'Enter' && githubUsername.length) {
      setUsername(githubUsername);
    }
  };

  return (
    <Container>
      {widthoutLogin ? (
        <div className="input-box">
          {githubUsername && <span>@</span>}
          <input
            type="text"
            placeholder="Enter your Github username"
            value={githubUsername}
            onChange={({ target }) => setGithubUsername(target.value)}
            onKeyPress={login}
          />
          <button onClick={login}>
            <LoginIcon />
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()} className="btn">
          <GithubIcon />
          Log In with GitHub
        </button>
      )}
      <button
        className="change-login"
        onClick={() => setWidthoutLogin(!widthoutLogin)}
      >
        {widthoutLogin ? 'Continue by signing in' : 'Continue without login'}
      </button>
      <small>
        During login, your username will be saved so that we can get the number
        of users using the site.
      </small>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button svg {
    width: 24px;
    margin-right: 10px;
  }

  .change-login {
    margin-top: 5px;
    color: var(--color-text-secondary);
    font-size: 12px;
    cursor: pointer;
    transition: 200ms;

    &:hover {
      color: var(--color-text);
    }
  }

  .input-box {
    display: flex;
    align-items: center;
    width: 270px;
    height: 40px;
    border: 1px solid var(--color-primary);
    background: none;
    border-radius: 4px;
    color: var(--color-text-secondary);
    padding-left: 10px;

    span,
    input {
      font-weight: 300;
    }

    input {
      border: 0;
      background: none;
      flex: 1;
      height: 100%;
      padding-right: 10px;
      font-size: 14px;
      letter-spacing: 0.7px;
    }

    svg {
      width: 24px;
      margin: 0 10px;
    }

    button {
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      cursor: pointer;
      opacity: 0.6;
    }
  }

  .info {
    font-size: 13px;
    text-align: center;
    color: var(--color-text-secondary);
    opacity: 0.5;
    font-weight: 300;
    margin: 5px 10px 0;
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
