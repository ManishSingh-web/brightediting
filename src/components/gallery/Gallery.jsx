import React, {useState } from "react";

import HDR_Edit_optimize from '../../assets/IMG_3946-HDR-Edit_optimize.jpg';
import skyreplacementafter from '../../assets/sky replacement after.jpg';
import objectremovelafter from '../../assets/object removel after.jpg';

import droneafter from '../../assets/drone after.jpg';
import heroAfter from '../../assets/heroAfter.jpg';
import HDRAfter from '../../assets/HDRAfter.jpg';
import IMG_1123 from '../../assets/IMG_1123-HDR.jpg';
import IMG_1378 from '../../assets/IMG_1378-HDR.jpg';

import IMG_1757 from '../../assets/IMG_1757-HDR after.jpg';
import IMG_1760 from '../../assets/IMG_1760-HDR after.jpg';
import IMG_1784 from '../../assets/IMG_1784-HDR after.jpg';
import IMG_1811 from '../../assets/IMG_1811-HDR.jpg';

import HDR_new_after from '../../assets/HDR new after.jpg';
import _02A2319_HDR_Edit from '../../assets/_02A2319-HDR-Edit.jpg';
import _02A2345_HDR_Edit from '../../assets/02A2345-HDR-after.jpg';
import PICC5395 from '../../assets/PICC5395-HDR-Edit.jpg';
import PICC5449 from '../../assets/PICC5449-HDR-Edit.jpg';
import PICC5458 from '../../assets/PICC5458-HDR-Edit.jpg';
import PICC5467 from '../../assets/PICC5467-HDR-Edit.jpg';
import _02A0947 from '../../assets/_02A0947-HDR-Edit.jpg';
import _02A0979 from '../../assets/_02A0979-HDR-Edit-2.jpg';
import _02A1001 from '../../assets/_02A1001-HDR-Edit.jpg';
import _02A1173 from '../../assets/_02A1173.jpg';
import _02A1358 from '../../assets/_02A1358.jpg';
import _02A1370 from '../../assets/_02A1370.jpg';
import _02A1410 from '../../assets/_02A1410.jpg';
import _02A1421 from '../../assets/_02A1421.jpg';
import _02A1447 from '../../assets/_02A1447.jpg';
import _02A1511 from '../../assets/_02A1511.jpg';


const images = [
  HDR_Edit_optimize,
   IMG_1811,
  skyreplacementafter,
    IMG_1123,
  objectremovelafter,
  IMG_1378,
  droneafter,
  IMG_1757,
  IMG_1760,
  IMG_1784,
  heroAfter,
  HDRAfter,
  HDR_new_after,
  _02A2319_HDR_Edit,
  _02A2345_HDR_Edit,
  PICC5395,
  PICC5449,
  PICC5458,
  PICC5467,
  _02A0947,
  _02A0979,
  _02A1001,
  _02A1173,
  _02A1358,
  _02A1370,
  _02A1410,
  _02A1421,
  _02A1447,
  _02A1511
];

const PinterestGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="p-4">
      <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white my-15'>REAL ESTATE PHOTO | <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent inline-flex'>GALLERY</span></h1>
      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
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