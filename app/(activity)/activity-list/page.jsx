'use client'
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/activity-list/activity-list/TopHeaderFilter";
import ActivityProperties from "@/components/activity-list/activity-list/ActivityProperties";
import Pagination from "@/components/activity-list/common/Pagination";
import Sidebar from "@/components/activity-list/activity-list/Sidebar";
import { useActivitiesData } from "@/data/activities-data";


const index = () => {
  const activities = useActivitiesData();
  if (!activities) return null;
  console.log("Home Page activities Data: ", activities);
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <ProductHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar activities = {activities}/>
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Activity
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar activities = {activities}/>
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter activities = {activities}/>
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <ActivityProperties activities = {activities}/>
              </div>
              {/* End .row */}
              {/* <Pagination activities = {activities}/> */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
