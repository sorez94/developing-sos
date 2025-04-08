import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ShopNowButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="inline-block">
            <button
                className="relative group text-lg font-medium text-black hover:text-green-600"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
        <span className="flex items-center gap-1">
          <span className="transition-none">Shop Now</span>
          <ArrowRight
              className={`transition-all duration-500 ease-in-out transform ${
                  hovered ? "opacity-100 translate-x-0 text-green-600" : "opacity-0 -translate-x-2 text-black"
              }`}
              size={24}
          />
        </span>
                <span
                    className={`block h-[2px] mt-1 transition-all duration-500 ease-in-out ${
                        hovered ? "w-full bg-green-600" : "w-[80%] bg-black"
                    }`}
                />
            </button>
        </div>
    );
}
