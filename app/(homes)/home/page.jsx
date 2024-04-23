import dynamic from "next/dynamic";
import DefaultHeader from "@/components/header/default-header";
import Hero from "@/components/hero/hero";
import Link from "next/link";
import Footer4 from "@/components/footer/footer-4";
import Tours from "@/components/tours/Tours";
import TourCategories from "@/components/home/home/TourCategories";
import CallToActions from "@/components/home/home/CallToActions";
import Golfs from "@/components/golfs/Golfs";
import DiscountsBanner from "@/components/home/home/DiscountsBanner";
import WhyChooseUs from "@/components/home/home/WhyChooseUs";
import Testimonial from "@/components/home/home/Testimonial";
import TestimonialLeftCol from "@/components/home/home/TestimonialLeftCol";
import Activities from "@/components/activities/Activities";


export const metadata = {
  title: "Niya Voyage - Explore Marrakech Activities, Tours, Golf, and Holidays in Morocco",
  description: 
    "Discover the best activities, tours, and golf experiences in Marrakech with Niya Voyage. Book your tickets online and explore the top attractions and destinations in Morocco. Your trusted travel agency for unforgettable holidays in Marrakech and beyond.",
};


const home = () => {

  return (
    <>
      {/* End Page Title */}

      <DefaultHeader />
      {/* End Header 5 */}

      <Hero />
      {/* End Hero 5 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Premier Golfing Destinations in Morocco</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Embark on an unforgettable golfing journey in Morocco, where lush greens meet stunning landscapes, promising an experience of a lifetime filled with leisure and excitement. 
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="./golf-list"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                golf-list <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Golfs />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Discover our most popular tours, curated to provide unforgettable experiences and memories that last a lifetime. 
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="./tour-list"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                tour-list <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top-rated Activities</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Explore our most sought-after activities, meticulously curated to offer unforgettable adventures and memories that will endure a lifetime. 
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="./activity-list"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                activity-list <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activities />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
     
      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>

      <CallToActions />
      {/* End CallToActions */}

      <Footer4 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home), { ssr: false });
