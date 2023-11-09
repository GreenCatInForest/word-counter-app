import { useState } from "react";

export const WordCounter = () => {
  const [wordCounter, setWordCounter] = useState(0);

  const handleChange = (event) => {
    const counterValue = event.target.value;
    const cleanCounterValue = counterValue.replace(/ +/g, " ");
    const wordCounterValue = cleanCounterValue.split(" ").length;
    setWordCounter(wordCounterValue);
  };

  const handleReset = () => {
    // document.querySelector("#wordCounterTextArea").reset();
    setWordCounter(0);
  };

  return (
    <div className="mt-3 container w-75 container col-sm-auto text-center border border-1 border-black p-3 p-sm-5 bg-light bg-opacity-25">
      <div className="">
        <textarea
          className="form-control"
          id="wordCounterTextArea"
          rows="8"
          placeholder="Add your words here..."
          onChange={handleChange}
        ></textarea>
      </div>
      <div
        className="mt-3 fw-bolder bg-info bg-gradient rounded-2"
        style={{
          backgroundColor: "info",
          fontFamily: "Ubuntu",
        }}
      >
        Word Count: {wordCounter}
      </div>
      <button
        type="button"
        onClick={handleReset}
        className="mt-3 fw-bolder container col-sm-auto bg-secondary bg-gradient rounded-2"
      >
        Reset
      </button>
    </div>
  );
};
