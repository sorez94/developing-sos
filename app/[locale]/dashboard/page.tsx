'use client'

import React from 'react';
import { useAuthStore } from '@/stores/useAuthStore'; // Assuming you're using Zustand for state management
import { useRouter } from 'next/navigation'; // To handle redirection after logout
import { useLocale } from "next-intl"

const DashboardPage = () => {
    const { user, logout } = useAuthStore(state => state); // Get user data and logout function from Zustand store
    const router = useRouter(); // For navigation after logout
    const locale = useLocale();

    if (!user) {
        return <div>Please log in to view the dashboard.</div>; // If user is not logged in
    }

    const handleLogout = () => {
        logout();
        router.push(`/${locale}/account`);
    }

    return (
        <div className="p-8 mt-32">
            <h1 className="text-3xl font-bold mb-4">Hello, {user.name}!</h1>
            <div className="flex items-center mb-6">
                <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <p className="text-lg">Username: {user.name}</p>
                    <p className="text-lg">Role: {user.role}</p>
                </div>
            </div>

            <button
                onClick={handleLogout}
                className="text-white bg-red-500 py-2 px-6 rounded hover:bg-red-700 transition-colors"
            >
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;
