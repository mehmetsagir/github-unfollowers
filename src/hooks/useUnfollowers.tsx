import { useEffect, useState } from 'react';
import useFollowers from './useFollowers';
import useFollowing from './useFollowing';

const useUnfollowers = () => {
  const [unfollowers, setUnfollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { followers, isLoading: followersLoader } = useFollowers();
  const { following, isLoading: followingLoader } = useFollowing();

  useEffect(() => {
    if (!followingLoader && !followersLoader) {
      setUnfollowers([]);
      following.forEach((followingUser) => {
        if (
          !followers.find((follower) => follower.login === followingUser.login)
        ) {
          setUnfollowers((prevState) => [...prevState, followingUser]);
        }
      });
      setIsLoading(false);
    }
  }, [followersLoader, followingLoader]);

  return {
    unfollowers,
    isLoading,
  };
};

export default useUnfollowers;
