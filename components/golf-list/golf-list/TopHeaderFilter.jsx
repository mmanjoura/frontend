const TopHeaderFilter = ({golfs} ) => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            <span className="fw-500">{golfs?.data?.length} Golfs</span>
          </div>
        </div>

      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
