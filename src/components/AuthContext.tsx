import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createContext, useState, ReactNode, useEffect } from 'react';


// Define the shape of our context state
export interface AuthContextData {
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
  
  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setIsLoggedIn(Boolean(session))
    })

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session))
    })

    return () => subscription.unsubscribe()
  }, [])
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, client: supabase }}>
      {children}
    </AuthContext.Provider>
    );
}
