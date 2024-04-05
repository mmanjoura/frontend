import { useContentTypesData } from "@/data/contentTypes_data"
import { useState } from "react";

const ActivityTypes = ({activities, onTypeCheckedFilter}) => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");



  const contentTypes = useContentTypesData();
  if (!contentTypes) return null;

  const handleFilteredActivities = (event, activity_id) => {
    if (event.target.checked) {
      setSelectedTypeFilter(activity_id);
      onTypeCheckedFilter(selectedTypeFilter);
    }
  }



  return (
    <>
      {contentTypes?.data?.slice(0, 6).map((activityType, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" onChange={(event) => handleFilteredActivities(event, activityType?.id)}  />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{activityType.title}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{
            
             activities?.data?.filter(activity =>
              activity?.activity_type.includes(index + 1)
            ).length
            }</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityTypes;
