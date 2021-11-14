import React, { useState } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import InfiniteScroll from 'react-infinite-scroller';

const UserList = ({ data }) => {
  const [count, setCount] = useState(30);

  const handleLoadMore = () => {
    if (count >= data.length) return;
    setCount(count + 30);
  };

  if (!data) return null;

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={count < data.length}
    >
      <Container>
        {[...data].splice(0, count).map(({ avatar_url, login, html_url }) => (
          <UserCard
            key={login}
            src={avatar_url}
            username={login}
            url={html_url}
          />
        ))}
      </Container>
    </InfiniteScroll>
  );
};

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1050px) {
    justify-content: center;
    padding: 0 10px;
  }
`;

export default UserList;
