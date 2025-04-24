import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
    id: number
    title: string
    price: number
    quantity: number
    image: string
}

interface CartStore {
    items: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addToCart: (item) =>
                set((state) => {
                    const existing = state.items.find(i => i.id === item.id)
                    if (existing) {
                        return {
                            items: state.items.map(i =>
                                i.id === item.id
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i
                            )
                        }
                    }
                    return { items: [...state.items, item] }
                }),
            removeFromCart: (id) =>
                set((state) => ({
                    items: state.items.filter(i => i.id !== id)
                })),
            clearCart: () => set({ items: [] })
        }),
        {
            name: 'cart-storage', // کلید ذخیره در localStorage
        }
    )
)
