import styled from 'styled-components';
import GithubIcon from 'svg/github.svg';

const LayoutLoader = () => (
  <Loader>
    <GithubIcon />
    <span>Github Unfollowers</span>
  </Loader>
);

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  svg {
    width: 120px;
    height: 120px;
    fill: rgba(255, 255, 255, 0.3);
    animation: opacity 500ms ease-in-out forwards;
  }
  span {
    display: block;
    margin-top: 25px;
    color: rgba(255, 255, 255, 0.3);
    font-size: 28px;
    font-weight: bolder;
    animation: opacity 500ms ease-in-out forwards;
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 500px) {
    svg {
      width: 80px;
      height: 80px;
    }
    span {
      font-size: 20px;
    }
  }
`;

export default LayoutLoader;
