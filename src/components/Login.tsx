import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import GithubIcon from 'svg/github.svg';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <button onClick={() => loginWithRedirect()} className="btn">
        <GithubIcon />
        Log In with GitHub</button>
    </Container>
  );
};

const Container = styled.div<any>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button svg {
    width: 24px;
    margin-right: 10px;    
  }
`;

export default Login;
