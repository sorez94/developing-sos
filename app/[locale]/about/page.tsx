"use client";

import Banner from "@/components/aboutus/Banner";

export default function Page() {
    return (
        <>
            <Banner/>
            <section className="py-16 max-w-5xl mx-auto mt-32 text-gray-800">
                <h1> COMPANY PROFILE </h1>
                <div className="flex items-center justify-center gap-4">
                    <img src='/images/about-us/about-us-company.jpg'/>
                    <div>
                        <div className='mb-10'>
                            <h1> ABOUT </h1>
                            <h1 className='border-b w-fit border-solid border-black'> US </h1>
                        </div>
                        <p> Kamer Marble has been established in 1989, is one of the leading companies of Turkish stone
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
                            products, increasing in production capacity & quality and customer satisfaction. </p>
                    </div>
                </div>
            </section>
            <section className="flex w-full">
                <img className='w-full' src='/images/about-us/mission.jpg'/>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='mb-10 w'>
                        <h1 className='border-b w-fit border-solid border-black'> MISSION </h1>
                    </div>
                    <p> Kamer Marble is dedicated to producing and exporting the Natural Stone with the highest
                        quality standards and providing the best customer services by pursuing business through
                        innovation and advanced technology. </p>
                </div>
            </section>
            <section className="flex py-16 max-w-5xl mx-auto mt-32 text-gray-800">
                <img src='/images/about-us/vision.jpg'/>
                <div>
                    <div className='mb-10'>
                        <h1 className='border-b w-fit border-solid border-black'> VISION </h1>
                    </div>
                    <p>Kamer Marble will the preferred partner in natural stone business providing the highest quality
                        and exclusive products that exceeds the expectations of our esteemed customers worldwide.</p>
                </div>
            </section>
        </>

    );
}
