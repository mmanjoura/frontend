import CategoryTypes from "../sidebar/CategoryTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Sidebar = ({golfs}) => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Golfs</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox golfs = {golfs} />
          </div>
        </div>
      </div>
      {/* End search tours */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Category Types</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes golfs = {golfs} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter golfs = {golfs}/>
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider golfs = {golfs} />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Duration</h5>
        <div className="sidebar-checkbox">
          <Duration golfs = {golfs}/>
        </div>
      </div>
      {/* End style filter */}


      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
