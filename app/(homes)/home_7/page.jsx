import dynamic from "next/dynamic";
import DefaultFooter from "@/components/footer/default";
import Header7 from "@/components/header/header-7";
import Hero7 from "@/components/hero/hero-7";
import BlockGuide from "@/components/block/BlockGuide";
import Subscribe from "@/components/home/home-7/Subscribe";
import Blog from "@/components/home/home-7/Blog";
import Counter from "@/components/counter/Counter3";
import Testimonial from "@/components/home/home-7/Testimonial";
import TopDestinations from "@/components/home/home-7/TopDestinations";
import Rentals from "@/components/rentals/Rentals";
import HotelTypes from "@/components/home/home-7/HotelTypes";

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

const home_7 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header7 />
      {/* End Header7 */}

      <Hero7 />
      {/* End Hero 7 */}

      <section className="layout-pt-xl layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Explore by Types of Stays
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 item_gap-x30">
            <HotelTypes />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End ypes of Stays */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Homes Guests Love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Homes Guests Love Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <TopDestinations />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End top destination section */}

      <section className="section-bg rounded-4 overflow-hidden">
        <div className="section-bg__item -left-100 -right-100 bg-blue-2" />
        <div className="section-bg__item col-4 -right-100 lg:d-none">
          <img src="/img/backgrounds/10.png" alt="image" />
        </div>
        {/* End right bg image */}

        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="pt-120 pb-120 lg:pt-80 lg:pb-80">
                <h2 className="text-30 fw-600">Testimonials</h2>
                <p className="mt-5">
                  Interdum et malesuada fames ac ante ipsum
                </p>
                <div className="overflow-hidden pt-60 lg:pt-40">
                  <Testimonial />
                </div>
                {/* End overflow hidden */}
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Testimonial Sectoin */}

      <section className="section-bg pt-40 pb-40">
        <div className="section-bg__item -left-100 -right-100 border-bottom-light"></div>

        <div className="container">
          <div className="row y-gap-30 justify-center text-center">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter section */}

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
          {/* End .row */}

          <div className="blog-grid-1 pt-40">
            <Blog />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End blog section */}

      <section className="layout-pt-md layout-pb-md">
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

          <div className="row y-gap-20 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Block Guide Section */}

      <Subscribe />
      {/* End Subscribe Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_7), { ssr: false });
