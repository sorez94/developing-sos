import {useState} from "react";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function ShopNowButton({href}) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href}>
            <div className="inline-block">
                <button
                    className="relative group font-medium text-black hover:text-green-600"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                <span className="flex items-center gap-1">
                    <span
                        className={`
                            transition-none
                            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                        `}
                    >
                        Shop Now
                    </span>
                    <ArrowRight
                        className={`
                            transition-all duration-500 ease-in-out transform
                            ${hovered ? "opacity-100 translate-x-0 text-green-600" : "opacity-0 -translate-x-2 text-black"}
                        `}
                        size={hovered ? 22 : 20} // می‌تونیم هم ثابت بگیریم هم متغیر
                    />
                </span>
                    <span
                        className={`
                        block mt-1 transition-all duration-500 ease-in-out
                        ${hovered ? "w-full bg-green-600" : "w-[80%] bg-black"}
                        h-[1.5px] sm:h-[2px] md:h-[2.5px] lg:h-[3px]
                    `}
                    />
                </button>
            </div>
        </Link>
    );
}
