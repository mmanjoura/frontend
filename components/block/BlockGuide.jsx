const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Price Guarantee",
      text: `Experience luxury without breaking the bank, thanks to our commitment to the Best Price Guarantee. Your satisfaction, guaranteed.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Easy & Quick Booking",
      text: `Simplify your journey with our Easy & Quick Booking system, designed to make your travel reservations effortlessly convenient`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Customer Care 24/7",
      text: `Your peace of mind is our priority. Contact our Customer Care 24/7 for assistance at any hour, ensuring your needs are met day and night.`,
      delayAnim: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
