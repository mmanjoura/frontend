const Overview = ({activity}) => {
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-500">Overview</h3>

          <p className="text-dark-1 text-15 mt-20">
              {activity?.overview}
          </p>
   
        </div>
        <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">
              {activity?.whats_included.split("|").slice(0, 1).map((item, index) => (
                <div key={index}>
                  <li>{item}</li>
                </div>
              ))}
            </h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-30">

                {activity?.whats_included?.split("|").slice(1, 20).map((item, index) => (
                  <div key={index} className="text-dark-1 text-15">
                    <i className="icon-check text-10 mr-10" ></i>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>     
      </div>

      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">
            {activity?.highlights.split("|").slice(0, 1).map((item, index) => (
                    <div key={index}>
                      <li>{item}</li>
                    </div>
                  ))}

            </h3>

            <div key="12" className="row x-gap-40 y-gap-40 justify-between pt-20">
            <ul className="list-disc" key="madKey">
        
            {activity?.highlights?.split("|").slice(1, 10).map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
        ))}
          </ul>  
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
