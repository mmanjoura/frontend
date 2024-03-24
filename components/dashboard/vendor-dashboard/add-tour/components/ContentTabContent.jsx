import TourContent from "./content/TourContent";
const ContentTabContent = () => {

  return (
    <>
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Tour Content</div>
        <TourContent />
        {/* End HotelContent */}
        <div className="border-top-light mt-30 mb-30" />
      </div>
    </>
  );
};

export default ContentTabContent;