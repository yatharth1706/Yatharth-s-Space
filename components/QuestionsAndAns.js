import React from "react";
import { PortableText } from "@portabletext/react";

function QuestionsAndAns({ questions }) {
  console.log(questions);
  return questions?.map((que, index) => (
    <div key={index} className="mb-6">
      <h4 className="font-bold">
        Q{index + 1}. {que?.question}
      </h4>
      <PortableText value={que?.answer} />
    </div>
  ));
}

export default QuestionsAndAns;
