import Head from "next/head";
import PathComponent from "../components/PathComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
          <PathComponent
            sequence={1}
            heading="DSA A to Z"
            summary="Curated list of DSA Questions that are frequently asked in interviews"
            link="/dsa"
          />

          <PathComponent
            sequence={2}
            heading="Frontend Interview Pool"
            summary="Frontend Interview Pool. Contains all frontend technology related interview questions"
            link="/frontend-interviews"
          />

          <PathComponent
            sequence={3}
            heading="System Design"
            summary="Curated list of some frequently asked System Design questions by various product based companies"
            link="/system-design"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <small>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by ❤️ and NextJS
          </a>
        </small>
        <small className="mt-2">
          Author:{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
            Yatharth Verma
          </span>
        </small>
      </footer>
    </div>
  );
}
