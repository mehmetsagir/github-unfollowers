import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'src/hooks/useOnOutSideClick';

const Tabs = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const activeLink = useCallback(
    (link) => {
      if (router.pathname === link) return 'active';
      return '';
    },
    [router.pathname]
  );

  useEffect(() => {
    setIsActive(false);
  }, [router.pathname]);

  const ref = useRef<HTMLElement>();
  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <Container ref={ref}>
      <button className="btn toggle-btn" onClick={() => setIsActive(!isActive)}>
        Menu
      </button>
      <ul className={isActive ? 'active' : ''}>
        <li className={activeLink('/')}>
          <Link href="/">
            <a>Followers</a>
          </Link>
        </li>
        <li className={activeLink('/unfollowers')}>
          <Link href="/unfollowers">
            <a>Unfollowers</a>
          </Link>
        </li>
        <li className={activeLink('/not-following')}>
          <Link href="/not-following">
            <a>You don&#39;t follow</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div<any>`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg);

  * {
    user-select: none;
  }

  .toggle-btn {
    display: none;
  }
  ul {
    display: flex;
    li {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 25px;
      a {
        width: 100%;
        display: block;
        text-align: center;
        padding: 20px 0;
        opacity: 0.3;
        transition: 200ms;
      }
      &.active {
        a {
          opacity: 1;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media (max-width: 370px) {
    padding: 15px 10px;
    .toggle-btn {
      display: flex;
      width: 100%;
    }
    ul {
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
      max-height: 0;
      transition: max-height 250ms;
      &.active {
        opacity: 1;
        visibility: visible;
        max-height: 70vh;
      }
    }
  }
`;

export default Tabs;
