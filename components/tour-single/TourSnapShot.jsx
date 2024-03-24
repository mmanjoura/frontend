const TourSnapShot = ({tour}) => {
  return (
    <div className="row y-gap-30 justify-between pt-20">
      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-clock text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Duration:
            <br />{tour?.minimum_duration}h
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-customer text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Tolal Price Per Person: 
            <br />€  {tour?.price}
          </div>
        </div>
      </div> 
      {/* End .col

      {/* <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-route text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Near public
            <br /> transportation
          </div>
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-access-denied text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Free cancellation: <br />
          
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TourSnapShot;
