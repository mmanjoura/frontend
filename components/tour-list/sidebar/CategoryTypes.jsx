import { useContentTypesData } from "@/data/contentTypes_data"

const CategoryTypes = ({tours, onTypeCheckedFilter}) => {
  const contentTypes = useContentTypesData();
if (!contentTypes) return null;
const handleTypeFilter = (event, tour_id) => {
  if (event.target.checked) {
    onTypeCheckedFilter(tour_id);
  }
  if (!event.target.checked) {
    onTypeCheckedFilter(0);
  }
}



  return (
    <>
        {contentTypes?.data?.slice(0, 6).map((tourType, index) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={index}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
            <input type="checkbox" onChange={(event) => handleTypeFilter(event, tourType?.id)}  />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{tourType.title}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{
                tours?.data?.filter(tour =>
                  tour?.activity_type.includes(index + 1)
                ).length
            }</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
