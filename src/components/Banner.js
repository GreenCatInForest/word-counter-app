export const Banner = ({ title, subTitle }) => {
  return (
    <div className="container w-75 container col-sm-auto text-center border border-1 border-black p-4 bg-info bg-gradient bg-opacity-50 rounded-2">
      <div className="row">
        <div className="col">
          <h1
            style={{
              fontFamily: "Ubuntu",
            }}
          >
            {title}
          </h1>
          <h2
            className="fs-4"
            style={{
              fontFamily: "Ubuntu",
            }}
          >
            {subTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};
