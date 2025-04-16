import React from 'react';
import Link from "next/link";

const Copyright = () => {
    return (
        <div style={{backgroundColor: '#CAD7B2'}} className='flex flex-col items-center justify-center gap-2 py-4'>
            <h1 className='text-[11px]'> Designed By <Link href='https://www.sorez.org/' target='_blank'><span style={{color: '#457EAB'}}>So</span><span>Rez</span></Link></h1>
            <p className='text-[9px]'>Copyright@SenseOfStone.co 2025</p>
        </div>
    );
};

export default Copyright;