import React from 'react';
import Image from 'next/image';
import Images from '../../public/Premanand-ji-Maharaj-.avif';

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl py-10 px-4">
            <div className="relative h-72 rounded-lg overflow-hidden">
                {/* Background image */}
                <Image
                    src={Images}
                    alt="billboard"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gray-950 opacity-30" />

                {/* Book image */}
                <div className="absolute bottom-0 right-5">
                    <Image
                        src={'/book.png'}
                        alt="book"
                        width={180}
                        height={288} // keeps aspect ratio
                        className="object-contain drop-shadow-lg"
                        priority
                    />
                </div>

                {/* Text */}
                <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    Connect, Share and Trade Your Favourite Reads...
                </h3>
            </div>
        </div>
    );
};

export default Banner;
