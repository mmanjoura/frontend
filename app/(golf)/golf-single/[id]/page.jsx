'use client';
import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import Header11 from "@/components/header/header-11";
import Overview from "@/components/golf-single/Overview";
import TopBreadCrumb from "@/components/golf-single/TopBreadCrumb";
import SidebarRight from "@/components/golf-single/SidebarRight";
import ReviewProgress from "@/components/golf-single/guest-reviews/ReviewProgress";
import DetailsReview from "@/components/golf-single/guest-reviews/DetailsReview";
import ReplyForm from "@/components/golf-single/ReplyForm";
import ReplyFormReview from "@/components/golf-single/ReplyFormReview";
import Facilities from "@/components/golf-single/Facilities";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import MapPropertyFinder from "@/components/golf-single/MapPropertyFinder";
import GalleryGolfSlider from "@/components/golf-single/GalleryGolfSlider";
import { useGolfsData } from "@/data/golfs-data";
import Itinerary from "@/components/golf-single/itinerary";
import Faq from "@/components/faq/Faq";


const GofSingleV1Dynamic = ({ params }) => {
  const id = params.id;
  const golfsData = useGolfsData();
  if (!golfsData) return null;

  console.log("Activities on Activity-single page: ", golfsData);
  const golf = golfsData?.data.find((item) => item.id == id);

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <TopBreadCrumb golf = {golf}/>
      {/* End top breadcrumb */}

     
      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h1 className="text-30 fw-600">{golf?.title}</h1>
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
                      {golf?.number_of_reviews} reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {golf?.location}
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
      {/* End top gallery header section */}

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <GalleryGolfSlider golf = {golf}/>
              {/* End gallery grid wrapper */}

              <Overview golf = {golf} />
              {/* End Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight golf={golf} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}



      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
          <Itinerary props = {golf} />
        </div>
      </section>
      {/* End MapPropertyFinder */}
      

      <section className="pt-40">
        <div className="container">
        <div className="col-md-6">
          <h5 className="text-16 fw-500">Cancellation policy</h5>
          <div className="text-15 mt-10">
            {golf?.cancellation_policy}
          </div>
        </div>
        </div>
      </section>

           {/* End Faq about sections */}
        <section className="mt-40">
        <div className="container ">
          <div className="pt-40 border-top-light">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  FAQs
                
                </h2>
              </div>
              {/* End .row */}

              <div className="col-lg-8">
                <div
                  className="accordion -simple row y-gap-20 js-accordion"
                  id="Faq1"
                >
                  <Faq props={golf}/>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .pt-40 */}
        </div>
        {/* End .container */}
      </section>


      <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Guest reviews</h3>
            </div>
          </div>
          {/* End .row */}

          <ReviewProgress />
          {/* End review with progress */}

          <div className="pt-40">
            {/* <DetailsReview /> */}
            {/* End review with details */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* End container */}
      </section>
      {/* End Review section */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End .row */}

              <ReplyFormReview />
              {/* End ReplyFormReview */}

              <ReplyForm />
            </div>
          </div>
        </div>
      </section>
      {/* End Reply Comment box section */}

      {/* End facilites section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(GofSingleV1Dynamic), {
  ssr: false,
});
