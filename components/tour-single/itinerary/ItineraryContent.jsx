import Image from "next/image";

const ItineraryContent = ({props}) => {

  return (
    <>
      {props?.itineraries.map((item, id) => (
        <div className="col-12" key={id}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{id + 1}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item?.title}</div>
                <div
                     className={`accordion-collapse collapse`}
                  id={`item_${id + 1}`}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <div className="text-14 lh-17 mt-15">{item?.content}</div>
                  </div>
                </div>
                {/* End accordion conent */}

                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#item_${id + 1}`}
                >
                  <button aria-label="Close" className="d-block lh-15 text-14 text-blue-1 underline fw-500 mt-5">
                    See details
                  </button>
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
