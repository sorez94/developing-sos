'use client'
import React from 'react';
import ShopNowButton from "@/components/ui/shopNowButton";

const LandingProduct = () => {
    return (
        <>
            <div className="flex h-screen my-32">
                <div className="w-[25%] flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[64px] font-black tracking-wide">VASES</h1>
                        <p className="text-[20px] font-light tracking-widest mb-12">
                            Nature’s Art, Crafted for Your Home.
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
                <div className="w-[75%]">
                    <img
                        src="/images/landing-products/p2.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex h-screen my-32">
                <div className="w-[75%]">
                    <img
                        src="/images/landing-products/p1.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-[25%] flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[64px] font-black tracking-wide">CANDLES</h1>
                        <p className="text-[20px] font-light tracking-widest mb-12">
                            Where Minimalism Meets Endurance.
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
            </div>
            <div className="flex h-screen my-32">
                <div className="w-[25%] flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[64px] font-black tracking-wide">TABLES</h1>
                        <p className="text-[20px] font-light tracking-widest mb-12">
                            Elevate Your Space with Nature's Touch.
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
                <div className="w-[75%]">
                    <img
                        src="/images/landing-products/p3.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex h-screen my-32">
                <div className="w-[75%]">
                    <img
                        src="/images/landing-products/p4.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-[25%] flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[64px] font-black tracking-wide">TABLES</h1>
                        <p className="text-[20px] font-light tracking-widest mb-12">
                            Minimalist Design, Maximum Impact.
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingProduct;