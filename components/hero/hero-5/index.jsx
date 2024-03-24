'use client';
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="masthead -type-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/5/bg.svg" className="js-lazy" />
        <div className="elfsight-app-22e21c9f-992b-491e-ad6d-969dbd09c21a" data-elfsight-app-lazy></div>
      </div>
      {/* End bg image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <h1
              className="text-60 lg:text-40 md:text-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Best Travel{" "}
              <span className="text-blue-1 relative">
                Niya Voyage{" "}
                <span className="-line">
                  <img src="/img/general/line.png" alt="image" />
                </span>
              </span>
            </h1>
            <p className="mt-20" data-aos="fade-up" data-aos-delay="500">
            Experience the diverse array of exhilarating golf, activities, and tour packages available. 
            From arranging <br></br>
            hotel reservations to discovering vacation packages, searching for budget-friendly packages, 
              <br className="lg:d-none" /> and exploring captivating events, we offer a comprehensive range of travel options to suit your preferences.
            </p>

            {/* <MainFilterSearchBox /> */}
            {/* End filter content */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="masthead__image" data-aos="fade">
        <img src="/img/masthead/5/home.webp" alt="image" />
      </div>  

      {/* End .masthead__image */}
    </section>
  );
};

export default Index;
