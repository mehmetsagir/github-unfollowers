import { useEffect, useState } from 'react';
import useFollowers from './useFollowers';
import useFollowing from './useFollowing';

const useNotFollowing = () => {
  const [notFollowing, setNotFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { followers, isLoading: followersLoader } = useFollowers();
  const { following, isLoading: followingLoader } = useFollowing();

  useEffect(() => {
    if (!followingLoader && !followersLoader) {
      setNotFollowing([]);
      followers.forEach((followerUser) => {
        if (
          !following.find((follower) => follower.login === followerUser.login)
        ) {
          setNotFollowing((prevState) => [...prevState, followerUser]);
        }
      });
      setIsLoading(false);
    }
  }, [followersLoader, followingLoader]);

  return {
    notFollowing,
    isLoading,
  };
};

export default useNotFollowing;
