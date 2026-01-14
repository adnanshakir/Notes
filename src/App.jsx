import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");

  const [Task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted!");

    const copyTask = [...Task];

    copyTask.push({
      title: title,
      details: details,
    });

    setTask(copyTask);

    console.log(copyTask);

    setDetails("");
    settitle("");
  };

  const noteDeleted = (e) => {
    const copyTask = [...Task];
    copyTask.splice(e, 1);
    setTask(copyTask);
  }

  return (
    <div className="min-h-screen w-full bg-[#222] text-white flex flex-col md:flex-row">
      <form
        className="w-full md:w-1/3 flex items-center justify-center p-4"
        onSubmit={submitHandler}
      >
        <div className="w-full max-w-sm bg-[#333] p-4 rounded-md flex flex-col gap-4">
          <h1 className="font-bold text-xl text-center">Add Notes</h1>
          {/* Title  */}
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Title"
            className="p-2 rounded-md focus:outline-none bg-[#444]"
          />
          {/* Detailed Textarea */}
          <textarea
            placeholder="Details"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            rows={8}
            // className="bg-[#444] scroll focus:outline-none rounded-md p-2"
            className="bg-[#444] focus:outline-none rounded-md p-2 resize-none overflow-y-auto"
          ></textarea>
          {/* Submitted */}
          <input
            type="submit"
            value="Add Note"
            className="bg-[#222] rounded-md p-2 font-semibold hover:bg-[#6579e8]"
          />
        </div>
      </form>

      <div className="w-full md:w-2/3 h-screen flex flex-col pt-4 gap-4">
        <h1 className=" font-bold text-xl text-center ">Your Notes</h1>
        <div className="flex gap-4 flex-wrap overflow-y-auto p-2 justify-center lg:justify-start scroll ">
          {Task.map((data, idx) => (
            <div
              key={idx}
              className="group flex flex-col lg:h-58 lg:w-58 p-2 h-44 w-44 bg-[#333] rounded-md"
            >
              {/* header */}
              <div className="flex items-start justify-between gap-2 p-2 mb-2 border-b border-gray-600">
                <h2 className="font-semibold text-sm lg:text-lg line-clamp-2">
                  {data.title}
                </h2>

                <button
                onClick={() => {
                  noteDeleted(idx);
                }}
                  type="button"
                  className="shrink-0 text-gray-400 p-2 hover:scale-150 cursor-pointer active:scale-90 transition-all">
                  <X size={14} strokeWidth={3} />
                </button>
              </div>

              {/* body */}
              <div className="p-2 text-sm flex-1 overflow-y-auto scroll">
                {data.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
