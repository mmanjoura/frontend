
'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import isTextMatched from "../../../utils/isTextMatched";
import Link from "next/link";

const GolfProperties = ({golfs}) => {

  return (
    <>
      {golfs?.data?.map((item) => (
        <div
          key={item?.id}
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <Link
            href={`/golf-single/${item.id}`}
            className="cruiseCard -type-1 rounded-4 "
          >
            <div className="cruiseCard__image position-relative">
              <div className="carCard__image">
                <div className="cardImage ratio ratio-6:5">
                  <div className="cardImage__content custom_inside-slider">
                    <Swiper
                      className="mySwiper"
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {item?.images?.map((slide, i) => (
                        <SwiperSlide key={i}>
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={slide.img}
                            alt="image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                {/* End cartImage */}

                <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2"  aria-label="Close">
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                      isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                    }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>

              <div className="cardImage__wishlist">
                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2"  aria-label="Close">
                  <i className="icon-heart text-12" />
                </button>
              </div>

              <div className="cardImage__leftBadge">
              <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "Best Seller")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "Likely to sell out*")
                        ? "bg-blue-1 text-white"
                        : ""
                    } 
                    } ${
                      isTextMatched(item?.tag, "-25% today")
                        ? "bg-brown-1 text-white"
                        : ""
                    } 
                     ${
                       isTextMatched(item?.tag, "top rated")
                         ? "bg-yellow-1 text-dark-1"
                         : ""
                     }   ${
                      isTextMatched(item?.tag, "New Package")
                        ? "bg-blue-1 text-white"
                        : ""
                    }`}
                  >
                  {item.tag}
                </div>
              </div>
            </div>
            {/* End .tourCard__image */}

            <div className="tourCard__content mt-10">
                  <div className="d-flex items-center lh-14 mb-5">
                    <div className="text-14 text-light-1">
                      {item?.minimum_duration}
                    </div>


                  </div>
                  <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>{item?.title.substring(0, 30)} ...</span>
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">
                    {item?.location.substring(0, 30)}
                  </p>

                  <div className="row justify-between items-center pt-15">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center x-gap-5">
                          <div className="icon-star text-yellow-1 text-10" />
                          <div className="icon-star text-yellow-1 text-10" />
                          <div className="icon-star text-yellow-1 text-10" />
                          <div className="icon-star text-yellow-1 text-10" />
                          <div className="icon-star text-yellow-1 text-10" />
                        </div>
                        {/* End ratings */}

                        <div className="text-14 text-light-1 ml-10">
                          {item?.number_of_reviews} reviews
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-16 fw-500 text-dark-1">
                          {" "}
                          US ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default GolfProperties;
