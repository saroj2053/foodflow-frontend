import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: string;
};

interface AuthStore {
  user: User | null;
  token: string | null;
  setUserAndToken: (user: User, token: string) => void;
  clearUserAndToken: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUserAndToken: (user, token) => {
        set({ user, token });
      },
      clearUserAndToken: () => {
        set({ user: null, token: null });
      },
    }),
    { name: "auth" }
  )
);
