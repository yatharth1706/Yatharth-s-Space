import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function FrontendInterviewPool({ frontendInterviewPool }) {
  return (
    <div className="p-10 ">
      <h1 className="text-2xl font-black cursor-pointer">
        <Link href="/">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
            Yatharth's <span className="text-white">Space</span>
          </span>
        </Link>
      </h1>
      <h2 className="mt-2 mb-3 font-bold">Frontend Interview Pool</h2>
      <div className="flex flex-col space-y-6 w-full md:flex-row flex-wrap md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
        {frontendInterviewPool.map((item) => (
          <Link href={`/frontend-interviews/${encodeURIComponent(item?.techStack)}`}>
            <img
              src={item?.bannerPic}
              className="cursor-pointer w-full h-full object-cover  rounded-lg hover:scale-105 md:hover:scale-110 ease-out duration-500"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let frontendInterviewPool = await client.fetch(`*[_type == "frontendInterviewPool"]`);
  frontendInterviewPool.sort((a, b) => b?.techStack - a?.techStack);

  return {
    props: {
      frontendInterviewPool,
    },
  };
}
