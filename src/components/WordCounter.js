import { useState } from "react";

export const WordCounter = () => {
  const [wordCounter, setWordCounter] = useState(0);

  return (
    <div>
      <div className="mt-3 container w-75 container col-sm-auto text-center border border-1 border-black p-3 p-sm-5">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Add your words here..."
        ></textarea>
      </div>
      <div className="mt-3 fw-bolder">Word Count: {wordCounter}</div>
    </div>
  );
};
