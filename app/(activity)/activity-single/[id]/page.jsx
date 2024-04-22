'use client';
import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import DefaultHeader from "@/components/header/default-header";
import Overview from "@/components/activity-single/Overview";
import TourSnapShot from "@/components/activity-single/TourSnapShot";
import TopBreadCrumb from "@/components/activity-single/TopBreadCrumb";
import ReplyForm from "@/components/reply-form/ReplyForm";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import Tours from "@/components/tours/Tours";
import Faq from "@/components/faq/Faq";
import Link from "next/link";
import ImportantInfo from "@/components/activity-single/ImportantInfo";
import SlideGallery from "@/components/activity-single/SlideGallery";
import axios from "axios";
import Itinerary from "@/components/activity-single/itinerary";
import SidebarRight from "@/components/activity-single/SidebarRight";
import { useEffect, useState } from "react";
import Constants from "@/utils/constants";




const ActivitySingleV1Dynamic = ({ params }) => {

  const [activities, setActivities] = useState(null);
  const id = params.id;


  useEffect(() => {
    axios.get(`${Constants.baseURL}/activities`).then((response) => {
      setActivities(response?.data);
    });
  }, []);
  if (!activities) return null;

  const activity = activities?.data?.find((item) => item.id == id);

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <TopBreadCrumb activity = {activity} />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <SlideGallery activity={activity}/>
        </div>
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{activity?.title}</h1>
                  <div className="row x-gap-10 y-gap-20 items-center pt-10">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <i className="icon-star text-10 text-yellow-1"></i>
                        <i className="icon-star text-10 text-yellow-1"></i>
                        <i className="icon-star text-10 text-yellow-1"></i>
                        <i className="icon-star text-10 text-yellow-1"></i>
                        <i className="icon-star text-10 text-yellow-1"></i>

                        <div className="text-14 text-light-1 ml-10">
                          <span className="text-15 fw-500 text-dark-1">
                            {activity?.number_of_reviews}
                          </span>
                          {activity?.number_of_reviews} reviews
                        </div>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-auto">
                      <div className="row x-gap-10 items-center">
                        <div className="col-auto">
                          <div className="d-flex x-gap-5 items-center">
                            <i className="icon-location-2 text-16 text-light-1"></i>
                            <div className="text-15 text-light-1">
                              {activity?.location}
                            </div>
                          </div>
                        </div>

                 
                      </div>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
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

              <h3 className="text-22 fw-500 mt-40">Activity snapshot</h3>
              <TourSnapShot activity = {activity}/>
              {/* End toursnapshot */}
              <div className="border-top-light mt-40 mb-40"></div>

              <Overview activity={activity}/>
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight activity={activity} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
              </div>
            </div>
            {/* End row */}
            <ImportantInfo activity = {activity}/>
          </div>
          {/* End pt-40 */}
        </div>
        {/* End .container */}
      </section>
      {/* End important info */}
      
      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
          <Itinerary props = {activity} />
        </div>
      </section>


      {/* End Itinerary */}

      <section className="pt-40">
        <div className="container">
        <div className="col-md-6">
          <h5 className="text-16 fw-500">Cancellation policy</h5>
          <div className="text-15 mt-10">
            {activity?.cancellation_policy}
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
                  <Faq props={activity}/>
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

              {/* <ReplyFormReview2 /> */}
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
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
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

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(ActivitySingleV1Dynamic), {
  ssr: false,
});
