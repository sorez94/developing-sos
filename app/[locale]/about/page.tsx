"use client";

import Banner from "@/components/aboutus/Banner";

export default function Page() {
    return (
        <>
            <Banner />
            <h1 className='text-center text-[22px] md:text-[26px] leading-[26px] my-[60px] md:my-[100px] px-4 whitespace-break-spaces'>
                COMPANY PROFILE
            </h1>

            <section className="py-16 px-4 max-w-5xl mx-auto pt-[10px] pb-[80px] md:pb-[110px] text-gray-800">
                <div className="flex flex-col md:flex-row gap-8">
                    <img src='/images/about-us/about-us-company.jpg' alt="Company" className="w-full md:w-1/2 object-cover" />
                    <div className="md:w-1/2">
                        <div className='mb-10 md:ml-6'>
                            <h1 className='text-[#4b4e53] text-[36px] md:text-[55px] leading-tight'>ABOUT</h1>
                            <h1 className='text-[#4b4e53] text-[36px] md:text-[55px] leading-tight'>US</h1>
                            <div className='bg-[#4b4e53] mt-4 h-[3px] w-[100px]'></div>
                        </div>
                        <p className="text-[14px] whitespace-pre-wrap">
                            {`Kamer Marble has been established in 1989, is one of the leading companies of Turkish stone
business and specialized in producing the premium quality slabs and variable finished goods
of Marble&Onyx&Travertine. Kamer Marble constantly search for the best blocks especially in
Turkey, beside that, importing the raw materials from all over the world and producing with
high-tech machines and experted craftmanship to reach the best result for the customer
satisfaction.

Being an export-oriented company, Kamer Marble has already established a well-reputed name
in the international market for its commitment in quality and exclusive stones. The Goal is
to supply the highest quality products and provide the best customer service to maintain
maximum satisfaction. This has been approved by increasing number of customers in the world.

We are extremely proud to move into our newly factory with 26.000 squaremeter closed area in
36.000m2 in total land starting from July 2021.
The new factory provides more space with the larger production and stockyard area and with
additional dry lay area.
The larger, modern and high tech facility allowing us to continue producing great quality
products, increasing in production capacity & quality and customer satisfaction.`}
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row w-full">
                <div className="md:w-1/2 w-full flex flex-col mx-auto px-4 md:px-[50px] pt-[60px] md:pt-[145px] pb-[60px] md:pb-[140px] max-w-[500px]">
                    <div className="mb-10">
                        <h1 className='text-[#4b4e53] text-[32px] md:text-[45px] leading-tight'>MISSION</h1>
                        <div className='mt-4 h-[3px] w-[100px] bg-[#4b4e53]'></div>
                    </div>
                    <p className="text-[14px]">
                        Kamer Marble is dedicated to producing and exporting the Natural Stone with the highest
                        quality standards and providing the best customer services by pursuing business through
                        innovation and advanced technology.
                    </p>
                </div>
                <img className="md:w-1/2 w-full object-cover" src="/images/about-us/mission.jpg" alt="Mission" />
            </section>

            <section className="flex flex-col-reverse md:flex-row w-full">
                <img className="md:w-1/2 w-full object-cover" src="/images/about-us/vision.jpg" alt="Vision" />
                <div className="md:w-1/2 w-full flex flex-col mx-auto px-4 md:px-[50px] pt-[60px] md:pt-[145px] pb-[60px] md:pb-[140px] max-w-[500px]">
                    <div className="mb-10">
                        <h1 className='text-[#4b4e53] text-[32px] md:text-[45px] leading-tight'>VISION</h1>
                        <div className='mt-4 h-[3px] w-[100px] bg-[#4b4e53]'></div>
                    </div>
                    <p className="text-[14px]">
                        Kamer Marble will the preferred partner in natural stone business providing the highest quality
                        and exclusive products that exceeds the expectations of our esteemed customers worldwide.
                    </p>
                </div>
            </section>
        </>
    );
}
