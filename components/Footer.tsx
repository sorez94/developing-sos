import React from 'react';
import Image from "next/image";
import {Instagram} from "lucide-react";

const Footer = () => {
    return (
        <>
            <div
                style={{backgroundColor: "rgb(202 215 178)"}}
                className="flex pb-10 "
            >
                <div className='w-[33%] mt-10 px-4 lg:px-12 xl:px-12 2xl:px-12 flex flex-col items-center justify-start border-r-2 border-r-[#bbc3ab]'>
                    <h1 className='mb-8 text-[14px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] '> Address </h1>
                    <p className='text-[8px] text-[rgb(79,79,79)] text-center'>
                        No 73, Modern Center, Eastern Yaft Abad, Tehran, Iran
                    </p>
                </div>
                <div className='w-[33%] mt-10 px-4 lg:px-12 xl:px-12 2xl:px-12 flex flex-col items-center justify-start border-r-2 border-r-[#bbc3ab]'>
                    <h1 className='mb-8 text-[14px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] '> About Us</h1>
                    <p className='text-[8px] text-[rgb(79,79,79)] text-center'>
                        Lorem ipsum dolor sit amet consectetur. Luctus risus eget scelerisque commodo. Feugiat quis
                        dictum
                        amet vel habitant dolor mi.
                    </p>
                </div>
                <div className='w-[33%] mt-10 px-4 lg:px-12 xl:px-12 2xl:px-12 flex flex-col items-center justify-start'>
                    <h1 className='mb-8 text-[14px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] '>Contact Us</h1>
                    <div className="flex flex-col items-start ">
                        <div className="flex items-center gap-2 mb-1">
                            <img src="/icons/whatsapp.png" alt="whatsapp" className='w-[14px] lg:w-[18px] xl:w-[18px] 2xl:w-[18px]'/>
                            <a
                                href="https://wa.me/+989127116788"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-[14px]'
                            >
                                <p className='text-[rgb(79,79,79)] text-[10px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]'>+98 912 711 6788</p>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <img src="/icons/whatsapp.png" alt="whatsapp"
                                 className='w-[14px] lg:w-[18px] xl:w-[18px] 2xl:w-[18px]'/>
                            <a
                                href="https://wa.me/+989124845654"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-[14px]'
                            >
                                <p className='text-[rgb(79,79,79)] text-[10px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]'>+98 912 484 5654</p>
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/icons/instagram.png" alt="instagram" className='w-[14px] lg:w-[18px] xl:w-[18px] 2xl:w-[18px]'/>
                            <a
                                href="https://www.instagram.com/SenseOfStone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-[14px]'
                            >
                                <p className='text-[rgb(79,79,79)] text-[10px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]'>SenseOfStone</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[50px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px] flex items-center justify-center bg-[rgb(202,215,178)]'>
                <div className='flex gap-4'>
                    <Image src='/images/footer/neshan.png' alt='neshan' className='w-[40px] lg:w-[90px] xl:w-[90px] 2xl:w-[90px]' width={90} height={90} />
                    <Image src='/images/footer/enamd.png' alt='enamad' className='w-[40px] lg:w-[90px] xl:w-[90px] 2xl:w-[90px]' width={90} height={90} />
                </div>
            </div>
        </>
    );
};

export default Footer;
