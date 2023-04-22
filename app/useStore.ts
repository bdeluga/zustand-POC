import { create } from "zustand";

interface UserStore {
  user: {
    name: string;
    balance: number;
    image: string;
  } | null;
  logIn: () => void;
  logOut: () => void;
  gamble: (value: number) => void;
}

export const userStore = create<UserStore>((set) => ({
  user: null,
  logIn: async () =>
    await fetch("/user.json")
      .then((response) => response.json())
      .then((res) => set({ user: res.user })),
  logOut: () => set({ user: null }),
  gamble: (value) =>
    set((state) => ({
      user: state.user && {
        ...state.user,
        balance: state.user.balance + value,
      },
    })),
}));

interface HistoryStore {
  history: {
    id: string;
    value: number;
  }[];
  addHistory: (value: number) => void;
}

export const historyStore = create<HistoryStore>((set) => ({
  history: [],
  addHistory: (value: number) =>
    set((state) => ({
      history: [...state.history, { id: Date.now().toString(), value }],
    })),
}));
