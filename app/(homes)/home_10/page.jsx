import dynamic from "next/dynamic";
import Header10 from "@/components/header/header-10";
import Hero10 from "@/components/hero/hero-10";
import Link from "next/link";
import Footer8 from "@/components/footer/footer-8";
// import Blog from "@/components/blog/Blog3";
import BlockGuide from "@/components/block/BlockGuide";
import Flights from "@/components/flight/Flights";
import AppBanner from "@/components/home/home-10/AppBanner";
import TopDestinations from "@/components/home/home-10/TopDestinations";
import TestimonialRating from "@/components/home/home-10/TestimonialRating";
import Testimonial from "@/components/home/home-10/Testimonial";
import PopularRoutes from "@/components/home/home-10/PopularRoutes";

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

const home_10 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header10 />
      {/* End Header 5 */}

      <Hero10 />
      {/* End Hero 5 */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why choose Block Guide Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Flights</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/flight-list-v1"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Routes Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative mt-40 sm:mt-20 js-section-slider">
            <TopDestinations />
          </div>
          {/* End slider  */}
        </div>
        {/* End .container */}
      </section>
      {/* End .Top Destinations */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-40 justify-between text-white">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Routes</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
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
          </div>
          {/* End .row */}

          <div className="relative mt-40 sm:mt-20">
            <PopularRoutes />
          </div>
          {/* End relative */}
        </div>
        {/* End .container */}
      </section>
      {/* End popular routes Section */}

      <AppBanner />
      {/* App Banner Section */}

      <section className="layout-pt-lg layout-pb-lg">
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

      <Footer8 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_10), { ssr: false });
