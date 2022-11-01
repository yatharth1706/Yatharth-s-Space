import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function DSA({ dsaConcepts }) {
  return (
    <div className="p-10 ">
      {dsaConcepts.map((item) => (
        <details>{item?.name}</details>
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
