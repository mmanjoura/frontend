import { useContentTypesData } from "@/data/contentTypes_data"

const CategoryTypes = ({golfs, onTypeCheckedFilter}) => {
  const contentTypes = useContentTypesData();
if (!contentTypes) return null;

const handleGolfsTypeFilter = (event, golf_id) => {
  if (event.target.checked) {
    onTypeCheckedFilter(golf_id);
  }
  if (!event.target.checked) {
    onTypeCheckedFilter(0);
  }
}

  return (
    <>
      {contentTypes?.data?.slice(0, 6).map((golfType, index) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={index}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
            <input type="checkbox" onChange={(event) => handleGolfsTypeFilter(event, golfType?.id)}  />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{golfType?.title}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{
              golfs?.data?.filter(golf =>
                golf?.activity_type.includes(index + 1)
              ).length
            }</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
