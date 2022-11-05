import Link from "next/link";

export default function DSA() {
  return (
    <div className="p-10 ">
      <h1 className="text-2xl font-bold cursor-pointer">
        <Link href="/">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
            Yatharth's <span className="text-white">Space</span>
          </span>
        </Link>
      </h1>
    </div>
  );
}
