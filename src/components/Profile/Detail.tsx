import styled from 'styled-components';
import FollowerIcon from 'svg/followers.svg';

type Props = {
  name: string;
  username: string;
  bio?: string;
  followers: string;
  following: string;
  url: string;
};

const Detail: React.FC<Props> = ({
  name,
  username,
  bio,
  followers,
  following,
  url,
}) => {
  return (
    <Container>
      <div>
        <h4>{name}</h4>
        <h6>{username}</h6>
      </div>
      <div className="wrapper">
        {bio && <p className="bio">{bio}</p>}
        <a
          href={url}
          className="btn view-profile"
          target="_blank"
          rel="noreferrer"
        >
          View Profile
        </a>
        <ul className="followers-info">
          <li>
            <FollowerIcon />
            {followers || 0}
            <span>followers</span>
          </li>
          <li>
            {following || 0}
            <span>following</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
  h4 {
    font-size: 28px;
    font-weight: 500;
  }
  h6 {
    font-size: 18px;
    color: var(--color-text-secondary);
  }
  .view-profile {
    margin-top: 14px;
  }
  .bio {
    margin: 10px 0;
    font-size: 16px;
  }
  .followers-info {
    margin: 16px 0;
    display: flex;

    li {
      position: relative;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;

      svg {
        fill: #8b949e;
      }
      span {
        color: #8b949e;
      }
      &:not(:last-child) {
        margin-right: 20px;
        &::before {
          content: '';
          position: absolute;
          right: -11px;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.7;
        }
      }
    }
  }

  @media (max-width: 1050px) {
    margin-top: 0;
    margin-left: 20px;

    div {
      flex: 1;
    }
    .bio {
      margin: 4px 0;
    }
    .followers-info {
      margin: 0;
    }
    .view-profile {
      display: none;
    }
  }
  @media (max-width: 720px) {
    margin: 10px 0;
  }
`;

export default Detail;
