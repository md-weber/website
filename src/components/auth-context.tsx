import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createContext, useState, ReactNode, useEffect } from 'react';


// Define the shape of our context state
export interface AuthContextData {
  userId: string;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  client: SupabaseClient
}

// Define the shape of our provider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEY);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  
  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setIsLoggedIn(Boolean(session))
      setUserId(session.user.id)
    })

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session))
      setUserId(session.user.id)
    })

    return () => subscription.unsubscribe()
  }, [])
  
  return (
    <AuthContext.Provider value={{ userId, isLoggedIn, setIsLoggedIn, client: supabase }}>
      {children}
    </AuthContext.Provider>
    );
}
