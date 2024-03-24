import AccordionContent from "./ItineraryContent";
import MapPropertyFinder from "./MapPropertyFinder";

const index = ({golf}) => {
  return (
    <div className="row y-gap-30">
      <div className="col-lg-4">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent golf = {golf}/>
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      <div className="col-lg-8">
        <div className="">
          <MapPropertyFinder golf = {golf} />
        </div>
      </div>
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
