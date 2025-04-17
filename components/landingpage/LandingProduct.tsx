'use client'
import React from 'react';
import ShopNowButton from "@/components/ui/shopNowButton";

const LandingProduct = () => {
    return (
        <>
            <div style={{height: 400}} className="flex flex-col lg:flex-row h-screen my-20 px-[100px]">
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[20px] bg-white">
                    <div>
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Nature</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Nature, Green Granite Leather
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
                <div className="lg:w-[70%] w-full flex justify-end">
                    <img
                        src="/images/landing-products/p1.png"
                        width='85%'
                        alt="Landing Product"
                        className=" h-full object-cover"
                    />
                </div>
            </div>

            <div style={{height: 400}} className="flex flex-col lg:flex-row h-screen my-20 px-[100px]">
                <div className="lg:w-[70%] w-full flex justify-start">
                    <img
                        src="/images/landing-products/p2.png"
                        width='85%'
                        alt="Landing Product"
                        className="h-full object-cover"
                    />
                </div>
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[20px] bg-white">
                    <div>
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Black Angel</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Hard Rock, Granite Leather
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
            </div>

            <div style={{height: 400}} className="flex flex-col lg:flex-row h-screen my-20 px-[100px]">
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[20px] bg-white">
                    <div>
                        <h1 className="text-[48px] lg:text-[56px] font-black tracking-wide">Pyramid Bar</h1>
                        <p className="text-[16px] lg:text-[16px] font-light tracking-widest mb-12">
                            Rose, Pink Marble
                        </p>
                        <ShopNowButton />
                    </div>
                </div>
                <div className="lg:w-[70%] w-full flex justify-end">
                    <img
                        src="/images/landing-products/p3.png"
                        width='85%'
                        alt="Landing Product"
                        className="h-full object-cover"
                    />
                </div>
            </div>

            <div style={{height: 400}} className="flex flex-col lg:flex-row h-screen my-20 px-[100px]">
                <div className="lg:w-[70%] w-full flex justify-start">
                    <img
                        src="/images/landing-products/p4.png"
                        width='85%'
                        alt="Landing Product"
                        className="h-full object-cover"
                    />
                </div>
                <div className="lg:w-[30%] w-full flex items-center justify-start px-[20px] bg-white">
                    <div>
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
