
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import isTextMatched from "../../utils/isTextMatched";
import { useGolfsData } from "@/data/golfs-data";
import { Navigation, Pagination } from "swiper";

const Golf2 = () => {
  const golfs = useGolfsData();
  if (!golfs) return null;
  console.log("Home Page golfs Data: ", golfs)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-populars-tour-next",
          prevEl: ".js-populars-tour-prev",
        }}
        pagination={{
          el: ".js-tour-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {golfs?.data?.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id}>
            <div
              key={item?.id}
              data-aos="fade"
              data-aos-delay={item?.animation}
            >
              <Link
                href={`/golf-single/${item.id}`}
                className="tourCard -type-1 rounded-4"
              >


                <div className="" style={{ height: '100px !important' }}>
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


                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${isTextMatched(item?.tag, "likely to sell out*")
                          ? "bg-dark-1 text-white"
                          : ""
                        } ${isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                        }  ${isTextMatched(item?.tag, "New Program")
                          ? "bg-blue-1 text-white"
                          : ""
                        } ${isTextMatched(item?.tag, "top rated")
                          ? "bg-yellow-1 text-dark-1"
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
                    <span>{item?.title.substring(0, 15)} ...</span>
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">
                    {item?.location.substring(0, 24)}
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-populars-tour-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-tour-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-populars-tour-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default Golf2;
