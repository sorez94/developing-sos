import React from 'react';
import Image from "next/image";
import {Instagram} from "lucide-react";

const Footer = () => {
    return (
        <div
            style={{backgroundColor: "rgb(202 215 178)"}}
            className="flex justify-between items-start pb-10 px-20"
        >
            <div className='flex flex-col justify-center items-center w-[30%] mt-10'>
                <Image src='/logo.png' alt='logo' width={127} height={110}/>
                <h1 className='text-[rgb(128,135,113)] mt-2'> Sense Of Stone</h1>
            </div>
            <div className='w-[30%] mt-10 px-12'>
                <h1 className='mb-8 text-[20px] '> About Us</h1>
                <p className='text-[12px] text-[rgb(79,79,79)]'>
                    Lorem ipsum dolor sit amet consectetur. Luctus risus eget scelerisque commodo. Feugiat quis dictum
                    amet vel habitant dolor mi.
                </p>
            </div>
            <div className='w-[30%] mt-10  px-12'>
                <h1 className='mb-8 text-[20px]'>Contact Us</h1>
                <div className="flex flex-col items-start ">
                    <div className="flex items-center gap-2 mb-1">
                        <Image src="/icons/whatsapp.png" alt="whatsapp" width={18} height={18}/>
                        <a
                            href="https://wa.me/+989127116788"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-[14px]'
                        >
                            <p className='text-[rgb(79,79,79)]'>+98 912 711 6788</p>
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <Image src="/icons/whatsapp.png" alt="whatsapp" width={18} height={18}/>
                        <a
                            href="https://wa.me/+989124845654"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-[14px]'
                        >
                            <p className='text-[rgb(79,79,79)]'>+98 912 484 5654</p>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/icons/instagram.png" alt="instagram" width={18} height={18}/>
                        <a
                            href="https://www.instagram.com/SenseOfStone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-[14px]'
                        >
                            <p className='text-[rgb(79,79,79)]'>SenseOfStone</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-[30%] mt-10  px-12'>
                <h1 className='mb-8 text-[20px]'> Address </h1>
                <p className='text-[12px] text-[rgb(79,79,79)]'>
                    No 73, Modern Center, Eastern Yaft Abad, Tehran, Iran
                </p>
            </div>
            <div className='w-[30%] mt-10'>
                <div className='flex gap-4 justify-center'>
                    <Image src='/images/footer/neshan.png' alt='neshan' width={90} height={90}/>
                    <Image src='/images/footer/enamd.png' alt='enamad' width={90} height={90}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
