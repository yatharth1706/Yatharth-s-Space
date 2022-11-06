import { createClient } from "next-sanity";
import Link from "next/link";
import Details from "../../components/Details";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function DSA({ dsaConcepts }) {
  return (
    <div className="p-4 md:p-10 ">
      <h1 className="text-2xl font-bold cursor-pointer">
        <Link href="/">
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
            Yatharth's <span className="text-white">Space</span>
          </span>
        </Link>
      </h1>
      <h3 className="mt-2 mb-3 font-bold">DSA A to Z</h3>
      {dsaConcepts.map((item) => (
        <Details rowData={item} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const dsaConcepts = await client.fetch(`*[_type == "dsaConcepts"]`);

  return {
    props: {
      dsaConcepts,
    },
  };
}
