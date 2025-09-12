import { User } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (user: Partial<User>) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => set({ user }),

      updateUser: (patch) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, ...patch }
            : { username: patch.username ?? "", email: patch.email ?? "" },
        })),

      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // key in localStorage
    }
  )
);
