import dynamic from "next/dynamic";
import Header5 from "@/components/header/header-5";
import Hero5 from "@/components/hero/hero-5";
import Link from "next/link";
import Footer4 from "@/components/footer/footer-4";
import Tours2 from "@/components/tours/Tours2";
import TourCategories from "@/components/home/home-5/TourCategories";
import CallToActions from "@/components/home/home-5/CallToActions";
import Blog from "@/components/blog/Blog3";
import Golf2 from "@/components/golfs/Golf2";
import DiscountsBanner from "@/components/home/home-5/DiscountsBanner";
import Counter3 from "@/components/counter/Counter3";
import WhyChooseUs from "@/components/home/home-5/WhyChooseUs";
import Testimonial from "@/components/home/home-5/Testimonial";
import Brand2 from "@/components/brand/Brand2";
import Activity2 from "@/components/activity/Activity2";

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

const home_5 = () => {

  return (
    <>
      {/* End Page Title */}

      <Header5 />
      {/* End Header 5 */}

      <Hero5 />
      {/* End Hero 5 */}

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
                href="./tour-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Choose Tour Types</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  The best tours for you.
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center ">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-tour-type-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-type-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End next */}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <TourCategories />
          </div>
        </div>
      </section>
      {/* End Tours Categories */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Golfing Deals in Morocco</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                 Book your golf holiday with us early.
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center ">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-tour-discounts-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev navigation */}
                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-discount-pagination" />
                </div>
                {/* End pagination */}
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-discounts-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End .next navigation */}
              </div>
            </div>
            {/* End .col for swiper navigation and pagination */}
          </div>
          {/* End .col */}

          <div className="row y-gap-30 pt-40">
            <div className="col-xl-5">
              <DiscountsBanner />
            </div>
            {/* End col-xl-5 */}

            <div className="col-xl-7">
              <Golf2 />
            </div>
            {/* End col-xl-7 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Deals & Discounts */}



      <section className="section-bg layout-pt-lg md:pt-0 md:pb-60 sm:pb-40 layout-pb-lg bg-blue-1-05">
        <WhyChooseUs />
      </section>
      {/* End whycosse Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Popular Activities
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover the best activities for your holiday in Morocco
                </p>
              </div>
            </div>  
                      
          </div>
          
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Activity2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <CallToActions />
      {/* End CallToActions */}

      <Footer4 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_5), { ssr: false });
