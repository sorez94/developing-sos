// Final Refactored Version with Flat Product List + showOnProduct filtering
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useParams, notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import products from '@/data/productSections';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'react-toastify';

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >✖</button>
                <img
                    src={`/images/products/${product.categoryPath}/${product.filename}`}
                    alt={product.title}
                    className="w-full rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-gray-600 mb-4">${product.price}</p>
                <Link href={`/${product.locale}/product/${product.categoryPath}/${product.slug}`}>
                    <button className="w-full text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-all">
                        Go to Full Product Page
                    </button>
                </Link>
            </div>
        </div>
    );
};

const ProductSection = ({ categoryPath }) => {
    const locale = useLocale();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categoryProducts = products.filter(p => p.categoryPath === categoryPath && (p.isMain || p.showOnProduct));
    if (!categoryProducts.length) return null;

    const mainImage = categoryProducts.find(p => p.isMain);
    const subImages = categoryProducts.filter(p => !p.isMain);
    const categoryTitle = categoryProducts[0].categoryTitle;

    const openModal = (product) => {
        setSelectedProduct({ ...product, locale });
        setModalOpen(true);
    };

    return (
        <div>
            <Link href={`/${locale}/product/${categoryPath}`}>
                <div
                    className="flex justify-center items-center group text-[32px] md:text-[40px] px-4 md:px-10 mt-8 lg:mt-32 xl:mt-32 2xl:mt-32 mb-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-105 hover:underline hover:underline-offset-4"
                    style={{ color: 'rgb(195 205 177)' }}
                >
                    <span>{categoryTitle}</span>
                    <ArrowRight
                        size={30}
                        className="ml-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                    />
                </div>
            </Link>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full order-1 md:order-2">
                    <Link href={`/${locale}/product/${categoryPath}`}>
                        <img
                            src={`/images/products/${mainImage.categoryPath}/${mainImage.filename}`}
                            className="w-full h-full object-cover px-4 md:pl-10 md:pr-14 mb-4 md:mb-0"
                            alt={mainImage.title}
                        />
                    </Link>
                </div>
                <div className="md:w-1/2 w-full flex flex-wrap order-2 md:order-1">
                    {subImages.map((product, idx) => (
                        <div key={idx} className="w-1/2 flex flex-col mb-4">
                            <img
                                src={`/images/products/${product.categoryPath}/${product.filename}`}
                                alt={product.title}
                                className="w-full h-full object-cover px-4 md:px-10"
                            />
                            <div className='pb-2 pt-2 text-center'>
                                <p className='text-[16px] font-black'>{product.title}</p>
                                <p className='text-[12px]'>{product.description}</p>
                                <p className='text-[16px]'>${product.price}</p>
                                <button
                                    className="mt-2 text-sm text-black hover:text-white bg-[rgb(202,215,178)] px-3 py-1 rounded hover:bg-green-700"
                                    onClick={() => openModal(product)}
                                >
                                    More Info
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProductModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export function SubProductDetailPage() {
    const { category, slug } = useParams();
    const product = products.find(p => p.categoryPath === category && p.slug === slug && !p.isMain);
    if (!product) return notFound();

    const addToCart = useCartStore(state => state.addToCart);
    const cartItems = useCartStore(state => state.items);
    const isAlreadyInCart = cartItems.some(item => item.id === product.id);

    const handleAdd = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: `/images/products/${product.categoryPath}/${product.filename}`,
            quantity: 1
        });
        toast.success('Added to cart!');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 mt-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-3">
                    {product.title}
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    {product.description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/2">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
                        <img
                            src={`/images/products/${product.categoryPath}/${product.filename}`}
                            alt={product.title}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                    {product.highlights && product.highlights.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Highlights</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
                                {product.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Specifications</h2>
                        <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
                            <tbody>
                            <tr className="border-b">
                                <th className="p-2 font-medium">Category</th>
                                <td className="p-2">{product.categoryTitle}</td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium">Product ID</th>
                                <td className="p-2">{product.id}</td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium">Price</th>
                                <td className="p-2">${product.price}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <button
                            onClick={handleAdd}
                            disabled={isAlreadyInCart}
                            className={`mt-4 inline-block px-6 py-2 rounded-xl text-sm font-semibold shadow transition-all
                ${isAlreadyInCart ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-green-600 text-white hover:bg-green-700'}`}
                        >
                            {isAlreadyInCart ? 'Already in Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    const uniqueCategories = [...new Set(products.map(p => p.categoryPath))];
    return (
        <>
            <div className='h-[28px] lg:h-[36px] xl:h-[36px] 2xl:h-[36px]'></div>
            {uniqueCategories.map((path, idx) => (
                <ProductSection key={idx} categoryPath={path} />
            ))}
            <div className='h-[30px]'></div>
        </>
    );
}