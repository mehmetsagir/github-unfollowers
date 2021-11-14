import { useEffect, useState } from 'react';
import Axios from 'src/config/axios';
import { useUser } from './useUser';

const useFollowing = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    setFollowing([]);
    for (let i = 1; i <= Math.ceil(user.following / 30); i++) {
      Axios.get(`${user.login}/following?page=${i}`).then((res) => {
        setFollowing((prevState) => [...prevState, ...res.data]);
      });
    }
  }, [user]);

  useEffect(() => {
    if (user.following == following.length) {
      setIsLoading(false);
    }
  }, [following]);
  return {
    isLoading,
    following,
  };
};

export default useFollowing;
