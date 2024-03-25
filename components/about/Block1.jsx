import Image from "next/image";

const Block1 = () => {
  return (
    <>
        <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <h1
              className="text-60 lg:text-40 md:text-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Travel with{" "}
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
      <div className="row">
  <div className="col-lg-6 d-flex align-items-center">
    <Image
      width={400}
      height={400}
      src="/img/pages/about/2.png"
      alt="image"
      className="rounded-4 w-100"
    />
  </div>
  {/* End .col */}

  <div className="col-lg-6">

  Niya Voyage is a collaborative effort led by three experienced individuals from diverse backgrounds, each bringing their expertise to provide exceptional tourist experiences. 
  Let's break down their roles and contributions: <br /> <br />
  Our stuff are expert in Tourist Transport world, they specializes in managing and facilitating tourist transportation services. 
  Their expertise may include coordinating logistics, ensuring timely and safe travel for tourists, and maintaining high standards of comfort 
  and convenience during transit. Omar's role is crucial in providing tourists with smooth and hassle-free transportation experiences, 
  whether it involves airport transfers, inter-city travel, or guided tours.
 <br /> <br />
  Others are Experienced Travelers, they bring a wealth of firsthand experience from their extensive travels around the world.  <br /> <br />
  Their insights into different cultures, tourist preferences, and expectations in terms of customer service, comfort, safety, 
  and security are invaluable. Rachid and Mustapha likely understand the nuances of catering to diverse groups of travelers and can anticipate their needs effectively.
  Together, our stuff are form a well-rounded team capable of delivering comprehensive tourist services that prioritize customer satisfaction, comfort, safety, and security. 
  Their combined expertise ensures that Niya Voyage can offer personalized and memorable experiences tailored to meet the evolving demands of modern travelers.<br /> <br />
  Delivering unparalleled comfort is our commitment to you. We take pride in making your satisfaction our top priority, ensuring every aspect of your experience 
  is tailored to your utmost comfort and enjoyment.
 
  </div>
  {/* End .col */}
</div>

      {/* End .col */}
    </>
  );
};

export default Block1;
