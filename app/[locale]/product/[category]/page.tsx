// Updated ProductCategoryPage.jsx
'use client';

import products from '@/data/productSections'
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {useLocale} from 'next-intl';

export default function ProductCategoryPage({params}) {
    const {category} = params;
    const locale = useLocale();

    const categoryProducts = products.filter(p => p.categoryPath === category);
    if (categoryProducts.length === 0) notFound();

    const visibleProducts = categoryProducts.filter(p => !p.isMain);
    const sectionTitle = categoryProducts[0]?.categoryTitle;

    return (
        <div className="px-4 md:px-10 py-10 lg:mt-32 xl:mt-32 2xl:mt-32 mt-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[rgb(195_205_177)] mb-12 tracking-tight uppercase">
                {sectionTitle} Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {visibleProducts.map(product => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={`/images/products/${product.categoryPath}/${product.filename}`}
                                alt={product.title}
                                className="w-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-[15px] font-bold text-gray-800 mb-1">{product.title}</p>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <p className="text-[15px] text-green-700 font-semibold mt-1">${product.price.toFixed(2)}</p>

                            <Link
                                href={`/${locale}/product/${product.categoryPath}/${product.slug}`}
                                className="inline-block mt-3 text-sm text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition-all"
                            >
                                Go to Full Product Page
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
