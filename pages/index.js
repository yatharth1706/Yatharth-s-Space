import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yatharth's Space</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col justify-center items-center h-96">
          <h1 className="text-5xl font-black">Welcome to</h1>
          <h1 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
              Yatharth's
            </span>{" "}
            Space
          </h1>

          <button className="font-bold text-xl bg-gradient-to-r from-cyan-600 to-blue-700 p-4 rounded-full w-60 mt-6">
            Get Started
          </button>
        </div>

        <div className="text-center">
          <h5>Explore paths</h5>

          <div
            className="mx-auto mt-4 h-40 bg-gradient-to-b from-gray-900 to-blue-500"
            style={{ width: "1px" }}
          ></div>
          <div className="mx-auto text-center justify-center flex flex-col rounded-full w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-700">
            <span className="text-xl font-normal">1</span>
          </div>
          <div className="text-center mt-4">
            <h2 className="cursor-pointer font-black bg-gradient-to-r from-cyan-600 to-blue-500 text-transparent bg-clip-text text-xl">
              DSA A to Z
            </h2>
            <span className="text-sm">
              Curated list of DSA Questions that are frequently asked in interviews
            </span>
          </div>
        </div>
      </main>
      {/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by ❤️ and NextJS
        </a>
      </footer> */}
    </div>
  );
}
