import { Container as CardStyles } from '../common/UserCard';
import ContentLoader from 'react-content-loader';

const UserCardLoader = () => {
  return (
    <CardStyles style={{ maxWidth: 158 }}>
      <ContentLoader
        speed={2}
        width={80}
        height={80}
        backgroundColor="#191e26"
        foregroundColor="#151922"
      >
        <circle cx="40" cy="40" r="40" />
      </ContentLoader>
      <div
        style={{
          maxWidth: '75%',
        }}
      >
        <ContentLoader
          speed={2}
          width="100%"
          height={17}
          backgroundColor="#191e26"
          foregroundColor="#151922"
        >
          <rect x="0" y="0" rx="4" ry="4" width="100%" height="17" />
        </ContentLoader>
      </div>
      <ContentLoader
        speed={2}
        width="100%"
        height={40}
        backgroundColor="#191e26"
        foregroundColor="#151922"
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="40" />
      </ContentLoader>
    </CardStyles>
  );
};

export default UserCardLoader;
