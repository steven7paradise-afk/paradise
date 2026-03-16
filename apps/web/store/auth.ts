import { create } from 'zustand';

type Role = 'admin' | 'manager' | 'employee' | null;

type AuthState = {
  userId: string | null;
  companyId: string | null;
  role: Role;
  setAuth: (payload: { userId?: string | null; companyId?: string | null; role?: Role }) => void;
  reset: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  companyId: null,
  role: null,
  setAuth: (payload) => set((state) => ({ ...state, ...payload })),
  reset: () => set({ userId: null, companyId: null, role: null })
}));
