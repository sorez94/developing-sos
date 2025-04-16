'use client'
import React from 'react';
import ShopNowButton from "@/components/ui/shopNowButton";

const LandingProduct = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-screen my-32">
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Nature</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Nature, Green Granite Leather
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
                <div className="lg:w-[70%] w-full">
                    <img
                        src="/images/landing-products/p1.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row h-screen my-32">
                <div className="lg:w-[70%] w-full">
                    <img
                        src="/images/landing-products/p2.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Black Angel</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Hard Rock, Granite Leather
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row h-screen my-32">
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Pyramid Bar</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Rose, Pink Marble
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
                <div className="lg:w-[70%] w-full">
                    <img
                        src="/images/landing-products/p3.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row h-screen mt-32 mb-20">
                <div className="lg:w-[70%] w-full">
                    <img
                        src="/images/landing-products/p4.png"
                        alt="Landing Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[60px] bg-white">
                    <div className="px-6">
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Luna</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Moon Light, White Marble
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingProduct;
