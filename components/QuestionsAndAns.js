import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/coldark-cold";

function QuestionsAndAns({ questions }) {
  console.log(questions);
  return questions?.map((que, index) => (
    <div key={index} className="mb-6 text-sm">
      <h4 className="font-bold mt-2 mb-2 text-lg">
        {index + 1}. {que?.question}
      </h4>
      <ReactMarkdown
        children={que?.answer}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  ));
}

export default QuestionsAndAns;
