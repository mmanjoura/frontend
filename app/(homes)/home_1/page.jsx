import dynamic from "next/dynamic";
import AddBanner from "@/components/add-banner/AddBanner";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import DefaultFooter from "@/components/footer/default";
import Header1 from "@/components/header/header-1";
import Hero1 from "@/components/hero/hero-1";
import BlockGuide from "@/components/block/BlockGuide";
// import Blog from "@/components/blog/Blog3";
import CallToActions from "@/components/common/CallToActions";
import Destinations from "@/components/home/home-1/Destinations";
import Testimonial from "@/components/home/home-1/Testimonial";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
import Hotels from "@/components/hotels/Hotels";
import SelectFilter from "@/components/hotels/filter-tabs/SelectFilter";

export const metadata = {
  title: "Niya Voyage - Activities, Tours, Golf in Morocco",
  description: `
  french version:
    Découvrez les meilleures activités au Maroc avec Niya Voyage. Réservez vos billets en ligne pour les meilleures choses à faire au Maroc sur Niya Voyage.
    Agence de voyage Marrakech, Voyage Maroc, Tourisme Marrakech, Découverte Maroc, Séjour Marrakech, Circuit Maroc, Week-end Marrakech, Vacances Maroc
    Voyage sur mesure Maroc, Agence de voyage locale Maroc, Voyage culturel Marrakech, Voyage aventure Maroc, Voyage détente Marrakech
    Voyage gastronomique Maroc , Voyage de luxe Maroc, Voyage en famille Maroc, Voyage solo Maroc, Voyage pour seniors Maroc, Voyage accessible Maroc
    Voyage écologique Maroc, Marrakech et ses environs, Désert marocain, Atlas marocain, Fes et Meknès, Côte atlantique du Maroc, Sud marocain
    Voyagez autrement, Découvrez le Maroc authentique, Créez votre voyage sur mesure, Votre partenaire voyage au Maroc, Laissez-vous guider par nos experts
   
    
    English version:
    Discover the best activities in Morocco with Niya Voyage. Book your tickets online for the top things to do in Morocco on Niya Voyage.
    Travel Agency in Marrakech, Travel in Morocco, Tourism in Marrakech, Discover Morocco, Stay in Marrakech, Tour in Morocco, Weekend in Marrakech, Holidays in Morocco
    Tailor-made Travel in Morocco, Local Travel Agency in Morocco, Cultural Travel in Marrakech, Adventure Travel in Morocco, Relaxing Travel in Marrakech
    Gastronomic Travel in Morocco, Luxury Travel in Morocco, Family Travel in Morocco, Solo Travel in Morocco, Senior Travel in Morocco, Accessible Travel in Morocco
    Ecological Travel in Morocco, Marrakech and its Surroundings, Moroccan Desert, Moroccan Atlas Mountains, Fes and Meknes, Moroccan Atlantic Coast, Moroccan South
    Travel differently, Discover the authentic Morocco, Create your tailor-made trip, Your travel partner in Morocco, Let our experts guide you
    `,
};
const Home_1 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Destinations
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-auto">
              <SelectFilter />
            </div>
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* Recommended Properties */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* Block Guide Section */}

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
      {/* End testimonial Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            {/* <Blog /> */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="tabs -pills pt-40 js-tabs">
            <Destinations />
          </div>
          {/* End tabs */}
        </div>
      </section>
      {/* End Destination we love Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
