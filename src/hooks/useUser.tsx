import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'src/config/axios';
import { createContext, useContext, useEffect, useState } from 'react';

type ContextType = {
  user: any;
  isLoading: boolean;
};

export const UserContext = createContext<ContextType>(null);

export const UserContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const { user: userData, isLoading: authLoading } = useAuth0();

  useEffect(() => {
    if (authLoading) return;
    if (!userData) return setLoading(false);

    Axios.get(userData.nickname)
      .then((res) => {
        setUser({ ...res.data, ...userData });
      })
      .finally(() => setLoading(false));
  }, [authLoading]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
