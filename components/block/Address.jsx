const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>Imm Tetouan No7, Mhamid, Marrakech.</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Customer Care",
      content: (
        <>
          <a href="tel:+212 6 61 19 94 64">+212 6 61 19 94 64</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Need  support?",
      content: (
        <>
          {" "}
          <a href="mailto:i@niya-voyage.com">contact@niyavoyage.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
