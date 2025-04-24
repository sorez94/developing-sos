'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {useLocale} from "next-intl";
import productSections from '@/data/productSections';
import {ArrowRight} from "lucide-react";

const ProductModal = ({ isOpen, onClose, subImage, productPath }) => {
    if (!isOpen || !subImage) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    ✖
                </button>
                <img src={`/images/products/${productPath}/${subImage.filename}`} alt={subImage.title}
                     className="w-full rounded-lg mb-4" />
                <h2 className="text-xl font-bold mb-2">{subImage.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                    {subImage.description}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                    {subImage.price}
                </p>
                <Link href={`/${useLocale()}/product/${productPath}/${subImage.slug}`}>
                    <button className="w-full text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-all">
                        Go to Full Product Page
                    </button>
                </Link>
            </div>
        </div>
    );
};

const ProductSection = ({title, mainImage, subImages, path}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const locale = useLocale();

    const [selectedSubImage, setSelectedSubImage] = useState(null);

    const openModal = (img) => {
        setSelectedSubImage(img);
        setModalOpen(true);
    };

    return (
        <div>
            <Link href={`/${locale}/product/${path}`}>
                <div className="flex justify-center items-center group
                  text-[32px] md:text-[40px] px-4 md:px-10 mt-8 lg:mt-32 xl:mt-32 2xl:mt-32 mb-4
                  cursor-pointer transition-all duration-300 ease-in-out
                  hover:text-green-200 hover:scale-105 hover:underline hover:underline-offset-4"
                     style={{ color: 'rgb(195 205 177)' }}>
                    <span>{title}</span>
                    <ArrowRight
                        size={30}
                        className="ml-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                    />
                </div>
            </Link>

            <div className="flex flex-col md:flex-row">
                {/* main image comes first on mobile */}
                <div className="md:w-1/2 w-full order-1 md:order-2">
                    <Link href={`/${locale}/product/${path}`}>
                        <img src={`/images/products/${path}/${mainImage}`}
                             className="w-full h-full object-cover px-4 md:pl-10 md:pr-14 mb-4 md:mb-0"/>
                    </Link>
                </div>

                {/* sub images come second on mobile */}
                <div className="md:w-1/2 w-full flex flex-wrap order-2 md:order-1">
                    {subImages.map((img, idx) => (
                        <div key={idx} className="w-1/2 flex flex-col mb-4">
                            <img src={`/images/products/${path}/${img.filename}`} alt=""
                                 className="w-full h-full object-cover px-4 md:px-10"/>
                            <div className='pb-2 pt-2 text-center'>
                                <p className='text-[16px] font-black'>{img.title}</p>
                                <p className='text-[12px]'>{img.description}</p>
                                <p className='text-[16px]'>{img.price}</p>
                                <button
                                    className="mt-2 text-sm text-black hover:text-white bg-[rgb(202,215,178)] px-3 py-1 rounded hover:bg-green-700"
                                    onClick={() => openModal(img)}
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
                subImage={selectedSubImage}
                productPath={path}
            />
        </div>
    );
};

const Page = () => {
    return (
        <>
            <div className='h-[28px] lg: h-[36px] xl: h-[36px] 2xl: h-[36px]'></div>
            {productSections.map((section, i) => (
                <ProductSection key={i} {...section} />
            ))}
            <div className='h-[30px]'></div>
        </>
    );
};

export default Page;
