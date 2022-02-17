import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'src/config/axios';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type ContextType = {
  user: any;
  isLoading: boolean;
  setUsername: (username: string) => void;
};

export const UserContext = createContext<ContextType>(null);

export const UserContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const { user: userData, isLoading: authLoading } = useAuth0();

  useEffect(() => {
    if (authLoading && !username.length) return;
    if (!userData && !username.length) return setLoading(false);
    if (!username.length) {
      axios.post('/api/user', {
        username: userData?.nickname,
      });
    }

    Axios.get(userData?.nickname || username)
      .then((res) => {
        setUser({ ...res.data, ...userData });
      })
      .finally(() => setLoading(false));
  }, [authLoading, username]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
