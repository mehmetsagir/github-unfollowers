import styled from 'styled-components';
import Image from 'components/common/Image';

type Props = {
  src: string;
  username: string;
  url: string;
};

const UserCard: React.FC<Props> = ({ src, username, url }) => {
  return (
    <Container title={username.length > 14 ? username : null}>
      <Image src={src} alt={username} size="80px" />
      <h4>{username.length > 14 ? `${username.slice(0, 13)}...` : username}</h4>
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        View Profile
      </a>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid var(--color-primary);
  border-radius: 5px;

  @media (max-width: 534px) {
    flex: 1;
    width: 100%;
  }
`;
export default UserCard;
