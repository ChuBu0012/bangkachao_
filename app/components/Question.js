// "use client";
import React, { useEffect } from "react";

const Question = ({ obj, click }) => {
  useEffect(() => {
    console.log(obj);
  }, [obj]);
  return (
    <div className="flex h-fit w-full max-w-72 flex-wrap items-center justify-center gap-4 rounded-lg border border-mutedpurple bg-white px-4 py-8 text-center shadow-md">
      <p className="text-xl whitespace-pre-line text-center">{obj.question}</p>
      {Array.isArray(obj.choice) &&
        obj.choice.map((ele) => {
          return (
            <button
              key={ele.id}
              id={ele.score}
              onClick={() => click(ele.score)}
              className="w-full bg-green-700 text-center p-4 rounded-xl text-white "
            >
              {ele.text} {ele.score}
            </button>
          );
        })}
    </div>
  );
};
export default Question;
