import { createClient } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import QuestionsAndAns from "../../components/QuestionsAndAns";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function TechStack({ techStackQuestions }) {
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-black cursor-pointer">
        <Link href="/">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
            Yatharth's <span className="text-white">Space</span>
          </span>
        </Link>
      </h1>
      <h1 className="font-bold mt-3">{router?.query?.techStack} Questions</h1>

      <div className="rounded-lg p-4 mt-4 text-white-800 bg-gradient-to-r from-gray-700 to-gray-900">
        {techStackQuestions.map((item) => (
          <QuestionsAndAns questions={item?.questions} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  let techStack = context?.params?.techStack;
  console.log(techStack);

  let techStackQuestions = await client.fetch(
    `*[_type == "frontendInterviewPool" && techStack == "${techStack}"]`
  );
  console.log(techStackQuestions);

  return {
    props: {
      techStackQuestions,
    },
  };
}

export async function getStaticPaths() {
  let frontendInterviewPool = await client.fetch(`*[_type == "frontendInterviewPool"]`);

  const paths = frontendInterviewPool.map((item) => ({
    params: { techStack: item.techStack },
  }));

  console.log(paths);

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
