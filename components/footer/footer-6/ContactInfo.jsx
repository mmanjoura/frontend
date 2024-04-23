const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+212 6 61 19 94 64",
      text: "+212 6 61 19 94 64",
    },
    {
      id: 2,
      title: "Need  support?",
      action: "mailto:xyz@abc.com",
      text: "contact@niyavoyage.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className="mt-30">
            <div className="text-14 mt-30">{item.title}</div>
            <a href="#" className="text-18 fw-500 mt-5" aria-label="Login">
              {item.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
