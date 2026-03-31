import React, { lazy, useState } from "react";

import retouchingaftermage from '../../assets/retouching after.jpg';
import hdrblendingafter from '../../assets/hdr blending after.jpg';
import skyreplacementafter from '../../assets/sky replacement after.jpg';
import objectremovelafter from '../../assets/object removel after.jpg';
import colorcorectionafter from '../../assets/color corection after.jpg';
import windowpullafter from '../../assets/window pull after.jpg';
import droneafter from '../../assets/drone after.jpg';
import heroAfter from '../../assets/heroAfter.jpg';
import HDRAfter from '../../assets/HDRAfter.jpg';
import IMG_1123 from '../../assets/IMG_1123-HDR.jpg';
import IMG_1378 from '../../assets/IMG_1378-HDR.jpg';
import IMG_1408 from '../../assets/IMG_1408-HDR.jpg';
import IMG_1757 from '../../assets/IMG_1757-HDR after.jpg';
import IMG_1760 from '../../assets/IMG_1760-HDR after.jpg';
import IMG_1784 from '../../assets/IMG_1784-HDR after.jpg';
import IMG_1811 from '../../assets/IMG_1811-HDR.jpg';

const images = [
   IMG_1811,
  retouchingaftermage,
 hdrblendingafter,
  skyreplacementafter,
    IMG_1123,
  objectremovelafter,
  colorcorectionafter,
  windowpullafter,
    IMG_1378,
  droneafter,
  IMG_1757,
  IMG_1760,
  IMG_1784,
  heroAfter,
  HDRAfter,
  IMG_1408
];

const PinterestGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="p-4">
      <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white my-15'>REAL ESTATE PHOTO | <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent inline-flex'>GALLERY</span></h1>
      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt="gallery"
              loading="lazy"
              className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="preview"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default PinterestGallery;