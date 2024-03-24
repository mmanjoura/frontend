import Image from "next/image";

const ItineraryContent = ({golf}) => {

  return (
    <>
      {golf?.itineraries.map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{item?.id}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item?.title}</div>
                <div className="text-14 lh-15 text-light-1 mt-5">
                {item?.content}
                </div>
                <div
                  id={`item_${item?.id}`}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                  </div>
                </div>
                {/* End accordion conent */}

                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`item_${item?.id}`}
                >
         
                </div>
                {/* End accordion button */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
