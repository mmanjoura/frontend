'use client';
import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import Header11 from "@/components/header/header-11";
import TopBreadCrumb from "@/components/tour-single/TopBreadCrumb";
import ReplyForm from "@/components/tour-single/ReplyForm";
import ReplyFormReview2 from "@/components/tour-single/ReplyFormReview2";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import Faq from "@/components/faq/Faq";
import Link from "next/link";
import Itinerary from "@/components/tour-single/itinerary";
import ImportantInfo from "@/components/tour-single/ImportantInfo";
import AdditionalInfo from "@/components/tour-single/AdditonalInfo";
import TourGallery from "@/components/tour-single/TourGallery";
import { useToursData } from "@/data/tours-data";
import Golf2 from "@/components/golfs/Golf2";



const TourSingleV1Dynamic = ({ params }) => {
  const id = params.id;
  const toursData = useToursData();
  if (!toursData) return null;

  console.log("Tours on Tour-single page: ", toursData);
  const tour = toursData?.data.find((item) => item.id == id) || toursData[0];

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <TopBreadCrumb tour = {tour}/>
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h1 className="text-30 fw-600">{tour?.title}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex x-gap-5 items-center">
                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>
                    </div>

                    <div className="text-14 text-light-1 ml-10">
                      {tour?.number_of_reviews} reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {tour?.location}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1">
                    <i className="icon-share mr-10"></i>
                    Share
                  </button>
                </div>

              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      <TourGallery tour={tour} />

      {/* End single page content */}
      {ImportantInfo   && (
        <section className="pt-40">
          <div className="container">
            <div className="pt-40 border-top-light">
              <div className="row x-gap-40 y-gap-40">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">
                    {tour?.important_information.split("|").slice(0, 1).map((item, index) => (
                      <div key={index}>
                        <li>{item}</li>
                      </div>
                    ))}
                  </h3>
                </div>
              </div>
              {/* End row */}
              <ImportantInfo tour={tour} />
            </div>
            {/* End pt-40 */}
          </div>
          {/* End .container */}
        </section>
)}

 
      {/* End important info */}
      {/* I only want to render this section if AdditionalInfo have some data */}
      { AdditionalInfo.length > 1   && (
      <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
                <h3 className="text-22 fw-500">
                {tour?.additional_information.split("|").slice(0, 1).map((item, index) => (
                      <div key={index}>
                        <li>{item}</li>
                      </div>
                    ))}
                </h3>
              </div>
            </div>
            {/* End row */}
            <AdditionalInfo tour = {tour} />
          </div>
          {/* End pt-40 */}
        </div>
        {/* End .container */}
      </section>
      )}
      {/* End important info */}

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
          <Itinerary tour = {tour} />
        </div>
      </section>
      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
           <div className="col-md-6">
          <h5 className="text-16 fw-500">Cancellation policy</h5>
          <div className="text-15 mt-10">
            {tour?.cancellation_policy}
          </div>
        </div>
        </div>
      </section>
      
      {/* End Itinerary */}

      <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End .row */}

              <ReplyFormReview2 />
              {/* End ReplyFormReview */}
            </div>
            {/* End .col-xl-3 */}

            <div className="col-xl-8">
              <ReplyForm />
            </div>
            {/* End .col-xl-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Reply Comment box section */}

      <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Golfs in Morocco</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">                  
                Discover Morocco's most popular golf courses, where stunning landscapes and world-class amenities await golf enthusiasts of all levels. 
                Immerse yourself in the captivating beauty of these renowned destinations, 
                offering challenging fairways and unforgettable experiences amidst the rich cultural tapestry of Morocco.
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/golf-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Golf2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
