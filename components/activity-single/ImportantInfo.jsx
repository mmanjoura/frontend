const ImportantInfo = ({ activity }) => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      <div className="col-lg-4 col-md-6">
     
        <ul className="list-disc">


          {activity?.important_information?.split("|").slice(1, 10).map((item, index) => (
            <div key={index}>
              <li>{item}</li>
            </div>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default ImportantInfo;
