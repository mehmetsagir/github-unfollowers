import { useAuth0 } from '@auth0/auth0-react';
import GithubIcon from '@svg/github.svg';

import styled from 'styled-components';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <button onClick={() => loginWithRedirect()}>
        <GithubIcon />
        Log In with GitHub</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: var(--primary-color);
    color: #f1f1f1;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    border-radius: 5px;
    cursor: pointer;
    transition: 200ms;
    
    svg {
      width: 24px;
      margin-right: 10px;
    }
    
    &:hover {
      background: var(--primary-hover-color);
    }
  }
`;

export default Login;
