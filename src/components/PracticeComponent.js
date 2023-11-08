import { useState } from "react";

export const PracticeComponent = () => {
  const [counter, setCounter] = useState(0);

  // check if the function takes changed value
  //   let handleChange = (event) => {
  //     console.log(event.target.value);
  //   };

  let handleChange = (event) => {
    setCounter(event.target.value.length);
    console.log(event.target.value);
    console.log();
  };

  return (
    <div>
      <div className="mt-3 container w-75 container col-sm-auto text-center border border-1 border-black p-3 p-sm-5">
        <textarea
          class="form-control"
          id="control"
          rows="8"
          placeholder="Add your words here..."
          // on every change we call the onChange event to execute a function
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mt-3 fw-bolder">Word Count: {counter}</div>
    </div>
  );
};
