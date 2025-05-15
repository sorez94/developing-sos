// stores/useAuthStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
    name: string
    role: string
    avatar: string
}

interface AuthStore {
    isAuthenticated: boolean
    user: User | null
    login: (user: User) => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (user) => set({ isAuthenticated: true, user }),
            logout: () => set({ isAuthenticated: false, user: null }),
        }),
        { name: 'auth-store' }
    )
)
