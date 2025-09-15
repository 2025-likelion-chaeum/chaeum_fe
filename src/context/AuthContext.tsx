import { postLogout } from '@/apis/Mypage/Mypage';
import { postLogin } from '@/apis/Signup/auth';
import { LOCAL_STORAGE_KEY } from '@/constants/key';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { RequestLoginDto } from '@/types/Signup/auth';
import { createContext, useContext, useState, type PropsWithChildren } from 'react';

interface AuthContextType {
  token: string | null;
  login: (body: RequestLoginDto) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { getItem, setItem, removeItem } = useLocalStorage(LOCAL_STORAGE_KEY.token);

  const [token, setToken] = useState<string | null>(getItem());

  const login = async (body: RequestLoginDto) => {
    try {
      const { data } = await postLogin(body);

      if (data) {
        const newToken = data.token;

        setItem(newToken);
        setToken(newToken);
      }
    } catch (error) {
      console.error('로그인 실패', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await postLogout();

      removeItem();
      setToken(null);

      window.location.href = '/login';
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용되어야 함');
  }

  return context;
};
