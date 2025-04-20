'use client'
import React from 'react';
import ShopNowButton from "@/components/ui/shopNowButton";

const LandingProduct = () => {
    return (
        <>
            <div className=" h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex flex-row h-screen px-[20px] my-4 lg:my-20 xl:my-20 2xl:my-20 lg:px-[100px] xl:px-[100px] 2xl:px-[100px] px-[10px]">
                <div className="w-[30%] flex items-center justify-start px-[5px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-white">
                    <div>
                        <h1 className="text-[16px] lg:text-[56px] font-black tracking-wide">Nature</h1>
                        <p className="text-[10px] lg:text-[16px] font-light tracking-widest mb-12">
                            Nature, Green Granite Leather
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
                <div className="w-[70%] flex justify-end">
                    <img
                        src="/images/landing-products/p1.png"
                        width='85%'
                        alt="Landing Product"
                        className=" h-full object-cover"
                    />
                </div>
            </div>

            <div className="h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex flex-row my-4 lg:my-20 xl:my-20 2xl:my-20 px-[20px] h-screen lg:px-[100px] xl:px-[100px] 2xl:px-[100px] px-[10px]">
                <div className="w-[70%] flex justify-start">
                    <img
                        src="/images/landing-products/p2.png"
                        width='85%'
                        alt="Landing Product"
                        className="h-full object-cover"
                    />
                </div>
                <div className="w-[30%] flex items-center justify-start px-[5px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-white">
                    <div>
                        <h1 className="text-[16px] lg:text-[56px] font-black tracking-wide">Black Angel</h1>
                        <p className="text-[10px] lg:text-[18px] font-light tracking-widest mb-12">
                            Hard Rock, Granite Leather
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
            </div>

            <div className=" h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex flex-row h-screen my-4 lg:my-20 xl:my-20 2xl:my-20 px-[20px] lg:px-[100px] xl:px-[100px] 2xl:px-[100px] px-[10px]">
                <div className="w-[30%] flex items-center justify-start px-[5px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-white">
                    <div>
                        <h1 className="text-[16px] lg:text-[56px] font-black tracking-wide">Pyramid Bar</h1>
                        <p className="text-[10px] lg:text-[16px] font-light tracking-widest mb-12">
                            Rose, Pink Marble
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
                <div className="w-[70%] flex justify-end">
                    <img
                        src="/images/landing-products/p3.png"
                        width='85%'
                        alt="Landing Product"
                        className=" h-full object-cover"
                    />
                </div>
            </div>

            <div className="h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex flex-row px-[20px] h-screen my-4 lg:my-20 xl:my-20 2xl:my-20 lg:px-[100px] xl:px-[100px] 2xl:px-[100px] px-[10px]">
                <div className="w-[70%] flex justify-start">
                    <img
                        src="/images/landing-products/p4.png"
                        width='85%'
                        alt="Landing Product"
                        className="h-full object-cover"
                    />
                </div>
                <div className="w-[30%] flex items-center justify-start px-[5px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-white">
                    <div>
                        <h1 className="text-[16px] lg:text-[56px] font-black tracking-wide">Luna</h1>
                        <p className="text-[10px] lg:text-[18px] font-light tracking-widest mb-12">
                            Moon Light, White Marble
                        </p>
                        <ShopNowButton/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingProduct;
