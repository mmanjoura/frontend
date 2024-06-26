
'use client'

import React, { useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper";
import "swiper/css/thumbs";
import Image from "next/image";

const GalleryGolfSlider = ( {golf}) => {
  if (!golf) return null;
  console.log("Golf on GalleryGolfSlider: ", golf);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="cruiseSlider">
      <Gallery>
        <div className="cruiseSlider-slider relative">
          <div className="d-flex js-cruise-slider">
            <Swiper
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Thumbs, Navigation]}
              navigation={{
                nextEl: ".cruiseSlider__nav.js-next",
                prevEl: ".cruiseSlider__nav.js-prev",
              }}
              lazy={true}
              loop={true}
            >
              {golf?.gallery_images?.map((item, i) => (
                <SwiperSlide key={i}>
                  <Item
                    width={451}
                    height={375}
                    original={item?.img}
                    thumbnail={item?.img}
                  >
                    {({ ref, open }) => (
                      <Image
                        width={451}
                        height={375}
                        src={item?.img}
                        ref={ref}
                        onClick={open}
                        alt="large slide"
                      />
                    )}
                  </Item>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="cruiseSlider__nav -prev js-prev">
              <button className="button -outline-white size-50 flex-center text-white rounded-full"  aria-label="Close">
                <i className="icon-arrow-left" />
              </button>
            </div>
            <div className="cruiseSlider__nav -next js-next">
              <button className="button -outline-white size-50 flex-center text-white rounded-full"  aria-label="Close">
                <i className="icon-arrow-right" />
              </button>
            </div>
          </div>
          {/* End d-flex */}
        </div>
        {/* End relative */}{" "}
      </Gallery>

      <div className="cruiseSlider-slides row x-gap-10 y-gap-10 pt-10 js-cruise-slides">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={6}
          modules={[Thumbs]}
          spaceBetween={12}
        >
          {golf?.gallery_images?.map((item, i) => (
            <SwiperSlide
              key={i}
              className="cruiseSlider-slides__item  rounded-4"
            >
              <Image
                width={150}
                height={109}
                src={item.img}
                alt="small size slide"
                className="h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryGolfSlider;
