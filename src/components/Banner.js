export const Banner = ({ title, subTitle }) => {
  return (
    <div className="container w-75 container col-sm-auto text-center border border-1 border-black p-5">
      <div className="row">
        <div className="col">
          <h1>{title}</h1>
          <h2 className="fs-4">{subTitle}</h2>
        </div>
      </div>
    </div>
  );
};
