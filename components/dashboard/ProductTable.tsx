'use client';

import React from 'react';
import products from '@/data/productSections';

const ProductTable = () => {
    return (
        <div className="p-8 mt-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Image</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Title</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Slug</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Price ($)</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">isMain</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Visible</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <img
                                    src={`/images/products/${product.categoryPath}/${product.filename}`}
                                    alt={product.title}
                                    className="w-20 h-14 object-cover rounded"
                                />
                            </td>
                            <td className="px-6 py-4 text-right">{product.title}</td>
                            <td className="px-6 py-4 text-right">{product.categoryTitle}</td>
                            <td className="px-6 py-4 text-right">{product.slug}</td>
                            <td className="px-6 py-4 text-right">${product.price.toFixed(2)}</td>
                            <td className="px-6 py-4 text-right">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.isMain ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                                        {product.isMain ? 'Yes' : 'No'}
                                    </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.showOnProduct ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                                        {product.showOnProduct ? 'Shown' : 'Hidden'}
                                    </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
