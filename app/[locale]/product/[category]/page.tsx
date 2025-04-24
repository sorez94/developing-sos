import productSections from '@/data/productSections';
import productsByCategory from '@/data/productsByCategory';
import {notFound} from 'next/navigation';

export default function ProductCategoryPage({params}) {
    const {category} = params;
    const section = productSections.find((s) => s.path === category);

    if (!section) notFound();

    const products = productsByCategory[section.id] || [];

    return (
        <div className="px-4 md:px-10 py-10">
            <h1
                className="text-4xl md:text-5xl font-extrabold text-center text-[rgb(195_205_177)]
                   mb-12 tracking-tight uppercase"
            >
                {section.title} Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden
             transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-[15px] font-bold text-gray-800 mb-1">{product.name}</p>
                            <p className="text-sm text-gray-500">Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
