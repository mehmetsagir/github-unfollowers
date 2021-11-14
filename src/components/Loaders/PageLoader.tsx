import React from 'react';
import UserCardLoader from './UserCardLoader';
import { Container as UserList } from '../common/UserList';

const PageLoader = ({ count = 6 }) => {
  return (
    <UserList>
      {Array.from({ length: count }).map((_, index) => (
        <UserCardLoader key={index} />
      ))}
    </UserList>
  );
};

export default PageLoader;
