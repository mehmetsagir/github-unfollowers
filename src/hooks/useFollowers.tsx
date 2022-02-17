import { useEffect, useState } from 'react';
import Axios from 'src/config/axios';
import { useUser } from './useUser';

const useFollowers = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setFollowers([]);
    for (let i = 1; i <= Math.ceil(user.followers / 30); i++) {
      Axios.get(`/${user.login}/followers?page=${i}`).then((res) => {
        setFollowers((prevState) => [...prevState, ...res.data]);
      });
    }
  }, []);

  useEffect(() => {
    if (user.followers == followers.length) {
      setIsLoading(false);
    }
  }, [followers]);

  return {
    followers,
    isLoading,
  };
};

export default useFollowers;
