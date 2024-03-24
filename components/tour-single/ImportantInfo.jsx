const ImportantInfo = ({tour}) => {
  return (
    <div key="12" className="row x-gap-40 y-gap-40 justify-between pt-20">
    <ul className="list-disc" key="madKey">

    {tour?.important_information?.split("|").slice(1, 20).map((item, index) => (
      <div key={index}>
        <li>{item}</li>
      </div>
))}
  </ul>  
</div>
  );
};

export default ImportantInfo;
