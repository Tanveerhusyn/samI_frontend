import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                <h1 className="hidden md:block absolute transition duration-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-40 text-white text-4xl md:text-8xl font-bold uppercase">Unleash the Extraordinary</h1>

  <img src="/slide-11.jpeg" 
   className="aspect-[16/10] md:aspect-[25/10] object-cover" alt="Bracelets" />
   <p style={{fontFamily:'Sacramento',fontSize:'40px'}} className="hidden md:block text-lg text-white absolute bottom-40 left-1/2 transform -translate-x-1/2">Elevate your style with our exquisite collection</p>

  <button className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 bg-white text-black/[0.9] text-xl md:text-xl font-medium uppercase px-8 py-2 md:py-4 rounded hover:opacity-90 cursor-pointer">Shop Now</button>
  
</div>

                <div>
                    <img
                        src="/s1.jpeg"
                        className="aspect-[16/10] md:aspect-[25/10] object-cover"

                    />
                    {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div> */}
                </div>

                <div>
                    <img
                        src="/s.jpeg"
                        className="aspect-[16/10] md:aspect-[25/10] object-cover"
                    />
                    {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div> */}
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;
