import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Tabs = () => {
  const router = useRouter();

  const activeLink = (link) => {
    if (router.pathname === link) {
      return 'active';
    }
    return '';
  };

  return (
    <Container>
      <li>
        <Link href="/">
          <a className={activeLink('/')}>Followers</a>
        </Link>
      </li>
      <li>
        <Link href="/unfollowers">
          <a className={activeLink('/unfollowers')}>Unfollowers</a>
        </Link>
      </li>
      <li>
        <Link href="/follows-back">
          <a className={activeLink('/follows-back')}>Follows Back</a>
        </Link>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;

  li {
    flex: 1;
    padding: 0 25px;
    a {
      display: block;
      text-align: center;
      padding: 10px 0;
      opacity: 0.3;
      transition: 200ms;

      &.active {
        opacity: 1;
        letter-spacing: 1px;
      }
    }
  }
`;

export default Tabs;
