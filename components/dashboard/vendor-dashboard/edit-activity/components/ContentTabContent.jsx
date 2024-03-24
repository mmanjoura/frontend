import ActivityContent from "./content/ActivityContent";
const ContentTabContent = ({params}) => {
  console.log("Param: ", params.id);

  return (
    <>
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Content Type</div>
        <ActivityContent  params = {params} />
        <div className="border-top-light mt-30 mb-30" />
      </div>
    </>
  );
};

export default ContentTabContent;
