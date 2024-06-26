const Overview = ({ golf }) => {
  return (
    <>
    
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
        <br></br>
          <h3 className="text-22 fw-500">Overview</h3>
          
          <p className="text-dark-1 text-15 mt-20">
            {golf?.overview}
          </p>
        </div>

        <div className="col-12">
          <h5 className="text-16 fw-500">
            {golf?.highlights.split("|").slice(0, 1).map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </h5>
          <ul className="list-disc text-15 mt-10">
            {golf?.highlights?.split("|").slice(1, 20).map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* End overview */}

      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">
              {golf?.whats_included.split("|").slice(0, 1).map((item, index) => (
                <div key={index}>
                  <li>{item}</li>
                </div>
              ))}
            </h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-30">

                {golf?.whats_included?.split("|").slice(1, 20).map((item, index) => (
                  <div key={index} className="text-dark-1 text-15">
                    <i className="icon-check text-12 mr-20" ></i>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">
              {golf?.important_information?.split("|").slice(0, 1).map((item, index) => (
                <div key={index}>
                  <li>{item}</li>
                </div>
              ))}
            </h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-30">

                {golf?.important_information?.split("|").slice(1, 20).map((item, index) => (
                  <div key={index} className="text-dark-1 text-15">
                    <i className="icon-check text-12 mr-20" ></i>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">
              {golf?.additional_information?.split("|").slice(0, 1).map((item, index) => (
                <div key={index}>
                  <li>{item}</li>
                </div>
              ))}
            </h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-30">

                {golf?.additional_information?.split("|").slice(1, 20).map((item, index) => (
                  <div key={index} className="text-dark-1 text-15">
                    <i className="icon-check text-12 mr-20" ></i>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

  

    
    </>
  );
};

export default Overview;
