const TopHeaderFilter = ({tours}) => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            <span className="fw-500">{tours?.data?.length} Tours</span>
          </div>
        </div>
        {/* End .col */}

 
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
