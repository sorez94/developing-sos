'use client';

import React from 'react';
import landingProductData from '@/data/landingProductData';

const DashboardProductTable = () => {
    return (
        <div className="p-8 mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Landing Products</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Image</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Title</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Subtitle</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Slug</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Align</th>
                    </tr>
                    </thead>
                    <tbody>
                    {landingProductData.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-14 object-cover rounded"
                                />
                            </td>
                            <td className="px-6 py-4 text-right">{item.title}</td>
                            <td className="px-6 py-4 text-right">{item.subtitle}</td>
                            <td className="px-6 py-4 text-right">{item.categoryPath}</td>
                            <td className="px-6 py-4 text-right">{item.slug}</td>
                            <td className="px-6 py-4 text-right capitalize">{item.align}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardProductTable;
