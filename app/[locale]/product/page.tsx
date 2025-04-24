'use client'
import React, { useState } from 'react';

const ProductModal = ({ isOpen, onClose, image }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    ✖
                </button>
                <img src={image} alt="modal" className="w-full rounded-lg mb-4" />
                <h2 className="text-xl font-bold mb-2">Product Details</h2>
                <p className="text-sm text-gray-600">
                    This is a detailed description of the product. You can customize this with price, dimensions, materials, etc.
                </p>
            </div>
        </div>
    );
};

const ProductSection = ({ title, mainImage, subImages, path }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (img) => {
        setSelectedImage(`/images/products/${path}/${img}`);
        setModalOpen(true);
    };

    return (
        <div>
            <h1 style={{ color: 'rgb(195 205 177)' }}
                className='text-[32px] md:text-[40px] px-4 md:px-10 mt-14 md:mt-20 mb-4 text-center'>
                {title}
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full">
                    <img src={`/images/products/${path}/${mainImage}`} alt=""
                         className="w-full h-full object-cover px-4 md:pl-10 md:pr-14 mb-4 md:mb-0" />
                </div>
                <div className="md:w-1/2 w-full flex flex-wrap">
                    {subImages.map((img, idx) => (
                        <div key={idx} className="w-1/2 flex flex-col mb-4">
                            <img src={`/images/products/${path}/${img}`} alt=""
                                 className="w-full h-full object-cover px-4 md:px-10" />
                            <div className='pb-2 pt-2 text-center'>
                                <p className='text-[14px] font-black'>head</p>
                                <p className='text-[12px]'>Lorem Ipsum has been the industry's standard dummy text</p>
                                <button
                                    className="mt-2 text-sm text-black hover:text-white  bg-[rgb(202,215,178)] px-3 py-1 rounded hover:bg-green-700"
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
                image={selectedImage}
            />
        </div>
    );
};

const Page = () => {
    return (
        <>
            <ProductSection title="TABLES" mainImage="01.jpg" subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]} path="tables" />
            <ProductSection title="ACCESSORIES" mainImage="01.jpg" subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]} path="accessories" />
            <ProductSection title="MIRRORS" mainImage="01.jpg" subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]} path="mirrors" />
            <ProductSection title="PLATES" mainImage="01.jpg" subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]} path="plates" />
            <ProductSection title="POTS" mainImage="01.jpg" subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]} path="pots" />
            <div className='h-[30px]'></div>
        </>
    );
};

export default Page;
