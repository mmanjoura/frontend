const AppButton = () => {
  const appContent = [
    {
      id: 1,
      icon: "icon-apple",
      link: "#",
      text: "Download on the",
      market: "Apple Store",
    },
    {
      id: 2,
      icon: "icon-play-market",
      link: "#",
      text: "Get in on",
      market: "Google Play",
    },
  ];

  return (
    <>
      {appContent.map((item) => (
        <div className="col-auto col-lg-6" key={item.id}>
          <div className="d-flex items-center px-20 py-10 rounded-4 bg-white">
            <i className={`${item.icon} text-24`} />
            <a href={item.link} className="ml-20" aria-label="Login">
              <div className="text-14 text-light-1">{item.text}</div>
              <div className="text-15 lh-1 fw-500">{item.market}</div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppButton;
