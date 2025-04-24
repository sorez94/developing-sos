'use client'

import { useCartStore } from '@/stores/cartStore'

export default function CartPage() {
    const { items, removeFromCart, clearCart } = useCartStore()
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="px-6 py-20 max-w-5xl mx-auto mt-20">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Your Shopping Cart</h1>

            {items.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {items.map(item => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-5 rounded-2xl shadow-md transition hover:shadow-lg"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 rounded-xl object-cover border"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                        <p className="text-sm text-gray-500">
                                            ${item.price.toFixed(2)} × {item.quantity}
                                        </p>
                                        <p className="text-sm font-bold text-green-600 mt-1">
                                            Total: ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-sm text-red-600 hover:text-red-800 font-medium border border-red-300 px-4 py-1.5 rounded-full hover:bg-red-50 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <p className="text-xl font-bold text-gray-800">
                            Total: <span className="text-green-600">${total.toFixed(2)}</span>
                        </p>

                        <button
                            onClick={clearCart}
                            className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow hover:bg-red-700 transition-all"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
