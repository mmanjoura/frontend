import Image from "next/image";

const WhyChooseUs = () => {
  const expertContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Landscapes",
      text: `Diverse Landscapes: Experience the breathtaking beauty of Morocco's diverse landscapes, from the majestic Atlas Mountains and golden Sahara Desert to the picturesque coastal towns and lush oases.`,
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Cultural Heritage",
      text: `Rich Cultural Heritage: Immerse yourself in the vibrant tapestry of Moroccan culture, from bustling medinas and ancient architecture to flavorful cuisine and traditional music.`,
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Authentic",
      text: `Authentic Experiences: Encounter authentic encounters and immerse yourself in the warmth and hospitality of Moroccan hospitality, whether sipping mint tea with locals or exploring centuries-old traditions and craftsmanship.`,
    },
  ];

  return (
    <>
      <div className="section-bg__item -right -image col-5 md:mb-60 sm:mb-40">
        <Image
          width={450}
          height={350}
          src="/img/backgrounds/new/golf_1.webp"
          alt="image"
        />
      </div>
      {/* End right video popup icon with image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-7">
            <h2 className="text-30 fw-600">Why Choose Morocco</h2>
            <p className="mt-5">
            Rich Cultural Heritage: Immerse yourself in the vibrant tapestry of Moroccan culture, from bustling medinas and ancient architecture to flavorful cuisine and traditional music.
            </p>
            <div className="row y-gap-30 pt-60 md:pt-40">
              {expertContent.map((item) => (
                <div className="col-12" key={item.id}>
                  <div className="d-flex pr-30">
                    <Image
                      width={50}
                      height={50}
                      className="size-50"
                      src={item.icon}
                      alt="image"
                    />
                    <div className="ml-15">
                      <h4 className="text-18 fw-500">{item.title}</h4>
                      <p className="text-15 mt-10">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End left local expert content */}
    </>
  );
};

export default WhyChooseUs;
