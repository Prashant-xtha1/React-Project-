import { useState, type ReactNode } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials, IUser } from "../../components/auth/auth.contract";
import axiosInstance from "../../config/axios.config";
import Cookies from "js-cookie";

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {

  const [ loggedInUser, setLoggedInUser ] = useState<IUser>()

  const login = async (credentials: ICredentials): Promise<IUser | void> => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      Cookies.set("token", response.data , {
        expires: 1, secure: true, sameSite: "Lax"
      })
      // console.log(response)
      const userResponse = await getLoggedInUser()
      return userResponse;
    } catch {
      
    }
  }

  const getLoggedInUser = async (): Promise<IUser | void> => {
    try {
      const userDetail = await axiosInstance.get('/auth/me');
      setLoggedInUser(userDetail.data)
      return userDetail.data
    } catch {
      
    }
  }

  return (<>
    <AuthContext.Provider value={{
      login,
      getLoggedInUser,
      loggedInUser
    }}>
      {children}
    </AuthContext.Provider>
  </>)
}