import { createContext } from "react";
import type { ICredentials, IUser } from "../components/auth/auth.contract";

export interface IAuthContext {
  login: (data: ICredentials) => Promise<IUser | void>,
  getLoggedInUser: () => Promise<IUser | void>,
  loggedInUser: undefined | IUser,
  logout: () => void
}

const AuthContext = createContext<IAuthContext>({
  login: async (): Promise<IUser | void> => {},
  getLoggedInUser: async (): Promise<IUser | void> => {},
  loggedInUser: undefined,
  logout: (): void => {}
});

export default AuthContext