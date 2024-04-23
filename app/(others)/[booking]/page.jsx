import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import Booking from "@/components/booking/page";




export const metadata = {
  title: "Niya Voyage - Explore Marrakech Activities, Tours, Golf, and Holidays in Morocco",
  description: 
    "Discover the best activities, tours, and golf experiences in Marrakech with Niya Voyage. Book your tickets online and explore the top attractions and destinations in Morocco. Your trusted travel agency for unforgettable holidays in Marrakech and beyond.",
};


const intdex = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* End Why Choose Us section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Booking />
          </div>
        </div>
      </section>
      {/* End about block section */}


      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(intdex), { ssr: false });
