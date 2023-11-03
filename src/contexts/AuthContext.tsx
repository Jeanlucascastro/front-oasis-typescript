"use client"
import { SetStateAction, createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

type User = {
  name: string;
  email: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<any>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then((response: { user: SetStateAction<User | null>; }) => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)
    console.log('user', user)

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}