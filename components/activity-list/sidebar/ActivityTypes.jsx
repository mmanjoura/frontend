import { useContentTypesData } from "@/data/contentTypes_data"

const ActivityTypes = () => {

  const contentTypes = useContentTypesData();
  if (!contentTypes) return null;

  
  const activityTypes = [
    { name: "Art and Culture", count: 92 },
    { name: "Food and Drink", count: 45 },
    { name: "Entertainment", count: 21 },
    { name: "Sports", count: 78 },
    { name: "Nature and Outdoors", count: 679 },
  ];

  return (
    <>
      {contentTypes?.data?.slice(0, 6).map((activityType, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{activityType.title}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{activityType.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityTypes;
