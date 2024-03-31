
'use client'

import Image from "next/image";
import { useCommentsData } from "@/data/comments-data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";


const Testimonial = () => {
  const comments = useCommentsData();
  if (!comments) return null;
  return (
    <>
      <Swiper
        scrollbar={{
          el: ".js-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar]}
      >
        {comments?.data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="row items-center x-gap-15 y-gap-20">
              <div className="col-auto">
                <Image
                  width={40}
                  height={40}
                  src= "/img/general/logo.png"
                  alt="image"
                  className="js-lazy rounded-circle"
                />
              </div>
              <div className="col-auto">
                <h5 className="text-16 fw-500">{item.subject}</h5>
                <div className="text-15 text-light-1 lh-15">
                  {/* {item.designation} */}
                </div>
              </div>
            </div>
            <p className="mt-20">
              {item.message}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag">
        <div className="text-dark-1 fw-500 js-current">01</div>
        <div className="slider-scrollbar bg-border ml-20 mr-20 w-max-300 js-scrollbar" />
        <div className="text-dark-1 fw-500 js-all">{comments?.data?.length}</div>
      </div>
    </>
  );
};

export default Testimonial;
