'use client';

import React from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import DashboardProductTable from "@/components/dashboard/DashboardProductTable";
import ProductTable from "@/components/dashboard/ProductTable";

const DashboardPage = () => {
    const { user, logout } = useAuthStore(state => state);
    const router = useRouter();
    const locale = useLocale();

    if (!user) {
        return <div className="text-center mt-32 text-gray-600 text-xl">Please log in to view the dashboard.</div>;
    }

    const handleLogout = () => {
        logout();
        router.push(`/${locale}/account`);
    };

    return (
        <div className="p-8 mt-32 mx-auto bg-white rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-center">Hello dear {user.name}!</h1>

            <div className="flex items-center justify-center mb-10">
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full shadow-md border-4 border-gray-200"
                />
            </div>
            <DashboardProductTable/>
            <ProductTable />
        </div>
    );
};

export default DashboardPage;
