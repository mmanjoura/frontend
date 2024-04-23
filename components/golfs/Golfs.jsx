
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import isTextMatched from "../../utils/isTextMatched";
import { useGolfsData } from "@/data/golfs-data";
import { Navigation, Pagination } from "swiper";

const Golfs = () => {
  const golfs = useGolfsData();
  if (!golfs) return null;

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  function ArrowSlick(props) {
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
      <button className={className} onClick={props.onClick}  aria-label="Close">
        {char}
      </button>
    );
  }
  
  
    return (
      <>
         {golfs?.data.slice(0, 4).map((item) => (
          <div
          className="col-xl-3 col-lg-3 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item.animation}
        >
          <Link
            href={`/golf-single/${item.id}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                  {item?.slide_images?.map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content ">
                        <Image
                          width={300}
                          height={300}
                          className="rounded-4 col-12 js-lazy"
                          src={slide?.img}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

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
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            <div className="tourCard__content mt-10">
                  <div className="d-flex items-center lh-14 mb-5">
                    <div className="text-14 text-light-1">
                      {item?.minimum_duration}
                    </div>
                
                    <div className="text-14 text-light-1">{item?.tour_type}</div>
                  </div>
                  <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>{item?.title}</span>
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">
                    {item?.location}
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
                          US${item.price}
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

export default Golfs;
